import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addTodo } from "../api/addTodo"


const AddTodo = () => {
    const [userInput, setUserInput] = useState("")
    const navigate = useNavigate()

    const handler = async (e) => {
        e.preventDefault()
        await addTodo(userInput)
        navigate("/")
    }

    return (
        <div>
            <h1>
                add item
            </h1>
            <form onSubmit={handler}>
                <input 
                type="text"
                    value={userInput}
                    onChange={(e) => setUserInput (e.target.value)}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default AddTodo
