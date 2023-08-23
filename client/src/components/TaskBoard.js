import React, { useState } from 'react'
import "./TaskBoard.css"
import { BiBell } from "react-icons/bi"
import { AiOutlineMail, AiFillEdit } from "react-icons/ai"
import { FaExclamation } from "react-icons/fa"
import { MdMarkChatRead } from "react-icons/md"
import { RiDeleteBin6Line } from "react-icons/ri"

const Dashboard2 = () => {
    const [status, setStatus] = useState(1)

    const taskElement = tasksData && tasksData.map((data) => {
        return (
            <div className='tasks-box' key={data.id} style={{ borderLeft: `6px solid ${data.color}` }}>
                <div className='tasks-li'>
                    <h4 style={{ color: data.color }}>{data.name}  </h4>
                    <span className='tasks-time' style={{ fontSize: "14px", color: "#9a9a9a" }}>{data.time}</span>
                </div>
                <p style={{ fontSize: "13px" }}>{data.content}</p>
            </div>
        )
    })

    const statusElement = (status) => status && status.map((data) => {
        return (
            <div key={data.id} style={{ backgroundColor: data.color }} className='status-box'>
                <h3>{data.status}</h3>
                <p>{data.name}</p>
            </div>
        )
    })

    const taskBoardElement = taskBoardData && taskBoardData.map((data) => {
        return (
            <div className='taskBoard-box' key={data.id}>
                <div style={{ display: "flex", gap: "21px", marginBottom: "10px" }}>
                    <p style={{ color: "#658297" }}>{data.date}</p>
                    <p style={{ color: "#658297" }}>{data.time}</p>
                    <p style={{ color: "#e4c463" }}>{data.status}</p>
                </div>
                <p style={{ color: "#8c8c8c" }}>{data.description}</p>
                <div className='editDelete-div'>
                    <div className='edit-div' style={{ color: '#e4c463' }}>
                        <AiFillEdit />
                        <p>Edit</p>
                    </div>
                    <div className='edit-div' style={{ color: '#9aaec9' }}>
                        <MdMarkChatRead />
                        <p>Mark as Completed</p>
                    </div>
                    <div className='edit-div' style={{ color: "#E0818B" }}>
                        <RiDeleteBin6Line />
                        <p>Delete</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <main className='dashboard-2'>
            <div className='container'>
                <section className='col-1'>
                    <div className="pop-ups-div">
                        <div className='pop-ups'>
                            <BiBell style={{ fontSize: "26px" }} />
                            <p>
                                Alerts
                            </p>
                        </div>
                        <div className='pop-ups'>
                            <AiOutlineMail style={{ fontSize: "26px" }} />
                            <p>
                                Messages
                            </p>
                        </div>
                        <div className='pop-ups'>
                            <FaExclamation style={{ fontSize: "26px" }} />
                            <p>
                                Requests
                            </p>
                        </div>
                    </div>
                    <div className='tasks-div'>
                        {taskElement}
                    </div>
                </section>

                <section className='col-2'>
                    <div className='duty-leave-div'>
                        <div className='team-time'>
                            <p>My Team - Today's On Duty / On Leave</p>
                        </div>
                        <div className='duty-leave'>
                            <h2 style={{ color: "#7794b0" }}>4 <span style={{ color: "#787878", fontSize: "16px" }}> / 6</span> </h2> <p>On Duty</p> <div className='vl'></div>
                            <h2 style={{ color: "#d36655" }}>2 <span style={{ color: "#787878", fontSize: "16px" }}> / 6</span> </h2> <p>On Leave</p>
                        </div>
                    </div>

                    <div className='duty-requests'>
                        <b style={{ marginTop: "10px", color: "#545454", fontSize: "17px" }}>On Leave / On Duty Requests</b>
                        <div className='leaves-btn-div'>
                            <button className={status == 1 ? 'leave-btn-active' : 'leave-btn'} onClick={() => setStatus(1)}>Leaves</button>
                            <button className={status == 2 ? 'leave-btn-active' : 'leave-btn'} onClick={() => setStatus(2)}>On Duty</button>
                            <input type="date" className='leave-inp' />
                        </div>
                        <div className='status-div'>
                            {status == 1 &&statusElement(statusData)}
                            {status == 2 &&statusElement(statusData1)}
                        </div>
                    </div>
                </section>

                <section className='col-3'>
                    <div className='taskBoard-div'>
                        <h4>Task Board</h4>
                        &emsp;&emsp;&emsp;&emsp;<p>Today</p>
                        <p className='all-btn'>All</p>
                    </div>
                    <div style={{ background: "#eee" }}>
                        <input type='date' className='taskBoard-inp' />
                    </div>

                    <div className='taskBoardData-div'>
                        {taskBoardElement}
                    </div>

                </section>
            </div>
        </main>
    )
}

export default Dashboard2

const tasksData = [
    {
        id: 1,
        color: "blue",
        name: "Training",
        time: "4 month(s) ago",
        content: "Calan George(EUAU24) would like to attend the training Time management and waiting for your approval. Please take action."
    },
    {
        id: 2,
        color: "#f1b502",
        name: "LMS",
        time: "2 month(s) ago",
        content: "Calan George(EUAU24) would like to attend the training Time management and waiting for your approval. Please take action."
    },
    {
        id: 3,
        color: "#ea4e2d",
        name: "Time Sheets",
        time: "5 month(s) ago",
        content: "Calan George(EUAU24) would like to attend the training Time management and waiting for your approval. Please take action."
    },
    {
        id: 4,
        color: "#f1b502",
        name: "Training",
        time: "6 month(s) ago",
        content: "Calan George(EUAU24) would like to attend the training Time management and waiting for your approval. Please take action."
    },
    {
        id: 5,
        color: "#ea4e2d",
        name: "Training",
        time: "9 month(s) ago",
        content: "Calan George(EUAU24) would like to attend the training Time management and waiting for your approval. Please take action."
    },
]

const statusData = [
    {
        id: 1,
        color: "#e46e60",
        name: "Pending",
        status: 12,
    },
    {
        id: 2,
        color: "#f5b400",
        name: "Rejected",
        status: 30,
    },
    {
        id: 3,
        color: "#2dc3e8",
        name: "Cancelled",
        status: 19,
    },
    {
        id: 4,
        color: "#a0d468",
        name: "Approved",
        status: 22,
    },
]

const statusData1 = [
    {
        id: 1,
        color: "#e46e60",
        name: "Pending",
        status: 20,
    },
    {
        id: 2,
        color: "#f5b400",
        name: "Rejected",
        status: 123,
    },
    {
        id: 3,
        color: "#2dc3e8",
        name: "Cancelled",
        status: 56,
    },
    {
        id: 4,
        color: "#a0d468",
        name: "Approved",
        status: 102,
    },
]

const taskBoardData = [
    {
        id: 1,
        date: "10-Feb-2023",
        time: "12:30 AM",
        description: "My team has to give enspire demo",
        status: "Pending..."
    },
    {
        id: 2,
        date: "22-Jan-2023",
        time: "10:00 AM",
        description: "My team has to give enspire demo",
        status: "Completed"
    },
    {
        id: 3,
        date: "30-May-2023",
        time: "12:00 AM",
        description: "My team has to give enspire demo",
        status: "Pending..."
    },
    {
        id: 4,
        date: "11-Jun-2023",
        time: "9:30 AM",
        description: "My team has to give enspire demo",
        status: "Completed"
    },
    {
        id: 5,
        date: "28-Aug-2023",
        time: "12:45 AM",
        description: "My team has to give enspire demo",
        status: "Pending..."
    }
]