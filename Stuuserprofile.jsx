import { useLocation } from "react-router-dom";
import "./Stuuserprofile.css"

const StuuserProfile = () => {
  const location = useLocation();
  const { studentDetails } = location.state || {};

  if (!studentDetails) {
    return <h2>No student details available</h2>;
  }
  const formattedDate = new Date(studentDetails.createdAt).toLocaleDateString("en-US", {
    weekday: "long", 
    year: "numeric",  
    month: "long",    
    day: "numeric"   
  });

  return (
    <div className="profile">
      <h1>Welcome, {studentDetails.name}</h1>
      <p>Email: {studentDetails.email}</p>
      <p>Role: {studentDetails.role}</p>
      <p>CreatedAt :{formattedDate}</p>
     
    </div>
  );
};

export default StuuserProfile;
