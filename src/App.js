import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import store from "./cc2/store";
import { setUsers } from "./cc2/actions"; // Import setUsers action
import PageAccueil from "./cc2/PageAccueil";
import Users from "./cc2/users";
import AddStagiaire from "./cc2/AddStagiaire";
import List from "./cc2/Listusers";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                dispatch(setUsers(data)); // Set users in Redux store
            })
            .catch((error) => console.error("Error fetching users:", error));
    }, [dispatch]);

    return (
        <Routes>
            <Route path='/home' element={<PageAccueil />} />
            <Route path='/listUser' element={<List />} />
            <Route path='/users/:name' element={<Users />} />
            <Route path="/add" element={<AddStagiaire />} />
        </Routes>
    );
}

export default function WrappedApp() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
