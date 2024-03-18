import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export default function ChatMessage(message) {
  const currentUser = useContext(AuthContext);
  const data = useContext(ChatContext);

  return (
    <div className="chatMessages">
      <p>Message</p>
    </div>
  );
}
