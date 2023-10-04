import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./slice/counter.js"

export default configureStore({
    reducer: {counter : counterSlice}
})