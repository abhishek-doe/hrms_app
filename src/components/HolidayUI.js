import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';


const HolidayUI = () => {
  const holidays = useSelector(state => state.holiday)

useEffect(() => {
  console.log(holidays)
}, [holidays])

  return (
    <div className='holidays-list' style={{minHeight: "50vh"}}>
        <h2 className='holidays-heading'>Holidays</h2>
        <ul className='holiday-list'>
          {holidays && holidays.map((holiday) => (
            <li key={holiday.id}>
              <div className='serial-name'>
                <h3>{holiday.serial}.&nbsp;</h3>
                <h3>{holiday.name}</h3>
              </div>
              <p>Date: <span style={{fontWeight: "bold"}}>{holiday.date}</span></p>
              <p>Description: <span style={{fontWeight: "700"}}>{holiday.description}</span></p>
            </li>
          ))} 
        </ul>
      </div>
  )
}

export default HolidayUI


