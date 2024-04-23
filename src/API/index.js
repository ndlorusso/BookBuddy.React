// const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books";
const API = "https://unit3-bookbuddy-api.onrender.com/api/";

export async function fetchAllBooks () {
    try {
        const response = await fetch (`${API}/books`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Cannot fetch all books", error);
    }
}

export async function fetchSingleBook(id) {
    try {
        const response = await fetch (`${API}/books/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Cannot fetch single book", error);
    }
}

// export async function handleRegister(e) {
//     e.preventDefault(); 
//     try {
//      const response = await fetch( 
//          `${API}/users/register`,
//          {
//            method : "POST",  
//            headers : {"Content-Type" : "application/json",},
//            body : JSON.stringify({
//                email,
//                password,
//              }),
//          }
//          );
//          const result = await response.json();
//          console.log("Signup result", result);
//          setToken(result.token);
//          setSuccessMessage(result.message);
//          setEmail("");
//          setPassword("");
//     } catch (error) {
//      setError(error.message)
//     }
//  }

// async function handleLogin(e) {
//     e.preventDefault(); 
//     try {
//      const response = await fetch( 
//         `${API}/users/login`,
//          {
//            method : "POST",  
//            headers : {"Content-Type" : "application/json",},
//            body : JSON.stringify({
//                email,
//                password,
//              }),
//          }
//          );
//          const result = await response.json();
//          console.log("Signup result", result);
//          // setToken(result.token);
//          setSuccessMessage(result.message);
//          setEmail("");
//          setPassword("");
//     } catch (error) {
//      setError(error.message)
//     }
//  }