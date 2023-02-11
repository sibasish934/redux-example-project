import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import "./displayUser.css";
import {BsFillTrashFill} from "react-icons/bs";
import {removeUser} from "../store/slices/User"

const DisplayUser = () => {

    const dispatch = useDispatch();

    const data = useSelector((state)=>{
        return state.users; // here users is the keyword mentioned in the store file.
    });

    const removeSingleUser = (payload)=>{
        dispatch(removeUser(payload))
    }

  return (
    <>
     {
        data.map((ele, id) => {
            return(
                <li class="users"key={id}>{ele} <span className='trash' onClick={()=> removeSingleUser(id)}><BsFillTrashFill /></span></li>
            )
        })
     }
    </>
  )
}

export default DisplayUser