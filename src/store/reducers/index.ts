import { combineReducers } from "redux";
import { userReducer } from "./userReducer";



export const rootReducer = combineReducers({
    users: userReducer,
})

//typed state
export type RootState = ReturnType<typeof rootReducer>