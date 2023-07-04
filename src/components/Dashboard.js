import { BsPersonCircle, BsEmojiSmile } from "react-icons/bs";
import { Chart as ChartJS } from "chart.js/auto";
import { AiOutlineWifi } from "react-icons/ai";
import { UserData } from '../Data';
import { IoIosPeople } from "react-icons/io";
import { BiTimeFive } from "react-icons/bi"
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import "./Dashboard.css";


const Dashboard = () => {

    const data = [
        {
            id: 1,
            name: "Akash B.",
            date: "24",
            month: "Feb"
        },
        {
            id: 2,
            name: "Saksham R.",
            date: "22",
            month: "Mar"
        },
        {
            id: 3,
            name: "Divyansh M.",
            date: "12",
            month: "Dec"
        },
        {
            id: 4,
            name: "Aniket Y.",
            date: "15",
            month: "Nov"
        },
    ]

    const occasionElement = data.map(data => {
        return (
            <div className="occasion-box" key={data.id}>
                <BsPersonCircle style={{ fontSize: "4rem", color: "#888888" }} />
                <p style={{ color: "#6B9CC6" }}>{data.name}</p>
                <p style={{ color: "#c48a8e" }}>{data.date}<sup>th</sup>{data.month}</p>
            </div>
        )
    })

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.month),
        datasets: [
            {
                label: "Present Days",
                data: UserData.map((data) => data.present),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)'
                ],
                borderWidth: 1
            },
        ]
    })

    return (
        <div className="dashboard">
            <div className="container">
                <div className="row-1">
                    <div className="profile">
                        <div className='width: "40%"'>
                            <BsPersonCircle className="user-image" />
                        </div>
                        <div style={{ width: "60%" }}>
                            <i>Welcome</i>
                            <br />
                            <i style={{ color: "#4b81ac" }}>Abhishek Yadav</i>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <BsEmojiSmile style={{ color: "#444444", fontSize: "25px" }} />
                        </div>
                    </div>

                    <div className="lastsignin">
                        <div>
                            <p>Your Last Sign in</p>
                            <p style={{ color: "#7BC46C" }}>1 day(s) ago</p>
                        </div>
                        <AiOutlineWifi style={{ fontSize: "2.5rem", color: "#444444" }} />
                    </div>

                    <div className="teamsize">
                        <div>
                            <p>My Team Size</p>
                            <p style={{ color: "#d55340" }}>7</p>
                        </div>
                        <span>
                            <IoIosPeople style={{ fontSize: "3rem", color: "#444444" }} />
                        </span>
                    </div>

                    <div className="shifts">
                        <div>
                            <p style={{ fontSize: "1rem" }}>General Shift</p>
                            <p style={{ fontSize: "0.8rem", marginBottom: "5px" }}>(09:03:00 to 17:30:00)</p>
                            <p style={{ fontSize: "0.8rem" }}>First Punch: N/A</p>
                            <p style={{ fontSize: "0.8rem" }}>Last Punch: N/A</p>
                        </div>
                        <span>
                            <BiTimeFive style={{ fontSize: "2rem", color: "#444444" }} />
                        </span>
                    </div>
                </div>

                <div className="row-2">
                    <div className="holidays">
                        <div>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;Upcoming <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Holidays</p>
                            <div className="holiday-1"><br />
                                <p>Holiday</p>
                                <h1>&nbsp;25</h1>
                                <p>Mar-2024</p>
                                <p>Holi</p>
                            </div>
                        </div>
                        <div>
                            <div className="holiday-2">
                                <p>13-Jan-2024</p>
                                <p>Lohri</p>
                            </div>
                            <div className="holiday-3">
                                <p>14-Jan-2024</p>
                                <p>Makar Sakranti</p>
                            </div>
                            <div className="holiday-4">
                                <p>23-Oct-2024</p>
                                <p>Dusshera</p>
                            </div>
                            <div className="holiday-5">
                                <p>12-Nov-2024</p>
                                <p>Diwali</p>
                            </div>
                        </div>
                    </div>
                    <div className="occasion">
                        <ul>
                            <li>Birthdays</li>
                            <li>Anniversaries</li>
                            <li>New Joinees</li>
                        </ul>
                        <div className="box">
                            {occasionElement}
                        </div>
                        <h5 style={{ color: "#8da5b9", textAlign: "center", cursor: "pointer" }}>more...</h5>
                    </div>
                    <div className="barchart-div">
                        <h3 style={{ color: "#57a645", textAlign: "center", marginBottom: "16px" }}>Attendance</h3>
                        <button className="monthly-btn" >Monthly</button><button className="monthly-btn">Yearly</button>
                        <input type="date" className="present-inp" />
                        <Bar data={userData} style={{ height: "200px", width: "300px", margin: "16px", marginTop: "48px" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
