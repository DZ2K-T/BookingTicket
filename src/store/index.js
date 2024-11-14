import { configureStore } from "@reduxjs/toolkit";
import formStudents from "./../Form/duck/reducer"


const store = configureStore({
    reducer: {
        formStudents,
    },
});

export default store;