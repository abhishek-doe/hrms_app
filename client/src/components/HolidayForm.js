import React, { useState } from 'react';
import axios from "axios"
import "./HolidayForm.css"

const HolidayForm = () => {
  const [holidayData, setHolidayData] = useState({
    name: "",
    date: "",
    description: ""
  })
  const handleInputChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setHolidayData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:2030/holiday", { ...holidayData })
      // .then(res => console.log(res.data))
  } catch (err) {
    console.log(err)
  }
}
return (
  <form className="holiday-form" onSubmit={handleSubmit}>
    <h2>Add Holiday</h2>
    <div>
      <label htmlFor="name">Cause:</label>
      <input
        type="text"
        id="name"
        value={holidayData.name}
        name="name"
        onChange={handleInputChange}
        required
      />
    </div>
    <div>
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={holidayData.date}
        name="date"
        onChange={handleInputChange}
        required
      />
    </div>
    <div>
      <label htmlFor="description">Description:</label>
      <textarea
        className='textarea'
        id="description"
        value={holidayData.description}
        name="description"
        onChange={handleInputChange}
        required
      ></textarea>
    </div>
    <button type="submit" className='add-holiday'>Add</button>
  </form>
);
};

const HolidaysPage = () => {

  return (
    <div>
      <div className="holidays-page">
        <HolidayForm />
      </div>
    </div>
  );
};

export default HolidaysPage;
