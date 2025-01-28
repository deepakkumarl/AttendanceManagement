import { Link } from "react-router-dom";
import "./Createacc.css";

function Createacc({ name, setName, email, setEmail, password, setPassword, role, setRole, createAcc, message }) {
  return (
    <>
      <form onSubmit={createAcc} className="createacc-form">
        <h3>Create Account</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a name"
        />
        
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter an email"
        />
        
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter a password"
          autoComplete="current-password"
        />
        
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Enter a Role (student or admin)"
        />
        
        <button type="submit">Create account</button>
        <Link to="/login"><button type="button">Login</button></Link>
      </form>
      <div className="resmes">
        <h3>{message}</h3>
      </div>
    </>
  );
}

export default Createacc;