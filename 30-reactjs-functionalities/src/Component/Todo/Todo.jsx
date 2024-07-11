import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="bg-yellow-400 min-h-screen flex items-center justify-center">
      <div className="bg-purple-400 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-white text-2xl mb-4 text-center">Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-2 rounded-l-lg border-2 border-purple-500 focus:outline-none"
            placeholder="Add a new todo"
          />
          <button
            onClick={handleAddTodo}
            className="bg-green-500 text-white p-2 rounded-r-lg hover:bg-green-600 focus:outline-none"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="bg-white p-3 rounded-lg shadow flex justify-between items-center"
            >
              <span>{todo}</span>
              <button
                type="button"
                className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 focus:outline-none"
                onClick={() => handleRemoveTodo(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
