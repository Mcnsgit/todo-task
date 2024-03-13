const API_URL = `http://localhost:4000`;

export const deleteTodo = async (id) => {
    try {
        const response = await fetch(`${API_URL}/item/${id}`, {
            method: 'DELETE'
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Error deleting todo:', error);
        throw error;
    }
};
