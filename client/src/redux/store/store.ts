import { configureStore } from "@reduxjs/toolkit"
import userSliceReducer from "../slice/user"
import { UserInfo } from "../../models"

export interface AppStore {
  user: UserInfo;
}
export const store = configureStore<AppStore>({
  reducer: {
    user: userSliceReducer,
  },
})


