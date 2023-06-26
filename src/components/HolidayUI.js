import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HolidayUI = () => {
  const holidays = useSelector(state => state.holiday)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(holidays)
  }, [holidays])

  return (
    <div style={{display:"flex", justifyContent: "center", alignContent: "center"}}>
      <div className='holidays-list' style={{ minHeight: "50vh" }}>
        <button onClick={() => navigate("/holiday")} style={{ padding: "1rem 2rem", background: "rgb(22, 101, 175)", color: "white", borderRadius: "10px", border: "none", margin: "1rem 45%" }}>Add Holiday</button>
        <h2 className='holidays-heading'>Holidays</h2>
        <ul className='holiday-list'>
          {holidays && holidays.map((holiday) => (
            <li key={holiday.id}>
              <div className='serial-name'>
                <h3>{holiday.serial}.&nbsp;</h3>
                <h3>{holiday.name}</h3>
              </div>
              <p>Date: <span style={{ fontWeight: "bold" }}>{holiday.date}</span></p>
              <p>Description: <span style={{ fontWeight: "700" }}>{holiday.description}</span></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HolidayUI


