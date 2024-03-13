import { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

export default function Chats() {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  console.log(Object.entries(chats));

  return (
    <div className="chatsContainer">
      {Object.entries(chats)?.map((chat) => {
        <div className="singleChat" key={chat[0]}>
          <img src={chat[1].userInfo.photoURL} alt="John" />
          <div className="chatContent">
            <h4>{chat[1].userInfo.displayName}</h4>
            <p>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
        </div>;
      })}
    </div>
  );
}
