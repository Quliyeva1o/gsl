import { configureStore } from "@reduxjs/toolkit";
import { newAPI } from './newsSlice';
import { setupListeners } from "@reduxjs/toolkit/query";
import { proudAPI } from "./proudsSlice";

const store = configureStore({
    reducer: {
        [newAPI.reducerPath]: newAPI.reducer,
        [proudAPI.reducerPath]: proudAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            newAPI.middleware,
            proudAPI.middleware
        )
});

setupListeners(store.dispatch);

export default store;
