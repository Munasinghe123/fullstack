import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import DisplayUser from "../DisplayUser/DisplayUser";

//url to get the data from the database
const URL = "http://localhost:5000/users";

//fetching the data from the url
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function UserDetails() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

 

  return (
    <div>
      <Nav></Nav>
      <h1>user details</h1>
      <div>
        {users &&
          users.map((user, id) => (
            <div key={id}>
              <DisplayUser user={user} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default UserDetails;
