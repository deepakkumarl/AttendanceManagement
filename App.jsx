import { useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Createacc from './Createacc.jsx';
import Login from './Login.jsx';
import axios from "axios";
import Studash from './Studash.jsx';
import StuuserProfile from './Stuuserprofile.jsx';
import Stuclasses from './Stuclasses.jsx';
import AdminDashboard from './AdminDashboard.jsx';
import AdminClasses from './AdminClasses.jsx';
import ViewClasses from './ViewClasses.jsx'; // Import ViewClasses
import ProtectedRoute from './ProtectedRoute.jsx';
import AdminStudentManagement from './AdminStudentManagement.jsx';

function App() {
  const navigate = useNavigate();

  // State for creating account
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');

  // State for login
  const [namel, setNamel] = useState('');
  const [emaill, setEmaill] = useState('');
  const [passwordl, setPasswordl] = useState('');
  const [rolel, setRolel] = useState('');

  // State for classes
  const [classes, setClasses] = useState([]);

  const createAcc = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/user/signup", { name, email, password, role })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          console.log("Account created successfully");
          setName('');
          setEmail('');
          setPassword('');
          setRole('');
          setMessage("Account created Successfully");
        }
      })
      .catch((err) => {
        console.error("Error creating account:", err);
        setMessage("Error in creating the Account");
      });
  };

  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/user/login", {
      name: namel,
      email: emaill,
      password: passwordl,
      role: rolel,
    })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          console.log("Login successful", res);
          const stuname = res.data.name;
          const studentDetails = res.data;
          const userRole = res.data.role;
  
          if (userRole === "admin") {
            navigate("/admin", { state: { stuname, studentDetails } }); 
          } else if (userRole === "student") {
            navigate("/studash", { state: { stuname, studentDetails } });
          } else {
            alert("Unauthorized role");
          }
        }
      })
      .catch((err) => {
        console.log("Login error:", err);
        alert("Login failed. Please check your credentials.");
      });
  };

  const logout = () => {
    axios.post("http://localhost:3000/api/user/logout", {}, { withCredentials: true })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          window.location.href = "/login";
          alert("You have been logged out.");
        }
      })
      .catch((err) => {
        alert("There is an error in logout.");
      });
  };

  // Add a new class
  const addClass = (newClass) => {
    setClasses([...classes, newClass]);
  };

  // Delete a class
  const deleteClass = (id) => {
    setClasses(classes.filter((classItem) => classItem.id !== id));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Createacc
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            role={role}
            setRole={setRole}
            createAcc={createAcc}
            message={message}
            setMessage={setMessage}
          />
        }
      />
      <Route
        path="/login"
        element={
          <Login
            namel={namel}
            setNamel={setNamel}
            emaill={emaill}
            setEmaill={setEmaill}
            passwordl={passwordl}
            setPasswordl={setPasswordl}
            rolel={rolel}
            setRolel={setRolel}
            login={login}
          />
        }
      />
      <Route
        path="/studash"
        element={
          <Studash
            logout={logout}
          />
        }
      />
      <Route
        path="/stuprofile"
        element={<StuuserProfile />}
      />
      <Route
        path="/viewclass"
        element={<Stuclasses />}
      />
      <Route
        path='/admin'
        element={
          <ProtectedRoute role={rolel} allowedRoles={["admin"]}>
            <AdminDashboard /> 
          </ProtectedRoute>
        }
      />
      <Route
        path='/adminclasses'
        element={
          <ProtectedRoute role={rolel} allowedRoles={["admin"]}>
            <AdminClasses addClass={addClass} /> {/* Pass addClass as a prop */}
          </ProtectedRoute>
        }
      />
      <Route
        path='/adminviewclasses'
        element={
          <ProtectedRoute role={rolel} allowedRoles={["admin"]}>
            <ViewClasses classes={classes} deleteClass={deleteClass} /> {/* Pass classes and deleteClass */}
          </ProtectedRoute>
        }
      />
      <Route
        path='/adminstudents'
        element={
          <ProtectedRoute role={rolel} allowedRoles={["admin"]}>
            <AdminStudentManagement />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
