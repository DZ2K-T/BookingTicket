import data from "./../danhSachGhe.json";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    listSeat: data,
    listSeatSelected: [],
};

const bookingTicketReducer = createSlice({
    name: "bookingTicketReducer",
    initialState,
    reducers: {
        setBookingSeat: (state, action) => {
            console.log(action);
            const { payload } = action;
            const index = state.listSeatSelected.findIndex((seat) => seat.soGhe === payload.soGhe)
            if (index !== -1) {
                state.listSeatSelected.splice(index, 1)
            } else {
                state.listSeatSelected.push(payload);

            }
        },
    },
});
export const { setBookingSeat } = bookingTicketReducer.actions;
export default bookingTicketReducer.reducer;