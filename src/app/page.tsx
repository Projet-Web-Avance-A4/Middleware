"use client";

import React from 'react';
import RegisterForm from './components/registerform';
import { NextUIProvider } from '@nextui-org/system';
import Header from './components/header';

const Register: React.FC = () => {
    return (
        <NextUIProvider className="h-screen bg-beige">
            <Header />
            <div className="container mx-auto">
                <h1 className="font-bold text-large text-black text-center">Créer un compte</h1>
                <RegisterForm />
            </div>
        </NextUIProvider>
    );
};

export default Register;
