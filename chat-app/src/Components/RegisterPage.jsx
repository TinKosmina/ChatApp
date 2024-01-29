import { Link } from "react-router-dom";
import { app } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

export default function RegisterPage() {
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch {
      setError(true);
    }
  };
  return (
    <div>
      <section class="registerSection">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} method="POST">
          <input type="text" placeholder="Username" required />
          <br />
          <input type="email" placeholder="Email" required />
          <br />
          <input type="password" placeholder="Password" required />
          <input
            style={{ display: "none" }}
            type="file"
            id="avatar"
            name="avatar"
            accept=".png,.jpg,.webp,.jpeg,svg,"
          />
          <div className="avatarUpload">
            <label htmlFor="file">
              <img
                src="../style/pictures/mail-icon-2048x2048-525ey8hu.png"
                alt="avatarUpload"
              />
              <p>Upload avatar</p>
            </label>
          </div>

          <input type="submit" value="Register" />

          {error && <span>There was an error!</span>}
        </form>
      </section>
    </div>
  );
}
