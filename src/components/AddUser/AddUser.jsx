import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new Object();

    data.name = name;
    data.email = email;
    data.age = age;
    data.gender = gender;

    fetch("https://crudcrud.com/api/29c4c9ffb24140bcbbea7ba0bbce987b/users", {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify(data),
    }).then((response) => response.json());
    e.target.reset();
    // document.getElementById('#refresh-btn').addEventListener(click);
    window.location.reload();
  };

  return (
    <div className="main-container">
      <h2 className="slide-left">Fill the below details to add the user:</h2>
      <div className="form-container">
        <form name="myform" onSubmit={handleSubmit}>
          <label htmlFor="name">Full name:</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="fullname"
            id="uname"
            className="input"
          />
          <label htmlFor="email">Email:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            className="input"
          />
          <label htmlFor="age">Age:</label>
          <input
            onChange={(e) => setAge(e.target.value)}
            type="number"
            name="age"
            id="pass"
            className="input"
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
      </div>
    </div>
  );
};

export default AddUser;
