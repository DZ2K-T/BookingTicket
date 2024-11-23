import { configureStore } from "@reduxjs/toolkit";
import formStudents from "./../Form/duck/reducer";
import bookingTicketReducer from "./../bookingTicket/duck/reducer";
import listMovieReducer from "../homeTemplate/ListMoviePage/duck/reducer";

const store = configureStore({
    reducer: {
        formStudents,
        bookingTicketReducer,
        listMovieReducer,   
    },
});

export default store;