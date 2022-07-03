import React, { useEffect, useState } from 'react'
import './SideBarChat.css';
import { Avatar } from "@material-ui/core";
import { PostAdd } from '@material-ui/icons';
import axios from 'axios';





function SideBarChat({addNewChat}) { 

  const [seed, setSeed] = useState("");

  

  const createChat = () => {
    const roomName = prompt("Please Enter Chat Room Name");
    const onSubmit = rname => { 
      axios.post('http://localhost:5000/createRoom', rname)
      .then((res) => {
          if (res.status == 200) {
            alert("room created")
          } else {
                Promise.reject()
          }
      })
    }

    
    if (roomName) {
      //do some database stuff here
      // fetch('http://localhost:5000/createRoom', {
        method: POST,
        headers: {
          'content-type': 'application/json'
        },
          body: {roomName:roomName}
        

      }).then(()=>console.log('createChat api called'))
    }
  };

   useEffect(()=> {
            setSeed( Math.floor(Math.random() * 5000));
    }, [])

    
  return !addNewChat ? (
     <div className="sidebarChat">
        <Avatar className="Avatar" src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
         <div className="sidebarChat__info">
           <h2>Room Name</h2>
            <p>Last message...</p>
         </div>
    </div>
   ) : (

     <div onClick = {createChat} className="sidebarChat">
       <h2>Add new Chat</h2>
     </div>
  )

}
export default SideBarChat;