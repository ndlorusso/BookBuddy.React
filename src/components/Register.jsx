/* TODO - add your code to create a functional React component that renders a registration form */
import { useState } from "react";
// import { handleSubmit } from "../API";

export default function SignUpForm( {setToken} ) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e) {
       e.preventDefault(); 
       try {
        const response = await fetch( 
            // "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register",
            "https://unit3-bookbuddy-api.onrender.com/api/users/register",
            {
              method : "POST",  
              headers : {"Content-Type" : "application/json",},
              body : JSON.stringify({
                  email,
                  password,
                }),
            }
            );
            const result = await response.json();
            console.log("Signup result", result);
            setToken(result.token);
            setSuccessMessage(result.message);
            setEmail("");
            setPassword("");
       } catch (error) {
        setError(error.message)
       }
    }

    // handleSubmit();

    return (
        <>
        <h2>Signup</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:{" "}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => {
            setPassword(e.target.value);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
        </>
    )
}

// < ------------- save token in local storage ------------>
// send token for authenticated users