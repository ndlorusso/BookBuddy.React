import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Navigations from './components/Navigations';
import Register from './components/Register';
import Login from './components/Login';
import Books from './components/Books';
import SingleBook from './components/SingleBook';
import bookLogo from './assets/books.png';


function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <Navigations/>  
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>

      <p>Complete the React components needed to allow users to browse a library catalog, check out books, review their account, and return books that theyve finished reading.</p>
      <p>You may need to use the `token` in this top-level component in other components that need to know if a user has logged in or not.</p>
      <p>Dont forget to set up React Router to navigate between the different views of your single page application!</p>

    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/books" element={<Books/>}/>
      <Route path="/books/:id" element={<SingleBook/>}/>
    </Routes>
    <Books/>
    </>
  )
}

export default App
