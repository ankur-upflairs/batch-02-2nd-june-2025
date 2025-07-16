import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BlogCRUD from "./BlogCrud";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import Signup from "./SignUp";
import Login from "./Login";
import axios from "axios";
import ProtectedRoutes from "./ProtectedRoutes";

axios.defaults.headers.Authorization = localStorage.getItem("token");

function App() {
  const [count, setCount] = useState(0);
  const logout = () => {
    localStorage.removeItem("token");
  };
  return (
    <>
      <BrowserRouter>
        <ul
          style={{
            display: "flex",
            width: "50%",
            margin: "10px auto",
            listStyle: "none",
            justifyContent: "center",
            gap: "50px",
          }}
        >
          <li>
            <Link to={"signup"}>signup</Link>
          </li>
          <li>
            <Link to={"login"}>Login</Link>
          </li>
          <li>
            <Link to={"blogs"}>Blogs</Link>
          </li>
          <li style={{cursor:'pointer'}} onClick={logout}>logout</li>
        </ul>
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route
            path="blogs"
            element={
              <ProtectedRoutes>
                <BlogCRUD />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
