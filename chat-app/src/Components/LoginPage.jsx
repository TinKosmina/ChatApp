import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function LoginPage() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/mainpage");
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };

  return (
    <div>
      <section class="loginSection">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Email"
            required
          />
          <br />
          <input
            type="password"
            id="userPassword"
            name="userPassword"
            placeholder="Password"
            required
          />
          <div class="remember-me">
            <input type="checkbox" id="remember-me" name="remember-me" />
            <label for="remember-me">Remember me?</label>
            <a href="#">Forgot password?</a>
          </div>

          <input type="submit" value="Login" className="loginButton" />

          {/* <button type="submit"><Link to="main-page"></Link></button> */}
        </form>

        {err && (
          <span style={{ textAlign: "center" }}>There was an error!</span>
        )}

        <h6>
          Not a user? <Link to="/registerpage">Register here!</Link>
        </h6>
      </section>
    </div>
  );
}
