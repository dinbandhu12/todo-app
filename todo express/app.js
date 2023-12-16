const { response } = require("express");

document.addEventListener("DOMContentLoaded", () => {
    fetchTodos();
});

function fetchTodos() {
    fetch("http://localhost:3000/todos")
        .then(response => response.json())
        .then(todos => {
            displayTodos(todos);
        })
        .catch(error => console.error("Error:", error));
}

function displayTodos(todos) {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    todos.forEach(todo => {
        const listItem = document.createElement("li");
        listItem.innerText = todo.title;
        todoList.appendChild(listItem);
    });
}

function addTodo() {
    const todoTitle = document.getElementById("todoInput");
    const title = todoTitle.value.trim();

    if (title !== "") {
        fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title }),
        })
            .then(response => response.json())
            .then(newTodo => {
                todoInput.value = "";
                fetchTodos();
            })
            .catch(error => console.error("Error adding todo:", error));
    }
}