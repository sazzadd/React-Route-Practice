import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './users-style.css';

const Users = () => {

    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h1>Our Users{users.length}</h1>
            <div className='user-container'>
                {
                    users.map((user) => <User key={user.id} user={user}></User>)
                }
            </div>

        </div>
    );
};

export default Users;