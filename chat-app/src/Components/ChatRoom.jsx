import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faVideo,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { ChatContext } from "../context/ChatContext";
import React, { useContext } from "react";
import Messages from "./Messages";
import InputText from "./InputText";
import ChatMessage from "./ChatMessage";

export default function ChatRoom() {
  const { data } = useContext(ChatContext);

  return (
    <div className="chatRoom">
      <div div className="chatRoomTopBar">
        <div className="chatRoomContactInfo">
          {<img src={data.user?.photoURL} alt="John" />}
          <span>{data.user?.displayName}</span>
        </div>
        <div className="chatRoomIcons">
          <FontAwesomeIcon icon={faPhone} />
          <FontAwesomeIcon icon={faVideo} />
          <FontAwesomeIcon icon={faCircleInfo} />
        </div>
      </div>
      <div className="messagesContainer">
        <Messages />
      </div>
      <div className="inputContainer">
        <InputText />
      </div>
    </div>
  );
}
