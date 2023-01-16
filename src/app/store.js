import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
// import {provider} from "react-redux";
export default configureStore({
    reducer: {
        user: userReducer,
    }
}) 



// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from '';

// export const store = configureStore({
//   reducer: {
//     counter: userReducer,
//   },
// });
