import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: [],
    },
    reducers: {
        AddToDo: (state, action) => {

            state.value.push(action.payload)
        },
        RemoveToDo: (state, action) => {
            state.value.splice(action.payload, 1)
        },
        EditToDo: (state, action) => {
            state.value.splice(action.payload['index'],1, action.payload['task'])
        },
    },
})

// Action creators are generated for each case reducer function
export const { AddToDo, RemoveToDo, EditToDo } = todoSlice.actions

export default todoSlice.reducer