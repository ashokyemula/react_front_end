import React, { useEffect, useState } from 'react'
import './SideBar.css';

import SideBarChat from './SideBarChat';

import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon  from "@material-ui/icons/DonutLarge";
import ChatIcon   from "@material-ui/icons/Chat";

import MoreVertIcon  from "@material-ui/icons/MoreVert";
import { SearchOutlined } from '@material-ui/icons';
//import db from "./firebase";

import pic from "./Ashok-pic.JPG";

export default function SideBar() {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
            // db.collection('rooms').onSnapShot( snapshot => ( 
            //     setRooms(snapshot.docs.map( doc => (
            //         {
            //             id: doc.id,
            //             data: doc.data(),
            //         })
            //     )
            // ) 
            // ))
            setRooms(()=>(["Dev Room", "Dance Room"]))
    }, []);

  return (
    <div className="sidebar">
      
        <div className="sidebar__header">
            
            {/* <Avatar src="./Ashok-pic.jpg"/> */}
            {/* <img src="./Ashok-pic.jpg" style="border-radius:50%" height="300" width="300" /> */}
            {/* <img className="sidebar_img" src={pic} height="300" width="300"   /> */}

            <img  src={pic} />

            <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                
                <IconButton>
                    <ChatIcon />
                </IconButton>

                <IconButton>
                    <MoreVertIcon />
                </IconButton>


            </div>
        </div>
        <div className="sidebar__search">
           <div className="sidebar__searchContainer">
                <SearchOutlined />
                <input placeholder="Search or Start New Chat" type="text" />
            </div>
        </div>
        <div className="sidebar__chats">
            <SideBarChat addNewChat />

            {/* {
                rooms.map(room => (
                    <SideBarChat key={room.id} id={room.id} name={room.doc.name} />
                ))
            } */}
            <SideBarChat />
            <SideBarChat />
            
            
            
        </div>
       
        
    </div>
    
  )
}
