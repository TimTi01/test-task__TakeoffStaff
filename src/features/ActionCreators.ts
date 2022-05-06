import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IContacts } from "../Types/ContactsTypes";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async(_, thunkAPI) => {
        const response = await axios.get<IContacts[]>('http://localhost:8000/contacts')
        return response.data;
    }
)