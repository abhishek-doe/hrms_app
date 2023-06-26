import { Route, Routes } from 'react-router-dom';
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import Holiday from "./components/HolidayForm"
import HolidayUI from './components/HolidayUI';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Dashboard from './components/Dashboard';

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<EmployeeForm />}/>
        <Route path='/holiday' element={<Holiday />} />
        <Route path='/holidayui' element={<HolidayUI />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
