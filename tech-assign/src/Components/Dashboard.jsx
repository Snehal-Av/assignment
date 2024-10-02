import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ChartDep from "./ChartDep";
import WidthSize from "./WidthSize";
import axios from "axios";

const Dashboard = () => {
    const width = WidthSize();

    const [dashCard,setDashCard]=useState([])

     const getDashCardsData=async()=>{
     await axios.get("http://localhost:5000/form/dashcard")
     .then((res)=>{
        setDashCard(res.data)
        console.log(res.data)
     }).catch((error)=>{
        console.log(error);
        
     })
     }
    useEffect(()=>{
        getDashCardsData()
    },[])
    return (
        <div className="dashboard ">
            <NavBar />
            <div className="dash-cards ">
                <div className="dash-header">
                    <p style={{marginLeft:'30px',marginRight:'110px',marginBottom:'40px',fontSize:'23px',color:'white',fontWeight:'600'}}>Dashboard</p>
                    <img 
                        className="dash-logo  start-50"
                        src="./img/Logo (1).png"
                        alt=""
                    />
                </div>{
                    width > 700 ?
                        <div class="box mx-2 ">

                            <div class="card mx-2">
                                <div class="card-r row g-0">
                                    <div
                                        style={{
                                            backgroundColor: "skyblue",
                                            borderRadius: "4px",
                                            height: "100px",
                                            width: "9px",
                                        }}
                                        className="card-d col-2"
                                    ></div>
                                    <div className="col-10">
                                        <div class="card-body">
                                            <div className="pro-title"> Total Project </div>
                                            <div className="total-num">{dashCard.totalPro}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mx-2">
                                <div class="card-r row g-0">
                                    <div
                                        style={{
                                            backgroundColor: "skyblue",
                                            borderRadius: "4px",
                                            height: "100px",
                                            width: "9px",
                                        }}
                                        class="col-2"
                                    ></div>
                                    <div class="col-10">
                                        <div class="card-body">
                                            <div className="pro-title"> Closed </div>
                                            <div className="total-num">{dashCard.closedPro}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mx-2">
                                <div class="card-r row g-0">
                                    <div
                                        style={{
                                            backgroundColor: "skyblue",
                                            borderRadius: "4px",
                                            height: "100px",
                                            width: "9px",
                                        }}
                                        class="col-2"
                                    ></div>
                                    <div class="col-10">
                                        <div class="card-body">
                                            <div className="pro-title"> Running </div>
                                            <div className="total-num">{dashCard.runningPro}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mx-2">
                                <div class="card-r row g-0">
                                    <div
                                        style={{
                                            backgroundColor: "skyblue",
                                            borderRadius: "4px",
                                            height: "100px",
                                            width: "9px",
                                        }}
                                        class="col-2"
                                    ></div>
                                    <div class="col-10">
                                        <div class="card-body">
                                            <div className="pro-title"> Closure Delay</div>
                                            <div className="total-num">{dashCard.closureDelayPro}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mx-2">
                                <div class="card-r row g-0">
                                    <div
                                        style={{
                                            backgroundColor: "skyblue",
                                            borderRadius: "4px",
                                            height: "100px",
                                            width: "9px",
                                        }}
                                        class="col-2"
                                    ></div>
                                    <div class="col-10">
                                        <div class="card-body">
                                            <div className="pro-title">Cancelled </div>
                                            <div className="total-num">{dashCard.cancelledPro}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> :
                       <div class="box mx-2 ">

                       <div class="card">
                           <div class="card-r row g-0">
                               <div
                                   style={{
                                       backgroundColor: "skyblue",
                                       borderRadius: "4px",
                                       height: "100px",
                                       width: "9px",
                                   }}
                                   className="card-d col-2"
                               ></div>
                               <div className="col-10">
                                   <div class="card-body">
                                       <div className="pro-title"> Total Project </div>
                                       <div className="total-num">{dashCard.totalPro}</div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="card ">
                           <div class="card-r row g-0">
                               <div
                                   style={{
                                       backgroundColor: "skyblue",
                                       borderRadius: "4px",
                                       height: "100px",
                                       width: "9px",
                                   }}
                                   class="col-2"
                               ></div>
                               <div class="col-10">
                                   <div class="card-body">
                                       <div className="pro-title"> Closed </div>
                                       <div className="total-num">{dashCard.closedPro}</div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="card">
                           <div class="card-r row g-0">
                               <div
                                   style={{
                                       backgroundColor: "skyblue",
                                       borderRadius: "4px",
                                       height: "100px",
                                       width: "9px",
                                   }}
                                   class="col-2"
                               ></div>
                               <div class="col-10">
                                   <div class="card-body">
                                       <div className="pro-title"> Running </div>
                                       <div className="total-num">{dashCard.runningPro}</div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       
                      
                   </div>

                }
                <h4 className="mx-4 p-2">Department Wise - Total Vs Closed</h4>
                <div className="chart mx-4">
                    <ChartDep />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
