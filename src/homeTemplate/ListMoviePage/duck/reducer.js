
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchListMovie = createAsyncThunk(
    "listMovie/fetchListMovie",
    async () => {

        try {
            const result = await axios({
                url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
                method: "GET",
                headers: {
                    TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NSIsIkhldEhhblN0cmluZyI6IjE0LzA1LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0NzE4MDgwMDAwMCIsIm5iZiI6MTcyMDg5MDAwMCwiZXhwIjoxNzQ3MzI4NDAwfQ.bqygxoVHbmcy6bdDT5IDHZGoA3eMAp4YV6_E_dO_XxI"
                },
            });
            return result.data.content;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);  // Xử lý lỗi nếu có
        }
    }
);

const initialState = {
    loading: false,
    data: null,
    error: null,
};


const listMovieReducer = createSlice({
    name: "listMovieReducer",
    initialState,
    reducers: {
        // action
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchListMovie.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchListMovie.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchListMovie.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

    },

});

export default listMovieReducer.reducer;

