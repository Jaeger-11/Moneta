import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from './features/transactionSlice'

export const store = configureStore({
    reducer:{
        transaction : transactionReducer
    }
})

// Infer the type of makeStore
// export type AppStore = ReturnType<typeof mtore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch