// In your ../api/getTodo file
const API_URL = `http://localhost:4000`;

export const getTodo = async (id) => {
    try {
        const response = await fetch(`${API_URL}/items/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching todo:", error);
        throw error; // Rethrow or handle as needed
    }
};
