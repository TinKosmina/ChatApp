import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function CurUser() {
  const currentUser = useContext(AuthContext);

  return (
    <div>
      <div className="user">
        <img src={currentUser.currentUser.photoURL} alt="John" />
        <h4>{currentUser.currentUser.displayName}</h4>
      </div>
    </div>
  );
}
