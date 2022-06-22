import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  
  const [userData, setUserData] = useState({});

  const url = `https://crudcrud.com/api/3bf73c644c014a82b3ca62b105859f5f/users/${id}`;


  useEffect(() => {
    async function getUser() {
      try {
        const user = await axios.get(url);
          setUserData(user.data);
        console.log(user.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getUser();
  }, [id]);

  const [u_name, setName] = useState(userData.name);
  const [u_email, setEmail] = useState(userData.email);
  const [u_age, setAge] = useState(userData.age);
  const [u_gender, setGender] = useState("");
  console.log(u_name)
  console.log(u_email)
  console.log(u_age)
  console.log(u_gender)

  const handleUpdate = (e) => {
    e.preventDefault();
    const data = new Object();

    data.name = u_name;
    data.email = u_email;
    data.age = u_age;
    data.gender = u_gender;

    fetch(url, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "PUT",
      body: JSON.stringify(data),
    }).then((response) => response.json());
    e.target.reset();
  };

 
  return (
    <div className="main-container">
      <h1 className="slide-left">Fill the below details to update the user</h1>
      <form name="myform" onSubmit={handleUpdate}>
        <label htmlFor="name">Full name:</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="fullname"
          id="uname"
          className="input"
          value={u_name}
        />
        <label htmlFor="email">Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          className="input"
          value={u_email}
        />
        <label htmlFor="age">Age:</label>
        <input
          onChange={(e) => setAge(e.target.value)}
          type="number"
          name="age"
          id="pass"
          className="input"
          value={u_age}
        />
        <div className="radio">
          <span>Gender:- </span>
          <input
            onChange={(e) => setGender(e.target.value)}
            type="radio"
            id="male"
            name="gender"
            value="Male"
          />
          <label htmlFor="male">Male</label>
          <input
            onChange={(e) => setGender(e.target.value)}
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
      <button >Back to Home</button>
    </div>
  );
};

export default UpdateUser;
