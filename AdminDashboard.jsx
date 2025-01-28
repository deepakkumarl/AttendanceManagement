import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import './AdminDashboard.css'; // Import the CSS for styling

const AdminDashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { stuname, studentDetails } = location.state || {};

    // Logout function
    const logout = () => {
        axios.post("http://localhost:3000/api/user/logout", {}, { withCredentials: true })
            .then((res) => {
                if (res.status >= 200 && res.status < 300) {
                    window.location.href = "/login";
                    alert("You have been logged out.");
                }
            })
            .catch((err) => {
                alert("There was an error logging out.");
            });
    };

    // Navigate to Admin Classes page
    const navigateToClasses = () => {
        navigate("/adminclasses");
    };

    // Navigate to Student Management page
    const navigateToStudentManagement = () => {
        navigate("/adminstudents");
    };

    // Navigate to View Classes page
    const navigateToViewClasses = () => {
        navigate("/adminviewclasses");
    };

    return (
        <div className="admin-dashboard">
            <h1>Welcome {stuname}</h1>
            {studentDetails && (
                <div className="student-details">
                    <p><strong>Student Details:</strong></p>
                    <p>Name: {studentDetails.name}</p>
                    <p>Email: {studentDetails.email}</p>
                    <p>Roll Number: {studentDetails.rollNumber}</p>
                </div>
            )}

            {/* Buttons to navigate to different pages */}
            <div className="buttons-container">
                <button onClick={navigateToClasses} className="admin-classes-button">
                    Create Classes
                </button>

                <button onClick={navigateToStudentManagement} className="admin-students-button">
                    Manage Students
                </button>

                <button onClick={navigateToViewClasses} className="view-classes-button">
                    View Created Classes
                </button>
            </div>

            {/* Logout Button */}
            <button onClick={logout} className="logout-button">
                Logout
            </button>
        </div>
    );
};

export default AdminDashboard;
