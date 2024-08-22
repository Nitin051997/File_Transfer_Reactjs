import { configureStore } from "@reduxjs/toolkit";
import Transformer from "./Transformer";
import { thunk } from "redux-thunk";

const store = configureStore({ 
    reducer: Transformer,
    middleware: (getDefaultMiddlewre) => getDefaultMiddlewre().concat(thunk)
});

export default store;