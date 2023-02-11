import {configureStore} from "@reduxjs/toolkit";
import {User} from "../store/slices/User";

const store = configureStore({
    reducer:{
        users: User.reducer,        
    },
})

export default store;