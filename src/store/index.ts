import { applyMiddleware, createStore } from "redux" 
import thunk from "redux-thunk"
import { rootReducer } from "./reducers"

export const store = createStore(rootReducer, applyMiddleware(thunk))

//typed dispatch
export type TypedDispatch = typeof store.dispatch
