import {createSlice} from "@reduxjs/toolkit";
import {auth, provider} from "../../../firebase";

const initialState = {
  status: true,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => initialState,
    authIn: (state, action) => {
      auth.signInWithPopup(provider).then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
      state.status = true
    },
    authOut: (state, action) => {
      auth.signOut().then();
      state.status = false
    },
  },
});

export const {reset, authIn, authOut} = slice.actions;

export default slice.reducer;
