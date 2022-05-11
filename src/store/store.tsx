import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/authSlice'
import contactsReducer from '../features/contactsSlice'
import { contactAPI } from "../services/contactService";

const rootReducer = combineReducers({
    authReducer,
    contactsReducer,
    [contactAPI.reducerPath]: contactAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(contactAPI.middleware)
    })
} 
    
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']