// components/SearchContainer.js
"use client"
import React, { useState } from 'react';
import Header from './Header';
import Results from './Results';


const SearchContainer = () => {
    const [scrapedData, setScrapedData] = useState(null);

    const updateScrapedData = (data) => {
      console.log("Estableciendo datos en el estado:", data);
      setScrapedData(data);
    };

    return (
      <main className="p-10 max-w-7xl w-full mx-auto overflow-y-auto">
        <Header onUpdate={updateScrapedData} />
        <Results data={scrapedData} />
      </main>
    );
};

export default SearchContainer;
