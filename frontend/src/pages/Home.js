import { useEffect, useState } from "react";
import { readTodos } from "../api/readTodos";
import Card from "../components/Card";
import { deleteTodo } from "../api/deleteTodo";

const Home = () => {
    const [todos, setTodos] = useState([]);

    const deleteHandler = async (todoId) => {
        try {
            await deleteTodo(todoId);
            setTodos(prevTodos => prevTodos.filter(todo => todo._id !== todoId));
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                let data = await readTodos();
                setTodos(data.todos);
                console.log(data.message);
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };
        fetchTodos();
    }, []);

    if (!todos) return <h1>loading...</h1>;
    
    return (
        <div>
            <>
                {todos.map((todo) => (
                    <Card key={todo._id} deleteHandler={deleteHandler} todo={todo} />
                ))}
            </>
        </div>
    );
};

export default Home;
