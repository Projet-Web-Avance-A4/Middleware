"use client";

import React, { useState } from 'react';
import RegisterForm from './components/registerForm';
import ConnectionForm from './components/connectionForm';
import { NextUIProvider } from '@nextui-org/system';
import Header from './components/header';
import { Button } from '@nextui-org/button';

const Register: React.FC = () => {

    const [connectPage, setConnectPage] = useState<boolean>(true)

    const changeForm = () => {
        setConnectPage(!connectPage)
    }

    return (
        <NextUIProvider className="h-screen bg-beige">
            <Header />
            {!connectPage &&
                <div>
                    <RegisterForm changeForm={changeForm} />
                </div>
            }
            {connectPage &&
                <div>
                    <ConnectionForm changeForm={changeForm} />
                </div>
            }
        </NextUIProvider>
    );
};

export default Register;
