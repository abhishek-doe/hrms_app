import React from 'react'
import "./UpdateLanguage.css"
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const UpdateLanguage = (props) => {
    const navigate = useNavigate()
    return (
        <main className="updateLanguage">
            <div className="heading-div">
                <h2 style={{ fontWeight: "100", flex: "1" }}>Update Language Details</h2>
                <FaTimes style={{ fontSize: "1.4rem", cursor: "pointer", border: "3px solid white", borderRadius: "5px" }} onClick={() => props.setModal(false)} />
            </div>
            <form className="detailFields">
                <div className="form-div">
                    <label for="languages">Languages:</label>
                    <select id="languages" name="languages" required>
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                        <option value="french">French</option>
                        <option value="german">German</option>
                        <option value="chinese">Chinese</option>
                    </select>
                </div>
                <div className="form-div">
                    <label for="fluency">Fluency:</label>
                    <select id="fluency" name="fluency" required>
                        <option value="good">Good</option>
                        <option value="medium">Medium</option>
                        <option value="bad">Bad</option>
                    </select>
                </div>
                <div className="form-div">
                    <label for="competency">Competency:</label>
                    <select id="competency" name="competency" required>
                        <option value="advanced">Advanced</option>
                        <option value="begineer">Begineer</option>
                        <option value="intermediate">Intermediate</option>
                    </select>
                </div>

                <button className="btn-submit">
                    Update
                </button>
            </form>
        </main>
    )
}

export default UpdateLanguage
