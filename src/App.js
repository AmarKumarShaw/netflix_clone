// import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import Homescreen from './Screen/Homescreen';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Loginscreen from './Screen/Loginscreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import {login, logout, selectUser} from "./features/userSlice";
import Profilescreen from './Screen/Profilescreen';



function App() {
  const user = useSelector(selectUser);
const dispatch =useDispatch();

  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if (userAuth){
        // logged in
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }else{
        // Logged out
        dispatch(logout());
      }
    });
    return unsubscribe; 
  }, [dispatch]);
  return (
    <div className="app">
      {/* <Homescreen/> */}
      {/* <Loginscreen /> */}

       <Router>
        {!user ? (
          <Loginscreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<Homescreen />} />
            <Route exact path="profile" element={<Profilescreen />} />
              
            
          </Routes>

         )} 
      </Router> 
    </div>
  );
}

export default App;
