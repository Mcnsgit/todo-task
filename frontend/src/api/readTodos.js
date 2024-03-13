const API_URL = `http://localhost:4000`

export const readTodos = async () => {
     try{
          let response = await fetch(`${API_URL}/items`);
          if(!response.ok){
               throw new Error(`HTTP error! status: ${response.status}`)
          }
          let data = await response.json();
          return data;
     }catch (error){
          console.error("Error fetching data:", error);
     }
}