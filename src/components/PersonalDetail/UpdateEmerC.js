import React from 'react'
import "./UpdateEmerC.css"
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const UpdateEmerC = () => {
    const navigate = useNavigate()

  return (
    <main className="updateEmergencyC">
            <div className="heading-div">
                <h2 style={{ fontWeight: "100" }}>Update Emergency Contact Details</h2>
                <FaTimes style={{ fontSize: "1.4rem", cursor: "pointer" }} onClick={() => navigate("/personaldetail")} />
            </div>
            <form className="detailFields">
            <div className="form-div">
                    <label htmlFor="name">Emergency Contact Name</label>
                    <input id="name" type="text" placeholder='Charlie' />
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
                    <label htmlFor="number">Emergency Contact No.</label>
                    <input id="number" type="number" placeholder='9827634213' />
                </div>

                
                <button className="btn-update">
                    UPDATE
                </button>
            </form>
        </main>
  )
}

export default UpdateEmerC
