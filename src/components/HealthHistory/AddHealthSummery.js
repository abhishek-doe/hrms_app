import React from "react";
import "./AddHealthSummery.css";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddHealthSummery = () => {
    const navigate = useNavigate();
    return (
        <main className="addHealthSummery">
            <div style={{boxShadow: "rgb(0 0 0/35%) 0px 4px 20px", borderRadius: "10px", padding: "0 10px"}}>
            <div className="heading-div">
                <h2 style={{ fontWeight: "100", flex: "1", color: "#119acc" }}>Add Health Summery</h2>
                <FaTimes style={{ fontSize: "1.4rem", cursor: "pointer" }} onClick={() => navigate("/healthhistory")} />
            </div>
            <form className="detailFields">
                <div style={{display: "flex", marginBottom: "1rem"}}>
                    <div className="form-div" style={{flex: "1"}}>
                        <label for="health-history-type">Health History Type:</label>
                        <select id="health-history-type" name="health-history-type" required>
                            <option value="">--Select--</option>
                            <option value="accident">Accident</option>
                            <option value="checkup">Check-up</option>
                            <option value="surgery">Surgery</option>
                            <option value="chronic-condition">Chronic Condition</option>
                            <option value="allergy">Allergy</option>
                        </select>
                    </div>
                    <div className="form-div">
                        <label for="sub-history">Sub-History:</label>
                        <input type="text" id="sub-history" name="sub-history" required />
                    </div>
                </div>
                <div className="form-div">
                    <label htmlFor="email">Date Of Birth</label>
                    <input id="email" type="date" required />
                </div>
                <br />
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label for="comments">Comments:</label>
                    <textarea id="comments" name="comments"></textarea>
                </div>
                <button className="btn-submit">Submit</button>
            </form>
            </div>
        </main>
    );
};

export default AddHealthSummery;
