const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books";

export async function fetchAllBooks () {
    try {
        const response = await fetch (API);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Cannot fetch all books", error);
    }
}