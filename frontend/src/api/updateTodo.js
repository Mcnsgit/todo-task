const API_URL = `http://localhost:4000`;

export const updateTodo = async (todo) => {
    try {
        const response = await fetch(`${API_URL}/item/${todo._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: todo.text }) // is this right??
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Error updating todo:', error);
        throw error;
    }
};
