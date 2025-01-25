import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useParams } from "react-router-dom";

const VisaUpdate = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [visa, setVisa] = useState();

  useEffect(() => {
    axios.get(`http://localhost:5000/visas/${id}`).then((res) => {
      setVisa(res.data);
    });
  }, [id]);

  const handleAddVisa = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries())
    const initialData = Object.fromEntries(formData.entries());
    // console.log(initialData)

    initialData.required_documents = initialData.required_documents.split("\n");

    console.log(initialData);

    axios.post("http://localhost:5000/Visas", initialData).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Visa Has been added.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/myAddedVisas");
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl">Post a new Job</h2>
      <form onSubmit={handleAddVisa} className="card-body">
        {/* Job title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">country name</span>
          </label>
          <input
            type="text"
            name="country_name"
            placeholder="country_name"
            defaultValue={visa?.country_name}
            className="input input-bordered"
            required
          />
        </div>
        {/* job location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">processing time</span>
          </label>
          <input
            type="text"
            name="processing_time"
            placeholder="processing_time"
            className="input input-bordered"
            defaultValue={visa?.processing_time}
            required
          />
        </div>
        {/* job Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">visa_type</span>
          </label>
          <select
            defaultValue="Pick a Job type"
            className="select select-ghost w-full max-w-xs"
            name="visa_type"
            required
          >
            <option disabled>Pick a Visa type</option>
            <option>Tourist Visa</option>
            <option>Cultural Visa</option>
            <option>Student Visa</option>
            <option>Business Visa</option>
            <option>Medical Visa</option>
            <option>Work Visa</option>
          </select>
        </div>
        {/* job Type */}

        {/* salary range */}

        <div className="form-control">
          <label className="label">
            <span className="label-text">age restriction</span>
          </label>
          <input
            type="number"
            name="age_restriction"
            placeholder="age restriction"
            className="input input-bordered"
            defaultValue={visa?.age_restriction}
            required
          />
        </div>

        {/* Job Description */}

        {/* Company Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">fee</span>
          </label>
          <input
            type="number"
            name="fee"
            placeholder="fee"
            className="input input-bordered"
            defaultValue={visa?.fee}
            required
          />
        </div>

        {/* validity" */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">validity</span>
          </label>
          <input
            type="number"
            name="validity"
            placeholder="validity"
            className="input input-bordered"
            defaultValue={visa?.validity}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">application_method</span>
          </label>
          <input
            type="text"
            name="application_method"
            placeholder="application_method"
            className="input input-bordered"
            defaultValue={visa?.application_methods}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="description"
            name="description"
            defaultValue={visa?.description}
            required
          ></textarea>
        </div>
        {/* requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">required_documents</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="put each requirements in a new line"
            name="required_documents"
            defaultValue={visa?.required_documentss}
            required
          ></textarea>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">country image url</span>
          </label>
          <input
            type="url"
            name="country_image"
            placeholder="country image"
            className="input input-bordered"
            defaultValue={visa?.country_images}
            required
          />
        </div>

        {/* HR Name */}

        {/* HR Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input
            type="text"
            defaultValue={user?.email}
            name="email"
            placeholder="HR Email"
            className="input input-bordered"
            required
          />
        </div>
        {/* application Deadline */}

        {/* HR Name */}

        {/* submit button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default VisaUpdate;
