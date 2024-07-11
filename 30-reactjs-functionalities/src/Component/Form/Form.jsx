import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const handleAuthenticatoin = () => {
    if (isRegistered) {
      if (isRegistered) {
        const user = users.find(
          (u) => email === email && u.password === password
        );
        if(user){
            setIsLoggedIn(true);
        }else{
            alert('Login Failed ')
        }
      }
    } else {
      const newUser = { email, password };
      setUsers([...users, newUser]);
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setIsLoggedIn(true);
    }
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="bg-yellow-400 min-h-screen">
        {isLoggedIn ? (
          <div>
            <h2>Welcome! {email}</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h2>{isRegistered ? "Login" : "Register"}</h2>
            <form action="">
              <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleAuthenticatoin}>
                {isRegistered ? "Login" : "Register"}
              </button>
            </form>
            <p>
              {isRegistered
                ? "Don't Have Account? Register Here.."
                : "Already have an account? Login Here...."}
            </p>
            <button onClick={() => setIsRegistered(!isRegistered)}>
              {isRegistered ? "Register" : "Login"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
