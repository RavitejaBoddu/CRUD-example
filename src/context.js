import axios from "axios";
import { createContext, useContext, useState } from "react";


const userContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const getData = async () => {
      const data = await axios.get("https://crudcrud.com/api/29c4c9ffb24140bcbbea7ba0bbce987b/users");
      return data;
    }

    return (
        <userContext.Provider
          value={{
            isUpdate,
            setIsUpdate,
            getData
          }}
        >
          {children}
        </userContext.Provider>
      );
}

export const User = () => {
    return useContext(userContext);
  };