// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('nature');

  const fetchImages = async (searchQuery) => {
    try {
      const response = await axios.get('https://api.pexels.com/v1/search', {
        headers: {
          Authorization: process.env.REACT_APP_PEXELS_API_KEY,
        },
        params: { query: searchQuery, per_page: 30 },
      });
      setImages(response.data.photos);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchImages(query);
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-center text-2xl font-bold py-4">Pexels Clone</h1>
      <SearchBar onSearch={(q) => setQuery(q)} />
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
