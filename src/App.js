import { Route, Routes } from 'react-router-dom';
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import HolidayUI from './components/HolidayUI';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Dashboard from './components/Dashboard';
import TaskBoard from './components/TaskBoard';
import PersonalDetailsPage from './components/PersonalDetail/PersonalDetailPage';
import UpdatePersonalDetails from './components/PersonalDetail/UpdatePersonalDetails';
import AddDependent from './components/PersonalDetail/AddDependent';
import UpdateEmerC from './components/PersonalDetail/UpdateEmerC';
import AddAddressD from './components/PersonalDetail/AddAddressD';
import ProfessionalDetail from './components/ProfessionalDetail/ProfessionalDetail';
import UpdateSkill from './components/ProfessionalDetail/UpdateSkill';
import UpdateQualification from './components/ProfessionalDetail/UpdateQualification';
import UpdateLanguage from './components/ProfessionalDetail/UpdateLanguage';
import UpdateEmployment from './components/ProfessionalDetail/UpdateEmployment';
import JobDetail from './components/JobDetail/JobDetail';
import DocumentDetail from './components/DocumentDetail/DocumentDetail';
import HealthHistory from './components/HealthHistory/HealthHistory';
import PhysicalInfoForm from './components/HealthHistory/PhysicalInfoForm';
import AddHealthSummery from './components/HealthHistory/AddHealthSummery';
import Login from './components/Login/Login';
import ForgotPassword from './components/Login/ForgotPassword';
import EmployeeUi from './components/EmployeeUi';
import ProtectedRoutes from './components/ProtectedRoutes';
import EssLeave from './components/LeaveManagement/EssLeave';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [isSideMenu, setIsSideMenu] = useState(false);

  useEffect(() => {
    // When the state 'stopScrolling' changes, add or remove the CSS class to disable/enable scrolling
    setTimeout(() => {
      if (isSideMenu) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }

    }, 200)
  }, [isSideMenu]);


  return (
    <main>
      <Navbar isSideMenu={isSideMenu} setIsSideMenu={setIsSideMenu} />
      <Routes>
        {/* <Route element={<ProtectedRoutes />}> */}
        <Route path="/" exact element={<PersonalDetailsPage />} />
        <Route path="/employeeform" exact element={<EmployeeForm />} />
        <Route path='/holidayui' exact element={<HolidayUI />} />
        <Route path='/taskboard' exact element={<TaskBoard />} />
        <Route path='/dashboard' exact element={<Dashboard />} />
        <Route path='/updatepersonaldetails' exact element={<UpdatePersonalDetails />} />
        <Route path='/adddependent' exact element={<AddDependent />} />
        <Route path='/updateemergencycontact' exact element={<UpdateEmerC />} />
        <Route path='/addaddressdetails' exact element={<AddAddressD />} />
        <Route path='/professionaldetail' exact element={<ProfessionalDetail />} />
        <Route path='/updateskill' exact element={<UpdateSkill />} />
        <Route path='/updatequalification' exact element={<UpdateQualification />} />
        <Route path='/updatelanguage' exact element={<UpdateLanguage />} />
        <Route path='/updateemployment' exact element={<UpdateEmployment />} />
        <Route path='/jobdetail' exact element={<JobDetail />} />
        <Route path='/documentdetail' exact element={<DocumentDetail />} />
        <Route path='/healthhistory' exact element={<HealthHistory />} />
        <Route path='/physicalinfoform' exact element={<PhysicalInfoForm />} />
        <Route path='/addhealthsummery' exact element={<AddHealthSummery />} />
        <Route path='/employeeui' exact element={<EmployeeUi />} />
        <Route path='/essleave' exact element={<EssLeave />} />
        {/* </Route> */}
        <Route path='/login' exact element={<Login />} />
        <Route path='/forgotpassword' exact element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
