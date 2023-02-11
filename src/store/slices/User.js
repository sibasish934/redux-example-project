import {createSlice} from "@reduxjs/toolkit";

const User = createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser(state, action){
            state.push(action.payload);
        },
        removeUser(state, action){
            state.splice(action.payload, 1);
        },
        clearUser(state, action){
            state.splice(0, state.length);
        },
    },
})

export {User};
export const {addUser, removeUser, clearUser} = User.actions;