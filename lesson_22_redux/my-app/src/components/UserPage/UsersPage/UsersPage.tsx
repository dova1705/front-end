import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import User from './types/User';

export default function UsersPage(): JSX.Element {
    const [users, setUsers] = useState<User[]>([]);
    async function loadUsers(): Promise<void> {
        const res = await fetch(`https://fakestoreapi.com/users`);
        const arr = await res.json();
        setUsers(arr);
    }
    useEffect(() => {
        loadUsers();
    },[]);
    return(
        <div>
            <ul>
                {users.map((user) => (
                    <li style={{ border: 'solid black 2px', margin: '10px' }} key={user.id}>
                        <div>Ник: {user.username}</div>
                        <div>Имя, фамилия: {user.name.firstname} {user.name.lastname}</div>
                        <div>Телефон: {user.phone}</div>
                        <div>эл.почта: {user.email}</div>
                        <div>zip-code: {user.address.zipcode}</div>
                        <div>Город: {user.address.city}</div>
                        <Link to={String(user.id)}>к пользователю</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}