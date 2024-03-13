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
            placeholder="Username"
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

          <input type="submit" value="Login" />

          {/* <button type="submit"><Link to="main-page"></Link></button> */}
          {err && <span>There was an error!</span>}
        </form>
        <div class="divider">OR</div>
        <div class="alternateLogin">
          <img
            class="alternateLoginImage"
            src="../style/pictures/mail-icon-2048x2048-525ey8hu.png"
            alt="mailLogin"
          />
          <img
            class="alternateLoginImage"
            src="../style/pictures/Google__G__Logo.svg.webp"
            alt="googleLogin"
          />
          <img
            class="alternateLoginImage"
            src="/style/pictures/knowledge_graph_logo.png"
            alt="appleLogin"
          />
          <h6>
            Not a user? <Link to="registerpage">Register here!</Link>
          </h6>
        </div>
      </section>
    </div>
  );
}
