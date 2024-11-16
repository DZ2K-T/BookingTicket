import { configureStore } from "@reduxjs/toolkit";
import formStudents from "./../Form/duck/reducer"
import bookingTicketReducer from "./../bookingTicket/duck/reducer"

const store = configureStore({
    reducer: {
        formStudents,
        bookingTicketReducer,
    },
});

export default store;