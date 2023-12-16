const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const todos = [];

app.get("/todos", (req, res) => {
    res.json(todos);
})

app.post("/todos", (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.json(newTodo);
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});