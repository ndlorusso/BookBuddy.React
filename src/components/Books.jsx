/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useState, useEffect } from "react";
import { fetchAllBooks } from "../API";
// import { fetchSingleBook } from "../API"; - for button

export default function AllBooks() {
    const [books, setBooks] = useState([]);
    const [searchParams, setSearchParams] = useState("");

    useEffect(() => {
        async function getAllBooks() {
            try {
              const response = await fetchAllBooks(); 
              console.log(response.books);
              setBooks(response.books); 
            } catch (error) {
              console.error(error);
            }
        }
        getAllBooks();
    }, []);

    
    const booksToDisplay = searchParams ? books.filter((book)=> book.title.toLowerCase().includes(searchParams)) : books;
    

    return (
        <>
        <h3>ALL BOOKS - Component </h3>
        <div key = "book-container">
            {booksToDisplay.map((book) => {
                return (
                <div key={book.id}>
                <h3>{book.title}</h3>
                <h4>{book.author}</h4>
                {/* <h4>{book.available}</h4> */}
                <img src={book.coverimage} alt={book.title}/>
                <button>More info about "{book.title}"</button>
                </div> 
                )})}
        </div>
        </>
    )
}