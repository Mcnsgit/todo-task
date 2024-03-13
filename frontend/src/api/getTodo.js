const API_URL = `http://localhost:4000`;

export const getTodo = async () => {
    try {
        const response = await (`${API_URL}/items`);
        const data = await response.json();
        return data.todos;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};
