import React, {useState, useEffect} from 'react'
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
    try{
     await axios.delete(`http://localhost:2030/holiday/${id}`)
     .then(rs => console.log(rs.data))
    } catch(error){
      console.log(error)
    }
  }

  return (
    <main style={{ display: "flex", justifyContent: "center", alignContent: "center", marginTop: "2rem" }}>
      <div className='holidays-list' style={{ minHeight: "50vh" }}>
        <h2 className='holidays-heading'>Holidays</h2>
        <ul className='holiday-list'>
          {holidays && holidays.map((holiday, i) => (
            <div  key={holiday._id}>
              <li>
                <div className='serial-name'>
                  <h3 className='holiday-name'>{holiday.name}</h3>
                </div>
                <p style={{ fontWeight: "bold" }}>Date: <span style={{ fontWeight: "400" }}>{holiday.date}</span></p>
                <p style={{ fontWeight: "bold" }}>Description: <span style={{ fontWeight: "400" }}>{holiday.description}</span></p>
              <button style={{border: "none", width: "100%", marginTop: "1.5rem", borderRadius: "10px", background: "#da3633", margin: "10px 0px", color: "white", padding: "12px", float:"right"}} onClick={() => handleDelete(holiday._id)}>Delete</button>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <HolidayForm />
    </main>
  )
}

export default HolidayUI