import { BsPersonCircle, BsEmojiSmile } from "react-icons/bs";
import { Chart as ChartJS } from "chart.js/auto";
import { AiOutlineWifi } from "react-icons/ai";
import { UserData, UserData1 } from "../Data";
import { IoIosPeople } from "react-icons/io";
import { BiTimeFive } from "react-icons/bi";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import "./Dashboard.css";

const Dashboard = () => {
  const [occasion, setOccasion] = useState(1)
  const [isMonthly, setIsmonthly] = useState(1)

  const [data, setData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Monthly Present Days",
        data: UserData.map((data) => data.present),
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)"],
        borderWidth: 1,
      },
    ],
  })

  const [data1, setData1] = useState({
    labels: UserData1.map((data) => data.month),
    datasets: [
      {
        label: "Yearly Present Days",
        data: UserData1.map((data) => data.present),
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)"],
        borderWidth: 1,
      },
    ],
  })

  const occasionF = (data) => data.map((data) => {
    return (
      <div className="occasion-box" key={data.id} style={{ cursor: "pointer" }}>
        <BsPersonCircle style={{ fontSize: "4rem", color: "#888888" }} />
        <p style={{ color: "#256196" }}>{data.name}</p>
        <p style={{ color: "#c5636a" }}>
          {data.date}
          <sup>th</sup>
          {data.month}
        </p>
      </div>
    );
  });

  return (
    <div className="dashboard">
      <div className="container">
        <div className="row-1">
          <div className="profile">
            <div className='width: "40%"'>
              <BsPersonCircle className="user-image" />
            </div>
            <div style={{ width: "60%", maxHeight: "7rem", overflowY: "scroll" }}>
              <i>Welcome</i>
              <br />
              <i style={{ color: "#4b81ac", wordWrap: "break-word" }}>Abhishek Yadav</i>
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
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Upcoming <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Holidays
              </p>
              <div className="holiday-1" style={{ background: "#ff8021" }}>
                <br />
                <p>Holiday</p>
                <h1>&nbsp;25</h1>
                <p>Mar-2024</p>
                <p>Holi</p>
              </div>
            </div>
            <div>
              <div className="holiday-2" style={{ background: "#5fccf3" }}>
                <p>13-Jan-2024</p>
                <p>Lohri</p>
              </div>
              <div className="holiday-3" style={{ background: "#1ceb83" }}>
                <p>14-Jan-2024</p>
                <p>Makar Sakranti</p>
              </div>
              <div className="holiday-4" style={{ background: "#5dceb0" }}>
                <p>23-Oct-2024</p>
                <p>Dusshera</p>
              </div>
              <div className="holiday-5" style={{ background: "#33bbcb" }}>
                <p>12-Nov-2024</p>
                <p>Diwali</p>
              </div>
            </div>
          </div>
          <div className="occasion">
            <ul>
              <li onClick={() => setOccasion(1)} className={occasion === 1 ? "tags-active" : "tags"}>&emsp;Birthdays</li>
              <li onClick={() => setOccasion(2)} className={occasion === 2 ? "tags-active" : "tags"}>Anniversaries</li>
              <li onClick={() => setOccasion(3)} className={occasion === 3 ? "tags-active" : "tags"}>&nbsp;New Joinees</li>
            </ul>
            <div className="box">
              {
                occasion === 1 &&
                occasionF(birthdays)
              }
              {
                occasion === 2 &&
                occasionF(anniversary)
              }
              {
                occasion === 3 &&
                occasionF(freshers)
              }
            </div>
            <h5 style={{ color: "#8da5b9", textAlign: "center", cursor: "pointer" }}>more...</h5>
          </div>
          <div className="barchart-div">
            <h3 style={{ color: "#57a645", textAlign: "center", marginBottom: "16px" }}>Attendance</h3>
            <button className={isMonthly == 1 ? "monthly-btn-active" : "monthly-btn"} onClick={() => setIsmonthly(1)}>Monthly</button>
            <button className={isMonthly == 2 ? "monthly-btn-active" : "monthly-btn"} onClick={() => setIsmonthly(2)}>Yearly</button>
            <input type="date" className="present-inp" />
            {
              isMonthly == 1 &&
              <Bar data={data} style={{ height: "200px", width: "300px", margin: "16px", marginTop: "48px" }} />
            }
            {
              isMonthly == 2 &&
              <Bar data={data1} style={{ height: "200px", width: "300px", margin: "16px", marginTop: "48px" }} />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
const birthdays = [
  {
    id: 1,
    name: "Akash B.",
    date: "24",
    month: "Feb",
  },
  {
    id: 2,
    name: "Saksham R.",
    date: "22",
    month: "Mar",
  },
  {
    id: 3,
    name: "Divyansh M.",
    date: "12",
    month: "Dec",
  },
  {
    id: 4,
    name: "Aniket Y.",
    date: "15",
    month: "Nov",
  },
];
const anniversary = [
  {
    id: 1,
    name: "Sakski",
    date: "12",
    month: "Dec",
  },
  {
    id: 2,
    name: "Suresh",
    date: "31",
    month: "Aug",
  },
  {
    id: 3,
    name: "Mehak",
    date: "21",
    month: "Sep",
  },
  {
    id: 4,
    name: "Abhishek",
    date: "09",
    month: "Oct",
  },
];
const freshers = [
  {
    id: 1,
    name: "Shivam",
    date: "12",
    month: "Jan",
  },
  {
    id: 2,
    name: "Lalit Y.",
    date: "22",
    month: "Apr",
  },
  {
    id: 3,
    name: "Suhail",
    date: "12",
    month: "Jun",
  },
  {
    id: 4,
    name: "Sneha",
    date: "15",
    month: "Jul",
  },
];


