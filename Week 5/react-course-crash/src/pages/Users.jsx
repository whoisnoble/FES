
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from '../components/User'

function Users() {
    const [user, setUser] = useState([]);
    const { id } = useParams();

    async function getUser() {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(data);
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            {
                <User
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    username={user.username}
                />
            }
        </div>
    )
}

export default Users;