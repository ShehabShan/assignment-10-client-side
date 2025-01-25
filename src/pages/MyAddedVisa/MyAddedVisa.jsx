import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyAddedVisa = () => {
  const { user } = useAuth();
  const [visas, setVisas] = useState([]);
  console.log(visas);

  useEffect(() => {
    // axios
    //   .get(`job-portal-server-for-recruiter-part3-rho-two.vercel.app/job-application?email=${user.email}`, {
    //     withCredentials: true,
    //   })
    //   .then((res) => setJobs(res.data));

    axios.get(`http://localhost:5000/visas?email=${user.email}`).then((res) => {
      setVisas(res.data);
    });
  }, [user.email]);

  const hanldeDelete = async (_id) => {
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
        axios.delete(`http://localhost:5000/visas/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            const remainingVisa = visas.filter((visa) => visa._id !== _id);
            setVisas(remainingVisa);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl">My Applications: {visas.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>processing</th>
              <th>validity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {visas.map((visa, index) => (
              <tr key={visa._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={visa?.country_image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{visa?.country_name}</div>
                      <div className="text-sm opacity-50">
                        {visa?.visa_type}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {visa?.processing_time}
                  <br />
                  <span className="badge badge-ghost badge-sm text-[18px] mt-2">
                    ${visa?.fee}
                  </span>
                </td>
                <td>{visa?.validity} Days</td>
                <th>
                  <button
                    onClick={() => hanldeDelete(visa?._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <MdDeleteForever className="text-xl" />
                  </button>
                  <Link to={`/updateVisa/${visa?._id}`}>
                    <button className="btn btn-ghost btn-xs">
                      <MdEdit className="text-xl" />
                    </button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAddedVisa;
