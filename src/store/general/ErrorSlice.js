import { createSlice } from "@reduxjs/toolkit"

const errorSlice = createSlice({
    name: 'loading',
    initialState: { message: ''},
    reducers: {
        showError: ( state, action ) => {
            state.message = action.payload;
            alert(state.message);
        },
    },
});

export const { showError } = errorSlice.actions;

export default errorSlice.reducer;