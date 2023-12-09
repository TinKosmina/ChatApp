import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

export default function Navigation(){

    const [activeNavBar, setActiveNavBar] = useState(false)

    const toggleActiveNavBar = (() =>{
        setActiveNavBar(!activeNavBar)
    })


    return(
        <aside className={activeNavBar?"active":" "} >
                <div className="hamburger" onClick={toggleActiveNavBar}><FontAwesomeIcon  className="faBars"icon={faBars} /></div>
                <Link to="mainpage" className="navItem"><FontAwesomeIcon icon={faHouse}/> <span className="navBarText">Home</span></Link>
                <Link to="mainpage" ><span className="navBarText">Messages</span></Link>
                <Link to="mainpage"><span className="navBarText">Contacts</span></Link>
                <Link to="mainpage"><span className="navBarText">Settings</span></Link>
                <Link to="mainpage"><span className="navBarText">Logout</span></Link>
            


        </aside>
    )
}