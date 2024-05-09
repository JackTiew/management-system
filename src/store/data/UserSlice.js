import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: { isLoading: false},
    reducers: {
        showLoading: ( state ) => {
            state.isLoading = true;
        },
        hideLoading: ( state ) => {
            state.isLoading = false;
        },
    },
});

export const { showLoading, hideLoading } = userSlice.actions;

export default userSlice.reducer;