import { useState } from 'react';
import "./AdminClasses.css"

function AdminClasses({ addClass }) {
  const [name, setName] = useState('');
  const [teacher, setTeacher] = useState('');
  const [subject, setSubject] = useState('');
  const [schedule, setSchedule] = useState('');

  const handleAddClass = () => {
    const newClass = {
      id: Date.now(),
      name,
      teacher,
      subject,
      schedule,
    };

    addClass(newClass); // Pass the new class to the parent or other component
    setName('');
    setTeacher('');
    setSubject('');
    setSchedule('');
    alert('Class added successfully!');
  };

  return (
    <div className="admin-classes-container">
      <h2 className="admin-header">Admin Class Management</h2>

      <div className="form-container">
        <h3 className="form-header">Create New Class</h3>
        <div className="form-fields">
          <input
            type="text"
            placeholder="Class Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Teacher"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Schedule"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            className="form-input"
          />
        </div>
        <button onClick={handleAddClass} className="create-class-button">
          Create Class
        </button>
      </div>
    </div>
  );
}

export default AdminClasses;
