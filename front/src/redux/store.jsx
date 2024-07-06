import { configureStore } from "@reduxjs/toolkit";
import { newAPI } from './newsSlice';
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        [newAPI.reducerPath]: newAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            newAPI.middleware
        )
});

setupListeners(store.dispatch);

export default store;
