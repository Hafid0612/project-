// Users.js
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export default function Users() {
    const { name } = useParams();
    const users = useSelector((state) => state.users);
    const user = users.find((user) => user.name === name);

    return (
        <div>
            {user ? (
                <ul>
                    <li style={{ color: "red" }}>User {user.id}:</li>
                    <li>{user.name}</li>
                    <li>{user.username}</li>
                    <li>{user.website}</li>
                </ul>
            ) : (
                <p>Loading or user not found...</p>
            )}
            <Link to={"/listUser"}>Back</Link>
        </div>
    );
}
