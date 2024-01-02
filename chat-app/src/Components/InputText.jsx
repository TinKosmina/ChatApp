import { useState } from "react";


function InputText() {

    const [messages, setMessage] = useState([]);
    const [messageInput, setMessageInput] = useState();

    function handleSubmit(e){
        e.preventDefault();
        setMessage([...messages, messageInput])
        setMessageInput('');
    }


    return ( <div>
        <div className="messagesSection">
            <form onSubmit={handleSubmit}>
                <label>Send message:
                <input type="text" value={messageInput} onChange={(e) => setMessageInput(e.target.value)}/>
                </label>
                <button type="submit">Send</button>
            </form>
            <ul>
                {messages.map((message,index)=>{

                        return <li key={index}>{message}</li>

                })}
            </ul>
        </div>



    </div> );
}

export default InputText;