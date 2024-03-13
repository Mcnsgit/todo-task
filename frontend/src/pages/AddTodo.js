import { useState } from "react"
import { addTodo } from "'../api/addTodo"
const AddTodo = () => {

    const [userInput, setUserInput] = useState("")

    const handler = async (e) => {
        e.preventDefault()
        let response = await addTodo(userInput)
        console.log(response)
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
                    onChange={(e) => setUserInputtUserInput (e.target.vaule)}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default AddTodo