import Home from "./components/Home/Home";
import UserDetails from "./components/UserDetails/UserDetails";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser/AddUser";
import UpdateUser from "./components/UpdateUser/UpdateUser";

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainhome" element={<Home />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/userDetails/:id" element={<UpdateUser/>} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
