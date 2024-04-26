import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Elms from './components/Employee/Elms';
import About from './components/Admin/About';
import Login from './components/Login';
import Signup from './components/admin';
import Contact from './components/Admin/Contact';
import Admin from './components/Admin/Admin';
import Hr from './components/Hr/Hr';
import Employee from './components/Employee/Employee';
import Add from './components/Admin/Add';
import Delete from './components/Admin/Delete';
import EmployeeLeave from './components/Employee/EmployeeLeave';
import LeaveHistory from './components/Hr/LeaveHistory';
import Manage from './components/Hr/Manage';
import AdminSettings from './components/Admin/AdminSettings';
import View from './components/Admin/View';
import Taken from './components/Employee/Taken'; // Import the LeavesTaken component
import Help from './components/Hr/Help';



function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adminlogin" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/elms" element={<Elms />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/hr" element={<Hr />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/applyleave" element={<EmployeeLeave />} />
        <Route path="/leavehistory" element={<LeaveHistory />} />
        <Route path="/addemployee" element={<Add/>} />
        <Route path="/deleteemployee" element={<Delete/>} />
        <Route path="/manageleave" element={<Manage/>} />
        <Route path="/settings" element={<AdminSettings/>} />
        <Route path="/viewemployees" element={<View/>} />
        <Route path="/leavestaken" element={<Taken/>} />
        <Route path="/help" element={<Help/>} />
      </Routes>
    </div>
  );
};

export default App;
