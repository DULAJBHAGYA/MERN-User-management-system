import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../Admin/Admin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../../components/navbar/Navbar";



const Admin = () => {
  const [users, setAdmins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    retrieveAdmins();
  }, []);

  function retrieveAdmins() {
    axios.get("http://localhost:8000/admins")
    .then(res => {
        console.log(res.data);
        setAdmins(res.data);
        setIsLoading(false); 
      })
      .catch(error => {
        console.error("Error retrieving admins:", error);
        setIsLoading(false); 
      });      
  }

  const onDelete = (id) => {
    axios.delete(`http://localhost:8000/admin/delete/${id}`)
      .then((res) => {
        alert("Delete Successfully");
        retrieveAdmins();
      })
      .catch(error => {
        console.error("Error deleting admin:", error);
      });
  }

  const filterData = (searchKey) => {
    const lowerCaseSearchKey = searchKey.toLowerCase();
    const filteredPosts = users.filter((admin) => {
      const lowerCaseUserName = admin.username.toLowerCase();
      const lowerCaseEmail = admin.email.toLowerCase();
      const lowerCaseName = admin.name.toLowerCase();
      return lowerCaseUserName.includes(lowerCaseSearchKey) ||
            lowerCaseEmail.includes(lowerCaseSearchKey) ||
            lowerCaseName.includes(lowerCaseSearchKey)
    });
    setAdmins(filteredPosts);
  };

  

  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    if (searchKey.trim() !== "") {
      filterData(searchKey);
    } else {
      retrieveAdmins();
    }
  }
  return (
    <div className="container">
    <NavBar/>
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
          <h4>Admins</h4>
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
            <th scope="col">Admin ID</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((admin, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <a href={`/user/${admin._id}`} style={{ textDecoration: "none" }}>{admin.username}</a>
              </td>
              <td>{admin.email}</td>
              <td>{admin.name}</td>
            </tr>
          ))}
        </tbody>
      </table> 

    </div>
  );
}

export default Admin;
