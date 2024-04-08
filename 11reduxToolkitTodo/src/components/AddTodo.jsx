import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../features/todo/todoSlice';

function AddTodo({ editTodoId }) {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    useEffect(() => {
        // If we're in edit mode, find the todo text and set it as the input value
        if (editTodoId !== null) {
            const todo = todos.find(todo => todo.id === editTodoId);
            if (todo) {
                setInput(todo.text);
            }
        } else {
            setInput(''); // Reset input value if not in edit mode
        }
    }, [editTodoId, todos]);

    const handleAddOrUpdateTodo = (e) => {
        e.preventDefault();
        if (editTodoId !== null) {
            // If editTodoId is not null, it means we're updating an existing todo
            dispatch(updateTodo({ id: editTodoId, text: input }));
        } else {
            // Otherwise, we're adding a new todo
            dispatch(addTodo(input));
        }
        setInput(''); // Reset input value
    }

    const handleCancel = () => {
        setInput('');
        // Reset editTodoId state to null when canceling
        setEditTodoId(null);
    }

    return (
        <form onSubmit={handleAddOrUpdateTodo} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            {editTodoId !== null ? (
                <>
                    <button
                        type="submit"
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                        Update Todo
                    </button>
                    <button
                        type="button"
                        className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </>
            ) : (
                <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                    Add Todo
                </button>
            )}
        </form>
    )
}

export default AddTodo;
