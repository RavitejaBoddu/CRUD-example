import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './UpdateUser.css'

const UpdateUser = () => {
  const { id } = useParams();
  
  const [userData, setUserData] = useState({
      name : "",
      email: "",
      age: 0,
      gender: ""
  });

  const url = `https://crudcrud.com/api/8efe99290e1940b4aed596c01f9dbc3f/users/${id}`;

  useEffect(() => {
    async function getUser() {
      try {
        const user = await axios.get(url);
        setUserData(user.data);
        console.log(user.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getUser();
  }, [id]);

  function onTextFieldChange(e) {
    setUserData({
     ...userData,
     [e.target.name]: e.target.value
    })
   }

  const handleUpdate = async (e) => {
    e.preventDefault();
    fetch(
      url, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify(userData)
      })
      .then(response => console.log(response))
  };
 
  return (
    <div className="main-container">
      <h1 className="slide-left">Fill the below details to update the user</h1>
      <div className="form-container">
      <form name="myform" onSubmit={handleUpdate}>
        <label htmlFor="name">Full name:</label>
        <input
          onChange={(e) => onTextFieldChange(e)}
          type="text"
          name="fullname"
          id="uname"
          className="input"
          value={userData.name}
        />
        <label htmlFor="email">Email:</label>
        <input
          onChange={(e) => onTextFieldChange(e)}
          type="email"
          name="email"
          id="email"
          className="input"
          value={userData.email}
        />
        <label htmlFor="age">Age:</label>
        <input
          onChange={(e) => onTextFieldChange(e)}
          type="number"
          name="age"
          id="pass"
          className="input"
          value={userData.age}
        />
        <div className="radio">
          <span>Gender:- </span>
          <input
             onChange={(e) => onTextFieldChange(e)}
            type="radio"
            id="male"
            name="gender"
            value="Male"
          />
          <label htmlFor="male">Male</label>
          <input
             onChange={(e) => onTextFieldChange(e)}
            type="radio"
            id="female"
            name="gender"
            value="Female"
          />
          <label htmlFor="female">Female</label>
        </div>
        <div className="button-container">
          <input type="submit" className="button" value="Add User" />
        </div>
      </form>
      </div>
      <Link to="/"><button className="refresh-button">Back to Home</button></Link>
    </div>
  );
};

export default UpdateUser;
