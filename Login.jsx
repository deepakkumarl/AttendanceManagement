import React from 'react';

const Login = ({ namel, setNamel, emaill, setEmaill, passwordl, setPasswordl, rolel, setRolel, login }) => {
  return (
    <>
      <form onSubmit={login} className="createacc-form">
        <h3>Login</h3>

        <input
          type="text"
          value={namel}
          onChange={(e) => setNamel(e.target.value)}
          placeholder="Enter your name"
        />

        <input
          type="email"
          value={emaill}
          onChange={(e) => setEmaill(e.target.value)}
          placeholder="Enter your email"
        />
        
        <input
          type="password"
          value={passwordl}
          onChange={(e) => setPasswordl(e.target.value)}
          placeholder="Enter your password"
          autoComplete="current-password"
        />

        <input
          type="text"
          value={rolel}
          onChange={(e) => setRolel(e.target.value)}
          placeholder="Enter a Role (student or admin)"
        />
        
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;