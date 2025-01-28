import React, { useState } from "react";
import "./AdminStudentManagement.css";

const AdminStudentManagement = () => {
    const [className, setClassName] = useState(''); // Now using class name instead of class ID
    const [studentName, setStudentName] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [studentsByClass, setStudentsByClass] = useState({}); // Store students by class

    // Add Student Function
    const addStudent = (e) => {
        e.preventDefault();
        
        if (!studentsByClass[className]) {
            studentsByClass[className] = [];
        }

        const newStudent = {
            studentName,
            rollNumber,
            email,
            attendance: 'Absent' // Initially set attendance to 'Absent'
        };

        // Add new student to the appropriate class
        studentsByClass[className].push(newStudent);
        setStudentsByClass({ ...studentsByClass });
        setMessage('Student added successfully!');
        
        // Clear form inputs
        setClassName('');
        setStudentName('');
        setRollNumber('');
        setEmail('');
    };

    // Delete Student Function
    const deleteStudent = (className, studentName) => {
        if (!studentsByClass[className]) {
            setMessage('Class not found!');
            return;
        }

        const updatedStudents = studentsByClass[className].filter(student => student.studentName !== studentName);
        studentsByClass[className] = updatedStudents;
        setStudentsByClass({ ...studentsByClass });
        setMessage('Student deleted successfully!');
    };

    // Toggle Attendance (Present / Absent)
    const toggleAttendance = (className, studentName) => {
        const updatedStudents = studentsByClass[className].map(student => {
            if (student.studentName === studentName) {
                return {
                    ...student,
                    attendance: student.attendance === 'Present' ? 'Absent' : 'Present'
                };
            }
            return student;
        });

        studentsByClass[className] = updatedStudents;
        setStudentsByClass({ ...studentsByClass });
    };

    // Handle clicking on a class name to view students
    const handleClassClick = (className) => {
        alert(`Students in ${className}: \n${studentsByClass[className].map(student => `${student.studentName} (Roll No: ${student.rollNumber}, Email: ${student.email}, Attendance: ${student.attendance})`).join('\n')}`);
    };

    return (
        <div className="admin-student-management">
            <h1>Manage Students</h1>

            {/* Add Student Form */}
            <form onSubmit={addStudent} className="form">
                <h2>Add Student</h2>
                <input
                    type="text"
                    placeholder="Class Name"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Student Name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Roll Number"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Add Student</button>
            </form>

            {/* Display Message */}
            {message && <p className="message">{message}</p>}

            {/* Display List of Classes and Students */}
            <h2>Class List</h2>
            <ul>
                {Object.keys(studentsByClass).map((className, index) => (
                    <li key={index} onClick={() => handleClassClick(className)} className="class-item">
                        {className} ({studentsByClass[className].length} Students)
                        <ul>
                            {studentsByClass[className].map((student, studentIndex) => (
                                <li key={studentIndex}>
                                    {student.studentName} (Roll No: {student.rollNumber}, Email: {student.email}, Attendance: {student.attendance})
                                    <button
                                        onClick={() => toggleAttendance(className, student.studentName)}
                                        className="attendance-button"
                                    >
                                        Mark as {student.attendance === 'Present' ? 'Absent' : 'Present'}
                                    </button>
                                    <button
                                        onClick={() => deleteStudent(className, student.studentName)}
                                        className="delete-button"
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminStudentManagement;
