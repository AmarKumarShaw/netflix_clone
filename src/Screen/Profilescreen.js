import React from 'react';
import Nav from "../Nav"
import "./Profilescreen.css"
import { useSelector } from 'react-redux';
import { selectUser } from "../features/userSlice";
import {auth} from "../firebase";
import Planscreen from './Planscreen';
function Profilescreen() {
  const user = useSelector(selectUser);
  return (
    <div className='Profilescreen'>
      <Nav/>
      <div className="profile_screen_body">
        <h1>Edit Profile</h1>
        <div className="profile_screen_info">
          <img
           src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
           <div className="profile_screen_details">
            <h2>{user.email}</h2>
            <div className="profile_screen_plains">
              <h3>Plans</h3>
              {/* <h3>Netflix Standard</h3> */}
              <div className='profit_screen_1'>
              {/* <h2>Netflix Standard</h2> */}
              {/* <button>Subscribe</button> */}
              </div>
              <Planscreen/>
              <button onClick={()=> auth.signOut}
               className='profile_screen_signout'>Sign Out</button>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Profilescreen;