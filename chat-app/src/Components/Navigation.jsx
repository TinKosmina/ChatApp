import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faComment,
  faAddressBook,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navigation() {
  const [activeNavBar, setActiveNavBar] = useState(false);
  const [activeChat, setActiveChat] = useState(false);

  const toggleActiveNavBar = () => {
    setActiveNavBar(!activeNavBar);
    document.querySelector(".chatContainer").classList.toggle("chatActive");
  };

  return (
    <>
      <div className="hamburger" onClick={toggleActiveNavBar}>
        <FontAwesomeIcon className="faBars" icon={faBars} />
      </div>
      <aside className={activeNavBar ? "active" : " "}>
        <div className="navItemsContainer">
          <Link to="mainpage" className="navItem">
            <FontAwesomeIcon icon={faHouse} />
            <span className="navBarText">Home</span>
          </Link>
          <Link to="mainpage" className="navItem">
            <FontAwesomeIcon icon={faComment} />
            <span className="navBarText">Chats</span>
          </Link>
          <Link to="mainpage" className="navItem">
            <FontAwesomeIcon icon={faAddressBook} />
            <span className="navBarText">Contacts</span>
          </Link>
          <Link to="mainpage" className="navItem">
            {" "}
            <FontAwesomeIcon icon={faGear} />
            <span className="navBarText">Settings</span>
          </Link>
          <Link to="mainpage" className="navItem logout">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span className="navBarText">Logout</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
