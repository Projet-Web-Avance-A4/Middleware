import React from 'react';
import ComponentList from '../components/componentList';

const fetchComponents = async (): Promise<string[]> => {
  const res = await fetch('http://localhost:3000/api/components');
  const data = await res.json();
  return data.components;
};

const DownloadPage = async () => {
  const components = await fetchComponents();
  return <ComponentList components={components} />;
};

export default DownloadPage;
