import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IContacts } from "../Types/ContactsTypes"
import { fetchContacts } from "./ActionCreators"

interface ContactsState {
    contacts: IContacts[],
    isLoading: boolean,
    error: string,
}

const initialState: ContactsState = {
    contacts: [],
    isLoading: false,
    error: '',
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchContacts.fulfilled.type]: (state, action : PayloadAction<IContacts[]>) => {
            state.isLoading = false
            state.error = ''
            state.contacts = action.payload
        },
        [fetchContacts.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchContacts.rejected.type]: (state, action : PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})



export default contactsSlice.reducer;