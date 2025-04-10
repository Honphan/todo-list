const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Task = require('./model/task');

mongoose.connect('mongodb://localhost:27017/todo')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/addTodo", (req, res) => {
  const task = req.body;
  console.log(task);
  const newTask = new Task({
    title: task.task,
    completed: false,
    createdAt: Date.now(),
  });

  newTask.save()
    .then(() => {
      console.log('Task saved successfully');
    })
    .catch((error) => {
      console.error('Error saving task:', error);
    });
  res.send({ message: 'Todo added successfully' });
})


app.get('/getTodos', (req, res) => {
  Task.find()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((error) => {
      console.error('Error fetching tasks:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
})

app.delete('/deleteTodo/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    Task.findByIdAndDelete(id)
      .then(() => {
        res.json({ message: 'Todo deleted successfully' });
      })
      .catch((error) => {
        console.error('Error deleting todo:', error);
        res.status(500).json({ error: 'Internal server error' });
      });
})

app.patch('/completeTodo/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.body);
    Task.findByIdAndUpdate(id,{completed: !req.body.completed})
      .then(() => {
        res.json({ message: 'Todo completed successfully' });
      })
      .catch((error) => {
        console.error('Error completing todo:', error);
        res.status(500).json({ error: 'Internal server error' });
      });
})


app.listen(3000, () => {
  console.log('Server is running on port 3000');
})