import React, { useEffect, useState } from "react";
import "./Chat.css";

import { Avatar, IconButton } from "@material-ui/core";
// import AttachFile  from "@material-ui/icons/AttachFile";
// import ChatIcon   from "@material-ui/icons/Chat";

// import MoreVertIcon  from "@material-ui/icons/MoreVert";
// import { SearchOutlined } from '@material-ui/icons';
import { AttachFile, MoreVert, SearchOutlined} from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';



function Chat({messages}) {

  const [input, setInput] = useState("");

  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = async (e) => {
      e.preventDefault();
      await axios.post('/messages/new', {
        name: "DEMO APP",
        message: input,
        timestamp: "JUST NOW",
        received : false      
      });
      console.log("You typed >>> ", input);
      setInput("");
  };
  
  return (
    <div className="chat">
   
      <div className="chat__header">
        <Avatar
          className="Avatar"
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        />

        <div className="chat__headerinfo">
          <h3>Room Name</h3>
          <p>Last seen at ....</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
           {messages.map(message => (
              <p className={`chat__message ${message.received && "chat__receiver"}`}>  
                <span className="chat__name">{message.name}</span> {message.message}
                <span className="chat__timestamp">{message.timestamp}</span>
              </p>
            )

          )}
        {/* <p className={`chat__message ${true && "chat__receiver"}`}>  
          <span className="chat__name">Ashok Y</span> Hey Guys
          <span className="chat__timestamp">2:54pm</span>
        </p>
        <p className="chat__message"> Hey Guys</p> */}
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />

        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text" />
          
          <button onClick={sendMessage} type="submit">Send a message</button>
          
        </form>
        <MicIcon />

      </div>
    </div>
  );
}

export default Chat;
