import React, { useState } from 'react';
import './../../index.css';
import './../../App.css';
import { Search } from 'lucide-react';
import Recipecard from '../Recipecard';
import "../lib/utils.js"

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      // Redirect to YouTube search with the entered term
      window.location.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      {/* Search Bar */}
      <form onSubmit={handleSearch}>
        <label className="input shadow-md flex items-center gap-2">
          <Search size={24} />
          <input
            type="text"
            className="text-sm md:text-md grow"
            placeholder="What you want to cook today"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </form>

      {/* Recommended Recipes */}
      <p className="font-bold text-3xl md:text-5xl mt-4">Recommended Recipes</p>
      <p className="text-slate-500 font-semibold ml-1 text-sm tracking-tight">
        Popular choices
      </p>

      {/* Recipe Cards */}
      <Recipecard />
    </div>
  );
};

export default Homepage;
