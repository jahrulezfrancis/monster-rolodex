async function fetchData<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle any errors that may occur during the fetch or parsing of JSON.
      throw error;
    }
  }
  
  export default fetchData;