const Todo = require('../models/todo');

const createTodo = async (req, res) => {
  try {
    const { text } = req.body;
    const todoObject = new Todo({ text });
    const newTodo = await todoObject.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create todo item' });
  }
};

const getTodos = async (req, res) => {
  try {
    const items = await Todo.find({});
    res.status(200).json({ todos: items });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve todo items' });
  }
};

const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo item not found' });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve todo item' });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { text },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ error: 'Todo item not found' });
    }
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update todo item' });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ error: 'Todo item not found' });
    }
    res.status(200).json(deletedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete todo item' });
  }
};

module.exports = {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
};