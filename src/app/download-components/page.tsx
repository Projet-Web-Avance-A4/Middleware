"use client";

import React, { useState, useEffect } from 'react';
import Header from "../components/header";
import { NextUIProvider } from "@nextui-org/system";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button } from '@nextui-org/button';
import Link from "next/link";
import CustomCard from '../components/customcard';

const DownloadComponentsPage: React.FC = () => {
  const [files, setFiles] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/components')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data.downloadableFiles)) {
          setFiles(data.downloadableFiles);
        } else {
          throw new Error('Response data is not an array');
        }
      })
      .catch(error => console.error('Error fetching files:', error));
  }, []);

  return (
    <NextUIProvider className="h-screen bg-beige">
      <Header />
      <div className="container mx-auto">
        <h1 className="font-bold text-large text-black text-center">Téléchargement des Composants</h1>
        <ul>
          {files.map(file => (
            <li className='place-self-center' key={file.filename}>
              <CustomCard title={file.filename} href={`/api/components?filename=${encodeURIComponent(file.filename)}`} btnText={'Télécharger'} />
            </li>
          ))}
        </ul>
      </div>
    </NextUIProvider >
  );
};

export default DownloadComponentsPage;
