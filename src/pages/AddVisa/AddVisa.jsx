import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddVisa = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

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

export default AddVisa;
