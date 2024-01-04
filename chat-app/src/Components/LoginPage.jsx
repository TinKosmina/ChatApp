import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div>
      <section class="loginSection">
        <h2>Login</h2>
        <form method="POST">
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
          <Link to="mainpage">
            {" "}
            <input type="submit" value="Login" />
          </Link>
          {/* <button type="submit"><Link to="main-page"></Link></button> */}
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
