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
      <ul>
        {messages.map((message, index) => {
          return <li key={index}>{message}</li>;
        })}
      </ul>
      <div className="inputMessage">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Message area"
          />

          <FontAwesomeIcon icon={faSquarePlus} />
          <button type="submit">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputText;
