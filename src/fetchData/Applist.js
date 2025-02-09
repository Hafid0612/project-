import React, { useEffect, useState } from "react";
import axios from "axios";
import ListUser from "./fetchUsers";
export default function Applist() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const users = await axios.get("https://jsonplaceholder.typicode.com/users"
      );
      setUtilisateurs(users.data);
    };
    getData();
  }, []);
  return (
    <div>
      {utilisateurs ?
        (<div>
          <ListUser utilisateurs={utilisateurs} />
        </div>) : "pas d'utilisateurs!!!!"}
    </div>
  );
} 