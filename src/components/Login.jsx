/* TODO - add your code to create a functional React component that renders a login form */

import { useState } from "react";

export default function SignUpForm( {setToken} ) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e) {
       e.preventDefault(); 
       try {
        const response = await fetch( 
            "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login",
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