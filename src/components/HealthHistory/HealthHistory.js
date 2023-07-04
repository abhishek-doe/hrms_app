import React from 'react'
import "./HealthHistory.css"
import { MdHealthAndSafety } from "react-icons/md"
import { BsThreeDotsVertical } from "react-icons/bs"
import { useNavigate } from 'react-router-dom'

const HealthHistory = () => {
    const navigate = useNavigate()

    const healthData = [
        {
            id: 1,
            name: "Bloog Group",
            value: "AB +ve"
        },
        {
            id: 2,
            name: "Height",
            value: "5 feet"
        },
        {
            id: 3,
            name: "Weight",
            value: "56 Kg"
        },
        {
            id: 4,
            name: "Blood Pressure",
            value: "140"
        },
        {
            id: 5,
            name: "Diabetic",
            value: "No"
        }
    ]
    const summeryData = [
        {
            id: 1,
            summery: "Health Information",
            name: "General Checkup",
            date: "11-Aug-2019",
            detail: "General Health Checkup"
        },
        {
            id: 2,
            summery: "Health Information",
            name: "General Checkup",
            date: "11-Aug-2019",
            detail: "General Health Checkup"
        },
        {
            id: 3,
            summery: "Health Information",
            name: "General Checkup",
            date: "11-Aug-2019",
            detail: "General Health Checkup"
        },
    ]
    const healthElement = healthData && healthData.map(data => {
        return (
            <div style={{ display: "grid", display: "flex", gridTemplateColumns: "repeat(2, 1fr)", padding: "1rem 1.5rem", borderBottom: "1px solid #d4d4d4" }} key={data.id}>
                <p style={{ color: "#119acc", flex: "1" }}>{data.name}</p>
                <p style={{ color: "#999999" }}>{data.value}</p>
            </div>
        )
    })
    const summeryElement = summeryData && summeryData.map(data => {
        return (
            <div style={{ padding: "5px 1rem", borderBottom: "1px solid #d4d4d4" }} key={data.id}>
                <div style={{ display: "flex", color: "#999999", margin: "5px 0" }}>
                    <p style={{ flex: "1" }}>{data.name}</p>
                    <p>{data.date}</p>
                </div>
                <p style={{ color: "#999999" }}>{data.detail}</p>
            </div>
        )
    })
    return (
        <main className='healthHistory'>
            <div className='container'>
                <section className='left-side'>
                    <div style={{ background: "#119acc", display: "flex", flexDirection: "column", width: "26rem", borderRadius: "10px 10px 0 0" }}>
                        <div style={{ display: "flex", padding: "1rem 1rem", alignItems: "center" }}>
                            <h3 style={{ color: "white", flex: "1" }}>Physical Information</h3>
                            <button style={{ color: "white", backgroundColor: "#119acc", border: "1px solid white", borderRadius: "30px", padding: "10px 20px" }} onClick={() => navigate("/physicalinfoform")}>Edit</button>
                        </div>
                        <MdHealthAndSafety style={{ color: "white", fontSize: "6rem", display: "flex", justifySelf: "center", alignSelf: "center", margin: ".9rem 0" }} />
                    </div>
                    <div className="health-body">{healthElement}</div>
                </section>

                <section className='right-side'>
                    <div style={{ width: "23rem", borderBottom: "3px solid #d4d4d4", padding: "1rem 1.5rem", color: "#119acc" }}><h3>Summary</h3></div>
                    
                <div style={{ display: "flex", color: "#666666", marginTop: "4px", padding: "5px 1rem" }}>
                    <p style={{ flex: "1" }}><b>Health Summery</b></p>
                    <BsThreeDotsVertical className='threedots' onClick={() => navigate("/addhealthsummery")}/>
                    {/* <div className='edit-del'><p>Edit</p><hr /><p>Delete</p></div> */}
                </div>
                    <div >{summeryElement}</div>
                </section>
            </div>
        </main>
    )
}

export default HealthHistory
