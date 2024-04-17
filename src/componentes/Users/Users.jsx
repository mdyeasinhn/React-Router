import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css"
const Users = () => {

    const users = useLoaderData();

    console.log(users)
    return (
        <div>
            <h2> Our  Users {users.length}</h2>
            <p>Fantstic and vodro user</p>
            <div className="users">
                {

                    users.map(user => <User user={user} key={user.id}></User>)
                }
            </div>
        </div>
    );
};

export default Users;