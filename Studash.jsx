import "./Studash.css";
import { useLocation, useNavigate } from "react-router-dom";

const Studash = ({ logout, stuuname, fetchclass }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { stuname, studentDetails } = location.state || {};

  const goToProfile = () => {
    navigate("/stuprofile", { state: { studentDetails } });
  };

  const viewclass = () => {
    console.log("Attempting to fetch classes for:", stuname); // Debugging line
    fetchclass(stuname); // Fetch classes when "View Classes" is clicked
  };

  return (
    <div className="studash">
      {stuname ? <h1 className="welcome">Welcome {stuname}</h1> : <h1>Welcome</h1>}
      <button className="profile-button" onClick={goToProfile}>
        View Profile
      </button>
      <button className="view-classes" onClick={viewclass}>
        View Classes
      </button>
      <button className="logout-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Studash;