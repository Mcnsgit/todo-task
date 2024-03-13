import { useEffect, useState } from "react";
import { readTodos } from "../api/readTodos";

import Card from '../components/Card';
import { deleteTodo } from "../api/deleteTodo";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const deleteHandler = async (todoId) => { // Ensure todoId is passed correctly
    try {
      await deleteTodo(todoId); 
      setTodos(prevTodos => prevTodos.filter(todo => todo._id !== todoId));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  useEffect(() => {
    const fetchTodos = async () => {
      let data = await readTodos();
      if (data && data.todos) { // Check if data and data.todos exist
        setTodos(data.todos);
      } else {
        console.error("Failed to fetch todos: ", data.message);
      }
    };
    fetchTodos();
  }, []);

  // Loading state handled at the top
  return (
    <div>
      {todos.map((todo) => (
        <Card key={todo._id} deleteHandler={() => deleteHandler(todo._id)} todo={todo}/>
      ))}
    </div>
  );
};

export default Home;
