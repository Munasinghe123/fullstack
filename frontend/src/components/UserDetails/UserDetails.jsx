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
  const componentsRef = useRef(); // Use useRef to create a reference

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users || data)); // Adjust based on your API response
  }, []);

  // Report generation
  const handlePrint = useReactToPrint({
    content: () => componentsRef.current, // Reference to the element you want to print
    documentTitle: "Users Report", // Use camel case here
    onAfterPrint: () => alert("Users report successfully downloaded"), // Use camel case here
  });

  return (
    <div>
      <Nav />
      <h1>User Details</h1>
      <div ref={componentsRef}>
        {/* Use componentsRef here */}
        {users.map((user) => (
          <div key={user._id}>
            <DisplayUser user={user} />
          </div>
        ))}
      </div>
      <button onClick={handlePrint}>Download Report</button>
      {/* Uncomment to enable printing */}
    </div>
  );
}

export default UserDetails;
