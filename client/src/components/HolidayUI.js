import React, { useState, useEffect } from 'react'
import axios from "axios"
import HolidayForm from "./HolidayForm";

const HolidayUI = () => {
  const [holidays, setHolidays] = useState()
  // console.log(holidays)

  useEffect(() => {
    axios.get("http://localhost:2030/holiday")
      .then(res => setHolidays(res.data))
  }, [holidays])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:2030/holiday/${id}`)
      //  .then(rs => console.log(rs.data))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main style={{ display: "flex", justifyContent: "center", alignContent: "center", marginTop: "2rem" }}>
      <div className='holidays-list' style={{ minHeight: "50vh" }}>
        <h2 className='holidays-heading'>Holidays</h2>
        <div className='holidays'>
          {holidays && holidays.map((holiday, i) => (
            <div className='holiday'key={holiday._id}>
              <h3 className='holiday-name' style={{fontSize: "1.3rem", color: "#E36F19", textTransform: "uppercase"}}>{holiday.name}</h3>
              <p style={{ fontWeight: "bold" }}>Date: <span style={{ fontWeight: "400" }}>{holiday.date}</span></p>
              <p style={{ fontWeight: "bold" }}>Description: <span style={{ fontWeight: "400" }}>{holiday.description}</span></p>
              <button className='delete-btn' onClick={() => handleDelete(holiday._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
      <HolidayForm />
    </main>
  )
}

export default HolidayUI