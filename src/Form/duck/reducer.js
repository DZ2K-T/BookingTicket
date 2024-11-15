import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: '',
    name: '',
    phone: '',
    email: '',
    students: JSON.parse(localStorage.getItem("students")) || [],
    filterKeyword: "",
}



const formStudents = createSlice({
    name: "formStudents",
    initialState,
    reducers: {
        addStudent: (state, action) => {
            state.students.push(action.payload);
        },
        deleteStudent: (state, action) => {
            state.students = state.students.filter(student => student.id !== action.payload);
        },
        editStudent: (state, action) => {
            const index = state.students.findIndex(student => student.id === action.payload.id);
            if (index !== -1) {
                state.students[index] = action.payload;
            }
        },
        updateForm: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
        resetForm: (state) => {
            state.id = '';
            state.name = '';
            state.phone = '';
            state.email = '';
        },
        filter: (state, action) => {
            state.filterKeyword = action.payload; 
        },
    },
});

export const { addStudent, deleteStudent, editStudent, updateForm, resetForm,filter  } = formStudents.actions;


export default formStudents.reducer;