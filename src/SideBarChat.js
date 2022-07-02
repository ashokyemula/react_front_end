import React, { useEffect, useState } from 'react'
import './SideBarChat.css';
import { Avatar } from "@material-ui/core";
// import axios from 'axios';



class SideBarChat extends React.Component { 

  state = {
    roomName: ''
  }; 

  const roomName = prompt("Please Enter Chat Room Name");
  
            render () {

              

            if (roomName) {
              
                 console.log(roomName);
                this.setstate( {roomName: roomName});


                
                    const response =  fetch('/createRoom', {
                         method: 'POST',
                         headers: {
                           'Content-Type': 'application/json',
                         },
                         body: JSON.stringify({ roomName: this.state.roomName }),
                       });
                       return (
                        <div className="sidebarChat">
  
                          <div className="sidebarChat__info">
                            <h2>{roomName}</h2>
                            <p>Last message...</p>
                           </div>
                        </div>
                       )
                



            }
          }
    };

    // useEffect(()=>
    //             {
    //                setSeed( Math.floor(Math.random() * 5000));
    //             }, [])

    
  // return !addNewChat ? (
  //   <div className="sidebarChat">
  //       <Avatar className="Avatar" src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
  //       <div className="sidebarChat__info">
  //           <h2>{name}</h2>
  //           <p>Last message...</p>
  //       </div>
  //   </div>
  // ) : (

  //   <div onClick = {createChat} className="sidebarChat">
  //     <h2>Add New Chat</h2>
  //   </div>
  // )


export default SideBarChat