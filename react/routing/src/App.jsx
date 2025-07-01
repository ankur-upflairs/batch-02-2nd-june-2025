import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import ViewTasks from "./pages/ViewTasks";
import EditTask from "./pages/EditTask";
import Error404 from "./pages/Error404";
import NewTask from "./pages/NewTask";
import SingleTaskPage from "./pages/SingleTaskPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/tasks"}>View Tasks </NavLink>
          </li>
          <li>
            <NavLink to={"/addtask"}>add Tasks </NavLink>
          </li>
          <li>
            <NavLink to={"/edit"}>Edit Tasks </NavLink>
          </li>
        </ul>
        {/* <ul>
        <li><Link to={'/'} >Home</Link></li> 
        <li><Link to={'/tasks'} >View Tasks </Link></li> 
        <li><Link to={'/addtask'} >add Tasks </Link></li> 
        <li><Link to={'/edit'} >Edit Tasks </Link></li> 
      </ul> */}
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="tasks" element={<ViewTasks />}>
             <Route path="new" element={<NewTask />} />          
          </Route>
          <Route path="/task/:id" element={<SingleTaskPage />} />
          <Route path="addtask" element={<AddTask />} />
          <Route path="edit" element={<EditTask />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
