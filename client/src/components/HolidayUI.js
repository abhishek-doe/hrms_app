import React from 'react'
import { useSelector } from 'react-redux';
import HolidayForm from "./HolidayForm";

const HolidayUI = () => {
  const holidays = useSelector(state => state.holiday)

  return (
    <main style={{ display: "flex", justifyContent: "center", alignContent: "center", marginTop: "2rem" }}>
      <div className='holidays-list' style={{ minHeight: "50vh" }}>
        <h2 className='holidays-heading'>Holidays</h2>
        <ul className='holiday-list'>
          {holidays && holidays.map((holiday, i) => (
            <li key={holiday.id}>
              <div className='serial-name'>
                <h3>{holiday.name}</h3>
              </div>
              <p style={{ fontWeight: "bold" }}>Date: <span style={{ fontWeight: "400" }}>{holiday.date}</span></p>
              <p style={{ fontWeight: "bold" }}>Description: <span style={{ fontWeight: "400" }}>{holiday.description}</span></p>
            </li>
          ))}
        </ul>
      </div>
      <HolidayForm />
    </main>
  )
}

export default HolidayUI