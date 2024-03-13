import InputText from "./InputText";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faVideo,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { ChatContext } from "../context/ChatContext";
import React, { useContext } from "react";

export default function ChatRoom() {
  const { data } = useContext(ChatContext);

  return (
    <div className="chatRoom">
      <div className="chatRoomTopBar">
        <div className="chatRoomContactInfo">
          <img src="../style/pictures/johnDoe.jpg" alt="John" />
          <span>{data.user?.displayName}</span>
        </div>
        <div className="chatRoomIcons">
          <FontAwesomeIcon icon={faPhone} />
          <FontAwesomeIcon icon={faVideo} />
          <FontAwesomeIcon icon={faCircleInfo} />
        </div>
      </div>
      <InputText></InputText>
    </div>
  );
}
