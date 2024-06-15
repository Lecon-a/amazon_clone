// one time thing in redux application
import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../redux/cartSlice";

const store = configureStore({
    reducer: {   
        basket: basketReducer,
    }
});

export default store; 

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
