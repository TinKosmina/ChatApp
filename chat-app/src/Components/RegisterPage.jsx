import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
              password: password,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/mainpage");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };
  return (
    <div>
      <section class="registerSection">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" required />
          <br />
          <input type="email" placeholder="Email" required />
          <br />
          <input type="password" placeholder="Password" required />
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name="file"
            accept=".png,.jpg,.webp,.jpeg,svg,"
          />
          <div className="avatarUpload">
            <label htmlFor="file">
              <img src="../style/pictures/uploadimage.png" alt="avatarUpload" />
              <p>Upload avatar</p>
            </label>
          </div>

          <input type="submit" value="Register" />

          {err && <span>There was an error!</span>}
        </form>
        <h6>
          Already a user? <Link to="/loginpage">Go back</Link>
        </h6>
      </section>
    </div>
  );
}
