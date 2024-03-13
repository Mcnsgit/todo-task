const API_URL = `http://localhost:4000`

export const getTodos = async () => {
    let response = await fetch('http://localhost:4000/todos/items')
    let data = await response.json()
    return data.todos
}