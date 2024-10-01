import React, { useState } from 'react';

function Counter() {
    const [todoData, setTodoData] = useState([
        { title: "REACT BOOTCAMP - Installation setup", isCompleted: false },
        { title: "Opening VS Code", isCompleted: false },
        { title: "Studied different packages", isCompleted: false },
        { title: "Product Inventory creation", isCompleted: false },
        { title: "Studying about counters", isCompleted: false },
        { title: "Studying about counters", isCompleted: false },
        { title: "Applying it to ToDo tasks", isCompleted: false }
    ]);

    const handleCompleteClick = (index) => {
        const updatedTodoData = [...todoData];
        updatedTodoData[index] = { ...updatedTodoData[index], isCompleted: true };
        setTodoData(updatedTodoData);
    }

    const handleDelete = (index) => {
        const updatedTodoData = todoData.filter((_, todoIndex) => todoIndex !== index);
        setTodoData(updatedTodoData);
    }

    return (
        <div>
            {todoData.map((todo, index) => (
                <div key={index}>
                    <h1 style={{ color: todo.isCompleted ? 'green' : 'black' }}>{todo.title}</h1>
                    {todo.isCompleted ? <h2 style={{ color: 'green' }}>Task Completed</h2> : <h2>Please complete your task</h2>}
                    {!todo.isCompleted && (
                        <>
                            <button onClick={() => handleCompleteClick(index)}>Completed</button>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Counter;

