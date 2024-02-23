import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ArchiveContext = createContext();

export const ArchiveProvider = ({ children }) => {
  const [result, setResult] = useState(null);

  const checkArchive = async (url, timestamp) => {
    const apiUrl = `http://archive.org/wayback/available?url=${url}${timestamp ? `&timestamp=${timestamp}` : ''}`;
    try {
      const response = await axios.get(apiUrl);
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching archive data:", error);
      setResult(null);
    }
  };

  return (
    <ArchiveContext.Provider value={{ result, checkArchive }}>
      {children}
    </ArchiveContext.Provider>
  );
};
