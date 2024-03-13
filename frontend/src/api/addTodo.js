const API_URL = `http://localhost:4000`;

export const addTodo = async (todo) => {
    try {
        const obj = { text: todo }; // Assuming your model requires a 'text' field
        const response = await fetch(`${API_URL}/item`, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Error adding todo:', error);
        throw error;
    }
};
