// handler functions that will be executed 

const TodoSchema = require("../models/todo")


const getTodos = async (req, res) => {
  try {
        const items = await req.TodoSchema.find({})
        await
        res.status(200).json({
            message: "all items",
            todos: items
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal server error' })
    }
}
const getTodo = async (req, res) => {
    // get id from ':id' param from the route (the :id in the route path)
    const { id } = req.params;
    console.log(`Fetching todo with id: ${id}`);
    // find todo with Model.findById()
    const todo = await TodoSchema.findById(id);
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    // response (res) with .json with the todo found
    res.status(200).json(todo);
  }

const createTodo = async (req, res) => {
    const { text } = req.body;
    // create new todo object with model
    const todo = new TodoSchema({ text });
    // await for it to be saved
    await todo.save();
    // respond with json()
    res.status(201).json(todo);
}

const editTodo = async (req, res) => {
    // get id from ':id' param from the route
   
    // use mongoose model method findByIdAndUpdate
  
}

const deleteTodo = async (req, res) => {
    // get id from ':id' param from the route
    
    // use mongoose model method findByIdAndDelete
   

   
}

module.exports = {
    createTodo,
    getTodos,
    editTodo,
    deleteTodo,
    getTodo
}