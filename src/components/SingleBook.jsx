/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useState, useEffect} from 'react';
import { fetchSingleBook } from "../API";

export default function SingleBook () {
    const [book, setBook] = useState([]);

    useEffect(() => {
        async function getSingleBook() {
            try {
              const response = await fetchSingleBook();
              console.log(response.books.id);
              setBook(response.books.id);  
            } catch (error) {
                console.error(error);
            }
        }
        getSingleBook();
    }, []);

    return (
        <>
        <h3>SINGLE BOOK COMPONENT</h3>
        </>
    )
}