import { configureStore } from "@reduxjs/toolkit";
import { newAPI } from './newsSlice';
import { setupListeners } from "@reduxjs/toolkit/query";
import { proudAPI } from "./proudsSlice";
import { examAPI } from "./examSlice";

const store = configureStore({
    reducer: {
        [newAPI.reducerPath]: newAPI.reducer,
        [proudAPI.reducerPath]: proudAPI.reducer,
        [examAPI.reducerPath]: examAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            newAPI.middleware,
            proudAPI.middleware,
            examAPI.middleware
        )
});

setupListeners(store.dispatch);

export default store;
