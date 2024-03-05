import "./App.css";
import AddUser from "./features/users/AddUser";
import UserList from "./features/users/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./features/users/EditUser";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
        <h1 className="text-center font-bold text-2xl text-gray-700 ">
          Crud App with redux toolkit
        </h1>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="/edit-user/:id"  element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
