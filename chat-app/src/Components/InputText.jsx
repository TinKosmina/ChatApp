import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSquarePlus } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

function InputText() {
  const [messages, setMessage] = useState([]);
  const [messageInput, setMessageInput] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    setMessage([...messages, messageInput]);
    setMessageInput("");
  }

  return (
    <div className="inputMessageContainer">
      <div className="messageInfo">
        <div className="messageImage">
          <img src="../style/pictures/johnDoe.jpg" alt="johndoe" />
          <p>20:21</p>
        </div>
        <div className="messageContent">
          {messages.map((message, index) => {
            return (
              <div className="messageValue" key={index}>
                {message}
              </div>
            );
          })}
        </div>
      </div>
      <div className="inputMessage">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Type something..."
          />
          <input type="file" style={{ display: "none" }} id="file" />
          <label htmlFor="file">
            <FontAwesomeIcon icon={faSquarePlus} />
          </label>
          <button type="submit">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputText;
