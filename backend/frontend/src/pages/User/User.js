import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../User/User.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../../components/navbar/Navbar";



const User = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    retrieveUsers();
  }, []);

  function retrieveUsers() {
    axios.get("http://localhost:8000/users")
    .then(res => {
        console.log(res.data);
        setUsers(res.data);
        setIsLoading(false); 
      })
      .catch(error => {
        console.error("Error retrieving users:", error);
        setIsLoading(false); 
      });      
  }

  const onDelete = (id) => {
    axios.delete(`http://localhost:8000/user/delete/${id}`)
      .then((res) => {
        alert("Delete Successfully");
        retrieveUsers();
      })
      .catch(error => {
        console.error("Error deleting user:", error);
      });
  }

  const filterData = (searchKey) => {
    const lowerCaseSearchKey = searchKey.toLowerCase();
    const filteredPosts = users.filter((user) => {
      const lowerCaseUserName = user.username.toLowerCase();
      const lowerCasePassword = user.password.toLowerCase();
      const lowerCaseEmail = user.email.toLowerCase();
      const lowerCaseName = user.name.toLowerCase();
      const lowerCaseAge = user.age.toLowerCase();
      const lowerCaseDOB = user.dob.toLowerCase();
      return lowerCaseUserName.includes(lowerCaseSearchKey) ||
            lowerCasePassword.includes(lowerCaseSearchKey) ||
            lowerCaseEmail.includes(lowerCaseSearchKey) ||
            lowerCaseName.includes(lowerCaseSearchKey) ||
            lowerCaseAge.includes(lowerCaseSearchKey) ||
            lowerCaseDOB.includes(lowerCaseSearchKey);
    });
    setUsers(filteredPosts);
  };

  

  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    if (searchKey.trim() !== "") {
      filterData(searchKey);
    } else {
      retrieveUsers();
    }
  }
  return (
    <div className="container">
    <NavBar/>
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
          <h4>Users</h4>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={handleSearchArea}
          />
        </div>
      </div>
      <table className="table table-hover" style={{ marginTop: '40px' }}>
        <thead>
          <tr>
            <th scope="col">User ID</th>
            <th scope="col">User Name</th>
            <th scope="col">Password</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">DOB</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <a href={`/user/${user._id}`} style={{ textDecoration: "none" }}>{user.username}</a>
              </td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.dob}</td>
              <td>
                <a className="btn btn-primary" href="#" onClick={() => onDelete(user._id)}>
                  <i className="fas fa-trash-alt"></i>&nbsp;Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-info">
        <a href="/adduser" style={{ textDecoration: 'none', color: "white" }}>
          Create New User</a></button>
      

    </div>
  );
}

export default User;
