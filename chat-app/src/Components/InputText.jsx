import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSquarePlus } from "@fortawesome/free-solid-svg-icons";

import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { Timestamp, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

function InputText() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("null");

  const [messages, setMessage] = useState([]);
  const [messageInput, setMessageInput] = useState();

  const currentUser = useContext(AuthContext);
  const data = useContext(ChatContext);

  function handleSubmit(e) {
    e.preventDefault();
    setMessage([...messages, messageInput]);
    setMessageInput("");
  }

  console.log(data);

  const handleSend = async () => {
    if (image) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                messageInput,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          messageInput,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }
  };

  return (
    <div className="inputMessageContainer">
      {/* <div className="messageInfo">
        <div className="messageContent">
          {messages.map((message, index) => {
            return (
              <div className="messageValue" key={index}>
                {message}
              </div>
            );
          })}
          <div className="messageImage">
            <img src="../style/pictures/johnDoe.jpg" alt="johndoe" />
            <p>20:21</p>
          </div>
        </div>
      </div> */}
      <div className="inputMessage">
        <input
          type="text"
          placeholder="Type something..."
          onChange={(e) => setMessageInput(e.target.value)}
          value={messageInput}
        />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <label htmlFor="file">
          <FontAwesomeIcon icon={faSquarePlus} />
        </label>
        <button onClick={handleSend}>
          {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
          SEND
        </button>
      </div>
    </div>
  );
}

export default InputText;
