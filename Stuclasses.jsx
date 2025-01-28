import { useLocation } from "react-router-dom";

const Stuclasses = () => {
  const location = useLocation();
  const { getclass } = location.state || {}; // Access classes from navigation state

  return (
    <div>
      <h1>Here are the classes where the student is available:</h1>
      {getclass && getclass.length > 0 ? (
        <ul>
          {getclass.map((classInfo, index) => (
            <li key={index}>{classInfo}</li>
          ))}
        </ul>
      ) : (
        <p>No classes available for the student.</p>
      )}
    </div>
  );
};

export default Stuclasses;
