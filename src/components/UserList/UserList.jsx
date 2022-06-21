import React from "react";
import "./UserList.css";

const UserList = () => {
  return (
    <div className="user-list-container">
      <button className="userlist-btn">Update List</button>
      <table>
        <caption>User's data</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Update/Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>user-1</td>
            <td>test@test.com</td>
            <td>21</td>
            <td>Male</td>
            <td>
              <button className="userlist-btn">Update</button>
              <button className="userlist-btn">Delete</button>
            </td>
          </tr>
          <tr>
            <td>user-2</td>
            <td>test1@test.com</td>
            <td>22</td>
            <td>Female</td>
            <td>
              <button className="userlist-btn">Update</button>
              <button className="userlist-btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
