import React from "react";
import { Link } from "react-router-dom";

const UserEntry = (props) => {
  const { name, email, age, gender, id } = props;
  const url = `https://crudcrud.com/api/3bf73c644c014a82b3ca62b105859f5f/users/${id}`;

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
          <button className="userlist-btn">Update</button>
        </Link>
        <button className="userlist-btn" onClick={deleteUser}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserEntry;
