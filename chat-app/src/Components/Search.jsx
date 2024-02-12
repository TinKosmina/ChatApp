import React, { useState } from "react";

// Create a reference to the cities collection
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
const usersRef = collection(db, "users");

// Create a query against the collection.

export default function Search() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    const q = query(usersRef, where("displayName", "==", userName));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setUser(doc.data());
        console.log(doc.id, " => ", doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  return (
    <>
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Find user"
          onKeyDown={handleKey}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className="searchChat">
          <img src={user.photoURL} alt="user-photo" />
          <div className="chatContent">
            <h4>{user.displayName}</h4>
          </div>
        </div>
      )}
    </>
  );
}
