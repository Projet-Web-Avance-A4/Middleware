"use client";

import React, { useState, useEffect } from 'react';

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
    <div>
      <h1>Téléchargement des Composants</h1>
      <ul>
        {files.map(file => (
          <li key={file.filename}>
            <a href={`/api/components?filename=${encodeURIComponent(file.filename)}`} download>
              {file.filename}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DownloadComponentsPage;
