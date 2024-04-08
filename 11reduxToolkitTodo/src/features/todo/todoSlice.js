import { createSlice, current, nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos: [
        {
            id: 1, 
            text: "Hi, Your Initial todo.", 
            isComplete: false,
        }],
    edit: {id: null, text: null}
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // console.log(current(state))
            const todo = {
                id: nanoid(), 
                text: action.payload,
                isComplete: false
            }
            state.todos.push(todo)
            console.log(state.todos)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if(action.payload.id === todo.id){
                    todo.text = action.payload.text
                }
                return todo
            } )            
            state.edit = {id: null, text: null}
        },
        editTodo: (state, action) => {
            state.edit = action.payload
        },
        completeTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if(todo.id === action.payload) todo.isComplete = !todo.isComplete;
                return todo;
            })
        }
    }
})
export const {addTodo, removeTodo, updateTodo, editTodo, completeTodo} = todoSlice.actions
export default todoSlice.reducer