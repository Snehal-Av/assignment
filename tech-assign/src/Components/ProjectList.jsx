import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import Pagination from "./Pagination";
import { ArrowBackIosNew, KeyboardArrowDown } from "@mui/icons-material";
import NavBar from "./NavBar";
import WidthSize from "./WidthSize";
import { useNavigate, useParams } from "react-router";

const ProjectList = () => {
  const width = WidthSize();

  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
  };

  const [searchProject, setSearchProject] = useState("");
  const [pList, setPList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 4;

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const rows = pList.slice(firstIndex, lastIndex);

  const prevPage = () => {
    if (currentPage === 1) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage - 1);
      if (currentPage <= 0) {
        currentPage = 1;
        setCurrentPage(currentPage);
      }
    }
  };
  const nextPage = () => {
    let pageNum = currentPage + 1;
    setCurrentPage(pageNum);
    if (pageNum >= 4) {
      pageNum = 4;
      setCurrentPage(pageNum);
    }
  };

  const getAllData = async () => {
    await axios
      .get(`http://localhost:5000/form/getproject?pageNum=${currentPage}`)
      .then((resp) => {
        setPList(resp.data);
        console.log(resp.data);
      });
  };

  const handleUpdate = async (id, status) => {
    await axios
      .put(`http://localhost:5000/form/updateproject/${id}/status`, { status })
      .then((res) => {
        console.log(res.data);
        navigate('/list')
        getAllData();
      });
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleSearch = (e) => {
    setSearchProject(e.target.value);
  };

  let sortIncReasion = () => {
    let sortreasion = pList.sort((a, b) => (a.reasion > b.reasion ? 1 : -1));
    setPList([...sortreasion]);
  };

  let sortIncType = () => {
    let sortreasion = pList.sort((a, b) => (a.type > b.type ? 1 : -1));
    setPList([...sortreasion]);
  };

  let sortIncDivision = () => {
    let sortreasion = pList.sort((a, b) => (a.division > b.division ? 1 : -1));
    setPList([...sortreasion]);
  };

  let sortIncCategory = () => {
    let sortreasion = pList.sort((a, b) => (a.type > b.type ? 1 : -1));
    setPList([...sortreasion]);
  };
  let sortIncPriority = () => {
    let sortPriority = pList.sort((a, b) => (a.priority > b.priority ? 1 : -1));
    setPList([...sortPriority]);
  };
  let sortIncDepartment = () => {
    let sortDEpartment = pList.sort((a, b) =>
      a.department > b.department ? 1 : -1
    );
    setPList([...sortDEpartment]);
  };
  let sortIncLocation = () => {
    let sortLocation = pList.sort((a, b) => (a.location > b.location ? 1 : -1));
    setPList([...sortLocation]);
  };
  let sortIncStatus = () => {
    let sortStatus = pList.sort((a, b) => (a.status > b.status ? 1 : -1));
    setPList([...sortStatus]);
  };

  return (
    <div className="project-list">
      <NavBar />
      <div className="dash-cards">
        <div className="dash-header">
          <span style={{ color: "white", fontWeight: "700" }}>
            <ArrowBackIosNew className="arrow mx-2" />
            Project Listing
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
        <div className={width > 700 ? "project-form card mx-3 " : ""}>
          <div class="list-box">
            <div className="mb-sort d-flex justify-content-between">
              <div>
                <form class="d-flex ">
                  <input
                    className="search p-2"
                    type="search"
                    onChange={handleSearch}
                    placeholder="search"
                  />
                </form>
              </div>
              <div className="float-end">
                <label>Sort By:</label>
                <div class="dropdown">
                  <button class="dropbtn">
                    Priority <KeyboardArrowDown style={{ fontSize: "36px" }} />
                  </button>
                  <div class="dropdown-content ">
                    <p onClick={sortIncReasion}>Reasion</p>
                    <p onClick={sortIncType}>Type</p>
                    <p onClick={sortIncDivision}>Division</p>
                    <p onClick={sortIncCategory}>Category</p>
                    <p onClick={sortIncPriority}>Priority</p>
                    <p onClick={sortIncDepartment}>Department</p>
                    <p onClick={sortIncLocation}>Location</p>
                    <p onClick={sortIncStatus}>Status</p>
                  </div>
                </div>
              </div>
            </div>
            <table>
              {width > 700 ? (
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Reasion</th>
                    <th>Type</th>
                    <th>Division</th>
                    <th>Category</th>
                    <th>Priority</th>
                    <th>Dept.</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
              ) : (
                " "
              )}
              <tbody>
                {rows
                  .filter((projSearch) => {
                    return projSearch.pname
                      .toLowerCase()
                      .includes(searchProject.toLocaleLowerCase());
                  })
                  .map((item) => {
                    return (
                      <>
                        {width > 700 ? (
                          <tr>
                            <div>
                              <th
                                className="pname pb-1"
                                style={{ color: "#414950", fontSize: "16px" }}
                              >
                                {item.pname}
                                <div className="p-date pt-1 mb-2">
                                  {moment().format("ll")} to{" "}
                                  {moment().format("ll")}
                                </div>
                              </th>
                            </div>

                            <td>{item.reasion}</td>
                            <td>{item.type}</td>
                            <td>{item.division}</td>
                            <td>{item.category}</td>
                            <td>{item.priority}</td>
                            <td>{item.department}</td>
                            <td>{item.location}</td>
                            <td>{item.status}</td>

                            <td className="d-flex">
                              <button
                                onClick={() =>
                                  handleUpdate(item._id, "Running")
                                }
                                className="start w-50 p-1 m-2 rounded-pill btn btn-primary"
                              >
                                start
                              </button>

                              <button
                                onClick={() => handleUpdate(item._id, "Closed")}
                                className="start w-50 p-1 m-2 rounded-pill btn btn-outline-primary"
                              >
                                Close
                              </button>
                              <button
                                onClick={() =>
                                  handleUpdate(item._id, "Cancelled")
                                }
                                className="start w-50 p-1 m-2 rounded-pill btn btn-outline-primary"
                              >
                                Cancel
                              </button>
                            </td>
                          </tr>
                        ) : (
                          <tr>
                            <div className="d-flex m-2">
                              <th
                                style={{ color: "#414950", fontSize: "16px" }}
                              >
                                {item.pname}
                                <div className="p-date mt-1">
                                  {moment().format("ll")} to{" "}
                                  {moment().format("ll")}
                                </div>
                              </th>
                              <p
                                style={{ fontWeight: 600, marginLeft: "37px" }}
                              >
                                {item.status}
                              </p>
                            </div>
                            <div className="tbl-data m-1 pe-2">
                              <td>
                                <span>
                                  <label>Reason</label>
                                </span>
                                :{item.reasion}
                              </td>
                              <td>
                                <span>
                                  <label>Type</label>
                                </span>
                                :{item.type}
                              </td>
                              <td>
                                <span>
                                  <label>Division</label>
                                </span>
                                :{item.division}
                              </td>
                              <td>
                                <span>
                                  <label>Category</label>
                                </span>
                                :{item.category}
                              </td>
                              <td>
                                <span>
                                  <label>Priority</label>
                                </span>
                                :{item.priority}
                              </td>
                              <td>
                                <span>
                                  <label>Department</label>
                                </span>
                                :{item.department}
                              </td>
                              <td>
                                <span>
                                  <label>Location</label>
                                </span>
                                :{item.location}
                              </td>
                              {/* <td><span>Reason</span>:{item.status}</td> */}
                            </div>
                            <td className="d-flex m-2">
                              <button
                                type="submit"
                                onClick={() =>
                                  handleUpdate(item._id, "Running")
                                }
                                className="start w-50 mt-2 rounded-pill btn btn-primary"
                              >
                                start
                              </button>
                              <button
                                onClick={() => handleUpdate(item._id, "Closed")}
                                className="close w-50 mt-2 rounded-pill btn btn-outline-primary"
                              >
                                Close
                              </button>
                              <button
                                onClick={() =>
                                  handleUpdate(item._id, "Cancled")
                                }
                                className="cancle w-50 mt-2 rounded-pill btn btn-outline-primary"
                              >
                                Cancle
                              </button>
                            </td>
                          </tr>
                        )}
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="pagin">
          <Pagination
            prevPage={prevPage}
            nextPage={nextPage}
            pageNo={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
