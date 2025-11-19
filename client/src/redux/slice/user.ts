import { createSlice } from '@reduxjs/toolkit'
import { UserInfo } from '../../models'
import { clearLocalStorage, persistLocalStorage } from '../../utils'

export const emptyUserState: UserInfo = {
    email: '',
    password: '',
}


export const UserKey = "user";

export const userSlice = createSlice({
    name: "user",
    initialState: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : emptyUserState,

    reducers: {
        createUser: (state, action) => {
            persistLocalStorage<UserInfo>(UserKey, action.payload);
            return action.payload;
          },
          updateUser: (state, action) => {
            const user = { ...state, ...action.payload };
            persistLocalStorage<UserInfo>(UserKey, user);
            return user;
          },
        resetUser: () => {
            clearLocalStorage(UserKey);
            return emptyUserState;
        }
        }
});


export const { createUser, updateUser, resetUser } = userSlice.actions

export default userSlice.reducer
