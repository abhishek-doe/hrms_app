import React from 'react'
import "./AddDependent.css"
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"

const AddDependent = () => {
    const navigate = useNavigate()

    return (
        <main className="addDependent">
            <div className="heading-div">
                <h2 style={{ fontWeight: "100" }}>Add Dependent Details</h2>
                <FaTimes style={{ fontSize: "1.4rem", cursor: "pointer" }} onClick={() => navigate("/")} />
            </div>
            <form className="detailFields">
                <div className="form-div">
                    <label htmlFor="name">Dependent Name</label>
                    <input id="name" type="text" />
                </div>
                <div className="form-div">
                    <label htmlFor="id">Relationship</label>
                    <select id="id">
                        <option value="">Select a relationship</option>
                        <option value="father">Father</option>
                        <option value="mother">Mother</option>
                        <option value="son">Son</option>
                        <option value="daughter">Daughter</option>
                        <option value="grandfather">Grandfather</option>
                        <option value="grandmother">Grandmother</option>
                        <option value="uncle">Uncle</option>
                        <option value="aunt">Aunt</option>
                        <option value="brother">Brother</option>
                        <option value="sister">Sister</option>
                        <option value="cousin">Cousin</option>
                        <option value="friend">Friend</option>
                        <option value="partner">Partner</option>
                        <option value="spouse">Spouse</option>
                    </select>
                </div>

                <div className="form-div">
                    <label htmlFor="address">Gender</label>
                    <select id="address" placeholder="Male">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="form-div">
                    <label htmlFor="email">Date Of Birth</label>
                    <input id="email" type="date" />
                </div>

                <button className='addMoreD'>Add More</button>
                <button className="btn-submit">
                    Submit
                </button>
            </form>
        </main>
    )
}

export default AddDependent
