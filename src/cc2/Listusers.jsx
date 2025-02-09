import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function List() {
    const users = useSelector((state) => state.users); // Get users from Redux state

    return (
        <div>
            {users.length > 0 ? (
                users.map((user, id) => (
                    <Link to={`/users/${user.name}`} key={id}>
                        <ul>
                            <li>{user.name}</li>
                        </ul>
                    </Link>
                ))
            ) : (
                <p>No users available.</p>
            )}
            <Link to={"/home"}>Back Home</Link>
        </div>
    );
}
