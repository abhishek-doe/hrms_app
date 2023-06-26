import React from 'react'
import "./UpdateSkill.css"
import { useNavigate } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

const UpdateSkill = () => {
    const navigate = useNavigate()

  return (
    <main className="updateSkill">
            <div className="heading-div">
                <h2 style={{ fontWeight: "100", flex: "1" }}>Update Skill Details</h2>
                <FaTimes style={{ fontSize: "1.4rem", cursor: "pointer" }} onClick={() => navigate("/professionaldetail")} />
            </div>
            <form className="detailFields">
                <div className="form-div">
                    <label htmlFor="id">Skill Name</label>
                    <select id="id" required>
                        <option value="">Select a Skill</option>
                        <option value="automation">Automation</option>
                        <option value="front-end">Front-end Developer</option>
                        <option value="back-end">Back-end Developer</option>
                        <option value="cloud">Cloud Engineer</option>
                    </select>
                </div>
                <div className="form-div">
                    <label htmlFor="name">Experience</label>
                    <input id="name" type="number" placeholder='3' required/>
                </div>

                <div className="form-div">
                    <label htmlFor="address">Competency</label>
                    <select id="address" placeholder="Male" required>
                        <option value="">Select a option</option>
                        <option value="begineer">Begineer</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>
                <div className="form-div">
                    <label htmlFor="email">Skill Acquired</label>
                    <input id="email" type="text" required/>
                </div>
                <div></div>

                <button className="btn-submit">
                    Update
                </button>
            </form>
        </main>
  )
}

export default UpdateSkill
