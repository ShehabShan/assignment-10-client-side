import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import VisaApplicationCard from "./VisaApplicationCard";
import Swal from "sweetalert2";

const MyVisaApplication = () => {
  const { user } = useAuth();
  const [applyVisas, setApplyVisas] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/apply?email=${user?.email}`)
      .then((res) => {
        setApplyVisas(res.data);
      });
  }, []);

  const handleCancle = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/apply/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            const remainingVisa = applyVisas.filter((visa) => visa._id !== _id);
            setApplyVisas(remainingVisa);
            Swal.fire({
              title: "Cancle!",
              text: "Your apply is Cancle.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-4xl text-center mt-6">My Visa Applications</h2>
      <div className="grid grid-cols-3 gap-3 mt-6">
        {applyVisas?.map((visa, index) => (
          <VisaApplicationCard
            key={index}
            visa={visa}
            handleCancle={handleCancle}
          ></VisaApplicationCard>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplication;
