import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    authorization: false
}

export const authSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        setAuthUser: (state, action: PayloadAction<boolean>) => {
            state.authorization = action.payload
        }
    }
})

export const { setAuthUser } = authSlice.actions
export default authSlice.reducer;