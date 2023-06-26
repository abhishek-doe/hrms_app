import React, { useState, useEffect } from 'react';
import "./HolidayForm.css"
import { useDispatch } from 'react-redux';
import { holiday } from '../featured/hoildayData';
import { useNavigate } from 'react-router-dom';

const HolidayForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [serial, setSerial] = useState(0)
  const [data, setData] = useState([])

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new holiday object
    if (name == "" && description == "") {
      alert("Please Fill All the fields")
    } else {
      setSerial(() => serial + 1)
      const newHoliday = {
        id: Date.now(),
        serial,
        name,
        date,
        description
      };
      // Add the new holiday to the list
      // addHoliday(newHoliday);
      dispatch(holiday(newHoliday))
      setData(prev => ({ ...prev, newHoliday }))
      // Reset the form fields
      setName('');
      setDate('');
      setDescription('');
      navigate('/holidayui')
    }

  };

useEffect(() => {
  console.log(data)
}, [data])

  return (
    <form className="holiday-form" onSubmit={handleSubmit}>
      <h2>Add Holiday</h2>
      <div>
        <label htmlFor="name">Cause:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
