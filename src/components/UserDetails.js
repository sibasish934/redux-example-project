import React from 'react'
import { DeleteAllUser } from './DeleteUser'
import "./userDetails.css";
import fakeUserData from '../api';
import {useDispatch} from "react-redux"
import { addUser } from '../store/slices/User';
import DisplayUser from './DisplayUser';
const UserDetails = () => {

  const dispatch = useDispatch();

  const addNewUser = (payload)=>{
     dispatch(addUser(payload));
  }
  
  return (
    <>
    <div className="content">
      <div className="admin-table">
        <div className="admin-subtitle">List of User Details</div>
        <button className="btn add-btn" onClick={() => addNewUser(fakeUserData())}>Add New Users</button>
      </div>
      <ul>
       <DisplayUser />
      </ul>
      <hr />
      <DeleteAllUser />
    </div>
  </>
  )
}

export default UserDetails