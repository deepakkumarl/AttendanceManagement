import "./ViewClasses.css";

function ViewClasses({ classes, deleteClass }) {
    return (
      <div className="classes-list-container">
        <h3 className="list-header">All Classes</h3>
        <ul className="classes-list">
          {classes.map((classItem) => (
            <li key={classItem.id} className="class-item">
              <span className="class-details">
                {classItem.name} - {classItem.teacher} - {classItem.subject} -{' '}
                {classItem.schedule}
              </span>
              <button
                onClick={() => deleteClass(classItem.id)}
                className="delete-class-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ViewClasses;
  