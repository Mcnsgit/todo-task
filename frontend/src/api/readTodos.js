const API_URL = `http://localhost:4000`;

export const readTodos = async () => {
    try {
        const response = await fetch(`${API_URL}/items`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error reading todos:', error);
        throw error;
    }
};
