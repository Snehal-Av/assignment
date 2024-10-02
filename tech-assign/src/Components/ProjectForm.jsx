import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import WidthSize from "./WidthSize";
const ProjectForm = () => {
  const width = WidthSize()
  const data = {
    pname: "",
    reasion: "",
    type: "",
    division: "",
    category: "",
    priority: "",
    department: "",
    location: "",
    startDate: "",
    endDate: "",
    status: ""

  };
  const [err, setErr] = useState(false);
  const [projectForm, setProjectForm] = useState(data);

  const navigate = useNavigate();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProjectForm({ ...projectForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:5000/form/project", projectForm)
      .then((resp) => {
        setProjectForm(resp.data);
        navigate("/list");
        console.log(projectForm);
      }
      )
      .catch((error) => {
        setErr(error);
      });
  };

  return (
    <div className="project-form card mx-3 p-4 ">
      <form onSubmit={handleSubmit}>
        <div className="form-text">
          <div className="mb-3">
            <input
              type="textarea"
              className={err && (projectForm.pname).length === 0 ? 'border border-danger' : ""}
              name="pname"
              onChange={handleInput}
              placeholder="Enter Project Theme"
            />
            {/* {err && (projectForm.pname).length < 1 && <p style={{ color: 'red' }}>Enter Project Name is Required</p>} */}
          </div>
          <div className="form-butt mb-3">
            <button type="submit" className="btn btn-primary">
              Save Project
            </button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-3">
            <label>Reason</label>
            <select
              name="reasion"
              onChange={handleInput}
              className="form-select  mb-3"
            >
              <option value="Business"> For Business</option>
              <option value="Transport">Transport</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label>Type</label>
            <select
              name="type"
              value={projectForm.type}
              onChange={handleInput}
              className="form-select  mb-3"
            >
              <option value="Internal">Internal</option>
              <option value="expternal">External</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label>Division</label>
            <select
              name="division"
              onChange={handleInput}
              className="form-select  mb-3"
            >
              <option value="Filter">Filter</option>
              <option value="Compressor">Compressor</option>
              <option value="Pumps">Pumps</option>
              <option value="Glass">Glass</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <label>Category</label>
            <select
              name="category"
              onChange={handleInput}
              className="form-select  mb-3"
            >
              <option value="Quality A">Quality A</option>
              <option value="Quality B">Quality B</option>
              <option value="Quality C">Quality C</option>
              <option value="Quality D">Quality D</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label>Priority</label>
            <select
              name="priority"
              onChange={handleInput}
              className="form-select  mb-3"
            >
              <option value="High">High</option>
              <option value="Low">Low</option>
              <option value="Mediam">Mediam</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label>Department</label>
            <select
              name="department"
              onChange={handleInput}
              className="form-select  mb-3"
            >
              <option value="Startegy">STR</option>
              <option value="Finance">FIN</option>
              <option value="Quality">QLT</option>
              <option value="Maintenence">MAN</option>
              <option value="Stores">STO</option>
              <option value="HR">HR</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <label>Start Date as per Plan</label>
            <br />
            <input
              type='date'
              name="startDate"
              onChange={handleInput}
              className="form-select  mb-3"
            />
            {/* {err && projectForm.startDate.length < 1 && (
              <p style={{ color: "red" }}>Select Starting Date is Required</p>
            )} */}
            {/* {err &&
              projectForm.startDate.length <
              projectForm.endDate.length && (
                <p style={{ color: "red" }}>
                  Start Date is today or greater then today
                </p>
              )} */}
          </div>

          <div className="col-sm-3">
            <label>End Date as per Plan</label>
            <br />
            <input
              type='date'
              name="endDate"
              onChange={handleInput}
              className="form-select mb-3"
            />
            {/* {err && projectForm.endDate.length < 1 && (
              <p style={{ color: "red" }}>Select End Date is Required</p>
            )}
            {err && projectForm.startDate.length > projectForm.endDate.length && (
              <p style={{ color: "red" }}>End Date greater than Start Date</p>
            )} */}
          </div>


          <div className="col-sm-3">
            <label>Location</label>
            <select
              name="location"
              onChange={handleInput}
              className="form-select mb-3"
            >
              <option value="Pune">Pune</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
            </select>
            <div>
              <p style={{ float: "right" }}>status:Registered</p>
            </div>
          </div>

        </div>
        {/* {width < 700 ? <div className="form-butt mb-3">
            <button type="submit" className="btn btn-primary w-100">
              Save Project
            </button>
          </div> : ""} */}
      </form>
    </div>
  );
};

export default ProjectForm;
