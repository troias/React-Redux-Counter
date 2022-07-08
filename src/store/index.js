import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counter"
import authReducer from "./auth"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
})

console.log("state", store.getState())
export default store
