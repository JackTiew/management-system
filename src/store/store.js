import { configureStore } from "@reduxjs/toolkit";

import loadingReducer from "./general/LoadingSlice";
import errorReducer from "./general/ErrorSlice";

export const store = configureStore({
    reducer: {
        loading: loadingReducer,
        error: errorReducer,
    }
});