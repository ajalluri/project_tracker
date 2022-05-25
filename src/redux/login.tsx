import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface LoggedInCredentials {
  loggedIn:number,
  username:string,
  userid:string
}

const initialState:LoggedInCredentials= {
    loggedIn:0,
    username:"",
    userid:""
}

export const counterSlice = createSlice({
  name: 'loggedinfo',
  initialState,
  reducers: {
    loggedin: (state,action: PayloadAction<{username:string,userid:string}>) => {
     
      state.loggedIn = 1;
      state.username = action.payload.username;
      state.userid = action.payload.userid;
      localStorage.setItem("username",action.payload.username);
      localStorage.setItem("userid",action.payload.userid);
      localStorage.setItem("loggedin","1");
    },
    logout: (state) => {
        state.loggedIn = 0;
        state.username = ""
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { loggedin,logout } = counterSlice.actions

export default counterSlice.reducer