import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/");
  };
  const [activedash, setActivedash] = useState("");

  // Icon paths
  const dashPaths = {
    dashboard: {
      default: "./img/Dashboard.png",
      active: "./img/Dashboard-active.png",
    },
    addProject: {
      default: "./img/create-project.png",
      active: "./img/create-project-active.png",
    },
    ProjectList: {
      default: "./img/Project-list.png",
      active: "./img/Project-list-active.png",
    }
  };

  const handleOnClick = (iconName, route) => {
    setActivedash(iconName); 
    navigate(route); 
  };

  return (
    <div className="sidebar">
      <ul >
        <Link onClick={() => handleOnClick("dashboard", "/dashboard")} to='/dashboard'>
          <li  style={{marginTop:'290px'}}>
            <img className="dashboard-logo" src={activedash == "dashboard" ? dashPaths.dashboard.active : dashPaths.dashboard.default} alt="" />
          </li>
        </Link>
        <Link onClick={() => handleOnClick("addProject", "/add")} to='/add'>
          <li>
            <img className="add-logo" src={activedash == "addProject" ? dashPaths.addProject.active : dashPaths.addProject.default} alt="" />
          </li>
        </Link>
        <hr/>
        <Link onClick={() => handleOnClick("ProjectList", "/list")} to='/list'>
          <li>
            <img className="list-logo" src={activedash == "ProjectList" ? dashPaths.ProjectList.active : dashPaths.ProjectList.default} alt="" />
          </li>
        </Link>
        <Link to='/'>
          <li>
            <img onClick={handleLogOut}
              style={{
                height: " 25px",
                width: "25px",
                marginTop:'227px',
               marginRight:'27px',
              }}
              src="../img/Logout.png"
            />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
