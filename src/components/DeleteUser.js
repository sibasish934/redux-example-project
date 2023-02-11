import React from 'react'
import {clearUser} from "../store/slices/User";
import {useDispatch} from "react-redux";
import "./deleteuser.css";
export const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const removeUser =()=>{
    dispatch(clearUser());
  }
  return <div>
    <button className="btn delete-btn" onClick={() => removeUser()}>Delete ALL</button>
  </div>;
};
