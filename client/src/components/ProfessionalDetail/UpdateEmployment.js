import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "./UpdateEmployment.css";

const UpdateEmployment = (props) => {
    const navigate = useNavigate();
    return (
        <main className="updateEmployment">
            <div className="heading-div">
                <h2 style={{ fontWeight: "100", flex: "1" }}>Update Employment Details</h2>
                <FaTimes style={{ fontSize: "1.4rem", cursor: "pointer", border: "3px solid white", borderRadius: "5px" }} onClick={() => props.setModal(false)} />
            </div>
            <form className="detailFields">
                <div className="form-div">
                    <label for="company-name">Company Name:</label>
                    <input type="text" id="company-name" name="company-name" placeholder="Enter company name" required />
                </div>
                <div className="form-div">
                    <label for="job-title">Job Title:</label>
                    <input type="text" id="job-title" name="job-title" placeholder="Software Tester" />
                </div>

                <div className="form-div">
                    <label for="start-date">Start Date:</label>
                    <input type="date" id="start-date" name="start-date" />
                </div>

                <div className="form-div">
                    <label for="end-date">End Date:</label>
                    <input type="date" id="end-date" name="end-date" />
                </div>
                <div></div>

                <button className="btn-submit">Update</button>
            </form>
        </main>
    );
};

export default UpdateEmployment;
