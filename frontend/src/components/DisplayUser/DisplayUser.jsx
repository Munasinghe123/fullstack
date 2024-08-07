import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function DisplayUser(props) {
  const { _id, name, gmail, age, address } = props.user;

  const navigate = useNavigate();

  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:5000/users/${_id}`);
      refreshUsers(); // Call the function to refresh the user list
      navigate("/"); // Navigate to the home page or wherever you want
    } catch (error) {
      console.error("Error deleting user:", error);
      // Optionally, show an alert or a message to the user
    }
  };

  return (
    <div>
      {/* <h1>All the users</h1> <br /> */}
      <br />
      <h1>Id:{_id}</h1>
      <h1>name:{name}</h1>
      <h1>gmail:{gmail}</h1>
      <h1>age:{age}</h1>
      <h1>address:{address}</h1>
      <button onClick={deleteHandler}>delete</button>
      <Link to={`/userDetails/${_id}`}>
        <button> update</button>
      </Link>
    </div>
  );
}

export default DisplayUser;
