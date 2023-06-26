import React from 'react'
import "./UpdateQualification.css"
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const UpdateQualification = () => {
    const navigate = useNavigate()
    return (
        <main className="updateQualification">
            <div className="heading-div">
                <h2 style={{ fontWeight: "100", flex: "1" }}>Update Qualification Details</h2>
                <FaTimes style={{ fontSize: "1.4rem", cursor: "pointer" }} onClick={() => navigate("/professionaldetail")} />
            </div>
            <form className="detailFields">
                <div className="form-div">
                    <label htmlFor="id">Level</label>
                    <select id="id" required>
                        <option value="bsc">B.Sc Computers</option>
                        <option value="btech">B.tech</option>
                        <option value="bca">B.C.A.</option>
                        <option value="mca">M.C.A.</option>
                        <option value="highSchool">High School</option>
                    </select>
                </div>
                <div className="form-div">
                    <label htmlFor="name">College/University</label>
                    <input id="name" type="text" placeholder='JNTUH' required />
                </div>
                <div className="form-div">
                    <label htmlFor="passout">Year Pass Out</label>
                    <input id="passout" type="number" placeholder='2011' required />
                </div>
                <div className="form-div">
                    <label htmlFor="gpa">GPA Score(%)</label>
                    <input id="gpa" type="number" placeholder='95' required />
                </div>
                <div></div>

                <button className="btn-submit">
                    Update
                </button>
            </form>
        </main>
    )
}

export default UpdateQualification
