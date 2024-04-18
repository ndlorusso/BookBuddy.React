/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { fetchSingleBook } from "../API";

export default function SingleBook () {
    const [book, setBook] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        async function getSingleBook() {
            try {
              const response = await fetchSingleBook(id);
              console.log(response.book);
              setBook(response.book);  
            } catch (error) {
                console.error(error);
            }
        }
        getSingleBook();
    }, [id]);

    return (
        <>
        <h3>SINGLE BOOK COMPONENT</h3>
        </>
    )
}