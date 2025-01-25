import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const Apply = () => {
  const { visa_id } = useParams();
  const { user } = useContext(AuthContext);
  const [visa, setVisa] = useState();
  const navigate = useNavigate();

  console.log(visa_id);

  useEffect(() => {
    axios.get(`http://localhost:5000/visas/${visa_id}`).then((res) => {
      setVisa(res.data);
    });
  }, [visa_id]);

  const handleApply = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const initialData = Object.fromEntries(fromData.entries());

    const currentDate = new Date().toISOString().slice(0, 10);
    initialData.Application_date = currentDate;
    initialData.Visa_id = visa_id;

    axios.post("http://localhost:5000/apply", initialData).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Visa Has been added.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/myVisaApplications");
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleApply} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            name="user_email"
            placeholder="user email"
            className="input input-bordered"
            defaultValue={user?.email}
            readOnly
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Fee</span>
          </label>
          <input
            type="text"
            name="fee"
            placeholder="Fee"
            className="input input-bordered"
            defaultValue={visa?.fee}
            readOnly
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  );
};

export default Apply;
