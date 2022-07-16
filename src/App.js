import "./App.css";
import SideBar from "./SideBar";
import Chat from "./Chat";
import Pusher from 'pusher-js';
import React, { useState, useEffect } from 'react';
import axios from './axios';



function App() {

    const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync")
    .then((response) => {
         
         setMessages(response.data);
    })
  }, []);

  

  useEffect(() => {
    const pusher = new Pusher('830f5078b6b531e39110', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
      });

        return () => {
          channel.unbind_all();
          channel.unsubscribe();
        }
    }, [messages]);

    console.log(messages);

  return (
    <div className="App">
      {/* <h1> Let's Build Whatsapp Clone !! </h1> */}

      <div className="App-body">
        <SideBar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}
export default App;
