import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./actions";
import { Link } from "react-router-dom";

export default function AddStagiaire() {
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();

    const handleAddUser = () => {
        const newUser = { name: userName, id: Math.random() };
        dispatch(addUser(newUser));  
    };

    return (
        <div>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter user name"
            />
            <button onClick={handleAddUser}>Add User</button> <br />
                        <Link to={"/listUser"}>Back</Link>
            
        </div>
    );
}
