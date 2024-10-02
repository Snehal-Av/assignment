import React from "react";
import ProjectForm from "./ProjectForm";
import { ArrowBackIosNew } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import WidthSize from "./WidthSize";

const ProjectCreate = () => {
  const width = WidthSize();
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/");
  };
  return (
    <div className="projectcreate ">
      <NavBar />
      <div className="dash-cards">
        <div className="dash-header">
          <span style={{ color: "white", fontWeight: "700" }}>
            <ArrowBackIosNew className="arrow mx-2" />
            Create Project
          </span>
          {width > 700 ? (
            <img
              className="dash-logo  start-50"
              src="./img/Logo (1).png"
              alt=""
            />
          ) : (
            <img
              onClick={handleLogOut}
              style={{
                height: " 20px",
                width: "20px",
                marginLeft: "160px",
                marginRight: "12px",
              }}
              src="../img/logout.256x256 (2).png"
            />
          )}
        </div>
        <ProjectForm />
      </div>
    </div>
  );
};

export default ProjectCreate;
