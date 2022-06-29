import React, { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new Object();
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    try {
      if (name == null || name === "") {
        alert("please enter your name");
      } else if (email == null || email === "") {
        alert("Please enter your email");
      } else if (age == null || age === "") {
        alert("please enter the age");
      } else if (
        atposition < 1 ||
        dotposition < atposition + 2 ||
        dotposition + 2 >= email.length
      ) {
        alert("Please enter a valid email address");
      } else {
        data.name = name;
        data.email = email;
        data.age = age;
        data.gender = gender;

        await fetch(
          "https://crudcrud.com/api/d7f373c779274c14975eec737e9517ab/users",
          {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: "POST",
            body: JSON.stringify(data),
          }
        ).then((response) => response.json());

        e.target.reset();
        window.location.reload();
      }
    } catch (e) {
      alert(e.message);
    }
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
            type="text"
            name="email"
            id="email"
            className="input"
          />
          <label htmlFor="age">Age:</label>
          <input
            onChange={(e) => setAge(e.target.value)}
            type="number"
            name="age"
            id="age"
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
            <input
              type="submit"
              className="button"
              id="add-btn"
              value="Add User"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
