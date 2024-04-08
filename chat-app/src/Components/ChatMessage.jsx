import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export default function ChatMessage({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  const convertFromSeconds = (seconds) => {
    const dateObj = new Date(seconds * 1000); // Convert seconds to milliseconds
    return dateObj; // Convert to locale-specific string
  };

  const resultDatetime = convertFromSeconds(message.date.seconds);
  const messageHours = resultDatetime.getHours();
  const messageMins = resultDatetime.getMinutes();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  console.log(message);
  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>
          {messageHours}:{messageMins < 10 ? "0" : ""}
          {messageMins}
        </span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
}
