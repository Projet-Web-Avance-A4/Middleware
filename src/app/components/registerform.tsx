"use client";

import axios from 'axios';
import React, { useState } from 'react';

const RegisterForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:3001/api/register', {
            username,
            email,
            password
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status >= 200 && response.status < 300) {
            console.log('User created successfully');
            // Handle successful registration
        } else {
            console.log('Failed to create user');
            // Handle registration failure
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label className=' text-black'>Pseudo</label>
                <input
                    className=' text-black'
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label className=' text-black'>Email</label>
                <input
                    className=' text-black'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label className=' text-black'>Mot de passe</label>
                <input
                    className=' text-black'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className=' text-black' type="submit">Créer</button>
        </form>
    );
};

export default RegisterForm;
