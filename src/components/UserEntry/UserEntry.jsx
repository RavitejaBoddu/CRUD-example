import React from "react";
import { Link } from "react-router-dom";

const UserEntry = (props) => {
  const { name, email, age, gender, id } = props;
  const url = `https://crudcrud.com/api/8efe99290e1940b4aed596c01f9dbc3f/users/${id}`;

  const deleteUser = () => {
    try {
      fetch(url, {
        method: "DELETE",
      });
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{age}</td>
      <td>{gender}</td>
      <td>
        <Link to={`/update/${id}`}>
          <button className="button">Update</button>
        </Link>
        <button className="button" onClick={deleteUser}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserEntry;
