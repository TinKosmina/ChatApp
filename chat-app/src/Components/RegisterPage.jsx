import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div>
      <section class="registerSection">
        <h2>Register</h2>
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
          <input
            style={{ display: "none" }}
            type="file"
            id="avatar"
            name="avatar"
            accept=".png,.jpg,.webp,.jpeg,svg,"
          />
          <label htmlFor="file">
            <img
              className="avatarUpload"
              src="../style/pictures/mail-icon-2048x2048-525ey8hu.png"
              alt="avatarUpload"
            />
          </label>
          <Link to="mainpage">
            {" "}
            <input type="submit" value="Register" />
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
