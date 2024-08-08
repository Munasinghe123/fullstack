import React, { useEffect, useState, useRef } from "react"; // Import useRef here
import Nav from "../Nav/Nav";
import axios from "axios";
import DisplayUser from "../DisplayUser/DisplayUser";
import { useReactToPrint } from "react-to-print";

// URL to get the data from the database
const URL = "http://localhost:5000/users";

// Fetching the data from the URL
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function UserDetails() {
  const [users, setUsers] = useState([]); // Initialize as an empty array
  const [filteredUsers, setFilteredUsers] = useState([]); // State to hold filtered users
  const componentsRef = useRef(); // Use useRef to create a reference

  useEffect(() => {
    fetchHandler().then((data) => {
      const usersList = data.users || data; // Adjust based on your API response
      setUsers(usersList);
      setFilteredUsers(usersList); // Initialize filtered users with all users
    });
  }, []);

  // Report generation
  const handlePrint = useReactToPrint({
    content: () => componentsRef.current, // Reference to the element you want to print
    documentTitle: "Users Report",
    onAfterPrint: () => alert("Users report successfully downloaded"),
  });

  // Search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    const filtered = users.filter((user) =>
      Object.values(user).some((field) =>
        field.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

    setFilteredUsers(filtered);
    setNoResults(filtered.length === 0);
  };

  return (
    <div>
      <Nav />
      <h1>User Details</h1>

      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        name="search"
        placeholder="Search users"
      />
      <button onClick={handleSearch}>Search</button>

      {noResults ? (
        <div>
          <p>No users found</p>
        </div>
      ) : (
        <div ref={componentsRef}>
          {filteredUsers.map((user) => (
            <div key={user._id}>
              <DisplayUser user={user} />
            </div>
          ))}
        </div>
      )}

      <button onClick={handlePrint}>Download Report</button>
    </div>
  );
}

export default UserDetails;
