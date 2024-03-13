const API_URL = `http://localhost:4000`;

export const getTodos = async () => {
    try {
        const response = await fetch(`${API_URL}/items`);
        const data = await response.json();
        return data.todos;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};
