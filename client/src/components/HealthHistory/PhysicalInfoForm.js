import React from 'react'
import "./PhysicalInfoForm.css"
import { FaTimes } from "react-icons/fa"

const PhysicalInfoForm = (props) => {

    return (
        <main className='physicalInfo'>
            <div className="heading-div">
                <h2 style={{ fontWeight: "100", flex: "1" }}>Add Physical Information</h2>
                <FaTimes style={{ fontSize: "1.4rem", cursor: "pointer", border: "3px solid white", borderRadius: "5px" }} onClick={() => props.setModal(false)} />
            </div>
            <form className="detailFields">
                <div className="form-div">
                    <label for="blood-group">Blood Group:</label>
                    <select id="blood-group" name="blood-group" required>
                        <option value="">--Select--</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>
                <div className="form-div">
                    <label for="height">Height</label>
                    <div>
                        <input type="number" id="height" name="height" placeholder="Enter your height" style={{ width: "9rem" }} required />
                        <select id="select" name="select" style={{ width: "9rem" }}>
                            <option value="">--Select--</option>
                        </select>
                    </div>
                </div>

                <div className="form-div">
                    <label for="weight">Weight</label>
                    <div>
                        <input type="number" id="weight" name="weight" placeholder="Enter your weight" style={{ width: "9rem" }} required />
                        <select id="select" name="select" style={{ width: "9rem" }}>
                            <option value="">--Select--</option>
                        </select>
                    </div>
                </div>
                <div className="form-div">
                    <label for="bp">Blod Pressure</label>
                    <input type="bp" id="bp" name="bp" placeholder="Enter your blood pressure" required />
                </div>
                <div className="form-div">
                    <label for="diabetic">Diabetic?</label>
                    <select id="diabetic" name="diabetic" required>
                        <option value="">--Select--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                </div>
                <button className="btn-submit">
                    Add
                </button>
            </form>
        </main>
    )
}

export default PhysicalInfoForm
