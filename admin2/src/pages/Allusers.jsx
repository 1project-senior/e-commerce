import React, { useState, useEffect } from "react";
import axios from "axios";

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3005/api/user/getall");
      console.log("Fetched Users:", response.data);
      
      // Check if response.data is an array
      if (Array.isArray(response.data)) {
        setUsers(response.data);
      } else if (response.data.users && Array.isArray(response.data.users)) {
        setUsers(response.data.users);
      } else {
        setError("Invalid data format received from server");
        setUsers([]);
      }
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Failed to fetch users. Please check if the server is running.");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <h2>Loading users...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2>All Users</h2>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map((user, index) => (
          <div key={index} className="user-card">
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            
            {/* Add more user details as needed */}
          </div>
        ))
      )}
    </div>
  );
}

export default AllUsers;
