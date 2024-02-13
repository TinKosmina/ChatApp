import React, { useContext, useState } from "react";

// Create a reference to the cities collection
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
const usersRef = collection(db, "users");

// Create a query against the collection.

export default function Search() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const currentUser = useContext(AuthContext);

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

  const handleSelect = async () => {
    // check whether chat group exists in firestore, if not create new one
    const combineUIDs =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDocs(db, "chats", combineUIDs);

      if (!res.exists()) {
        // create a chat group
        await setDoc(doc(db, "chats", combineUIDs), { messages: [] });
      }

      // create user chats
      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [combineUIDs + ".userInfo"]: {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
        [combineUIDs+".date"]
      });
    } catch (err) {}

    // create user chats
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
        <div className="searchChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="user-photo" />
          <div className="chatContent">
            <h4>{user.displayName}</h4>
          </div>
        </div>
      )}
    </>
  );
}
