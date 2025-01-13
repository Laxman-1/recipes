import React from 'react';
import { Heart, HeartPulse, List, Soup } from 'lucide-react';

const Recipecard = () => {
  const redirectToYouTube = (recipeName) => {
    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(recipeName)}`;
    window.open(youtubeSearchUrl, '_blank'); // Opens in a new tab
  };

  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
      {/* First Recipe */}
      <div className="flex flex-col bg-[#ecf7d4] rounded-md overflow-hidden p-3 relative">
        <a href="#" className="relative h-32">
          <img
            src="/1.jpg"
            alt="recipe img"
            className="rounded-md w-full h-full object-cover cursor-pointer"
          />
          <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
            <Soup size={16} /> 4 Servings
          </div>
          <div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer">
            <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />
          </div>
        </a>
        <div className="flex flex-col mt-3">
          <button
            onClick={() => redirectToYouTube('Roasted Chicken')}
            className="font-bold tracking-wide text-blue-600 hover:underline cursor-pointer text-left"
          >
            Roasted Chicken
          </button>
          <p className="my-2 text-sm text-slate-600">Turkish Kitchen</p>
          <div className="flex gap-2 mt-auto">
            <div className="flex items-center gap-1 bg-[#d6f497] p-1 rounded-md">
              <HeartPulse size={16} />
              <span className="text-sm tracking-tighter font-semibold">Gluten-free</span>
            </div>
            <div className="flex items-center gap-1 bg-[#d6f497] p-1 rounded-md">
              <HeartPulse size={16} />
              <span className="text-sm tracking-tighter font-semibold">Heart-healthy</span>
            </div>
            <div className="flex items-center gap-1 bg-[#d6f497] p-1 rounded-md">
              <List size={16} />
              <span className="text-sm tracking-tighter font-semibold">Recipe</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Recipe */}
      <div className="flex flex-col bg-[#ecf7d4] rounded-md overflow-hidden p-3 relative">
        <a href="#" className="relative h-32">
          <img
            src="/1muttoncurry.jpg"
            alt="recipe img"
            className="rounded-md w-full h-full object-cover cursor-pointer"
          />
          <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
            <Soup size={16} /> 4 Servings
          </div>
          <div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer">
            <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />
          </div>
        </a>
        <div className="flex flex-col mt-3">
          <button
            onClick={() => redirectToYouTube('Mutton Curry')}
            className="font-bold tracking-wide text-blue-600 hover:underline cursor-pointer text-left"
          >
            Mutton Curry
          </button>
          <p className="my-2 text-sm text-slate-600">Nepali Kitchen</p>
          <div className="flex gap-2 mt-auto">
            <div className="flex items-center gap-1 bg-[#d6f497] p-1 rounded-md">
              <HeartPulse size={16} />
              <span className="text-sm tracking-tighter font-semibold">Gluten-free</span>
            </div>
            <div className="flex items-center gap-1 bg-[#d6f497] p-1 rounded-md">
              <HeartPulse size={16} />
              <span className="text-sm tracking-tighter font-semibold">Heart-healthy</span>
            </div>
            <div className="flex items-center gap-1 bg-[#d6f497] p-1 rounded-md">
              <List size={16} />
              <span className="text-sm tracking-tighter font-semibold">Recipe</span>
            </div>
          </div>
        </div>
      </div>

      {/* Third Recipe */}
      <div className="flex flex-col bg-[#ecf7d4] rounded-md overflow-hidden p-3 relative">
        <a href="#" className="relative h-32">
          <img
            src="/2.jpg"
            alt="recipe img"
            className="rounded-md w-full h-full object-cover cursor-pointer"
          />
          <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
            <Soup size={16} /> 7 Servings
          </div>
          <div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer">
            <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />
          </div>
        </a>
        <div className="flex flex-col mt-3">
          <button
            onClick={() => redirectToYouTube('Pizza')}
            className="font-bold tracking-wide text-blue-600 hover:underline cursor-pointer text-left"
          >
            Pizza
          </button>
          <p className="my-2 text-sm text-slate-600">Italian Kitchen</p>
          <div className="flex gap-2 mt-auto">
            <div className="flex items-center gap-1 bg-[#d6f497] p-1 rounded-md">
              <HeartPulse size={16} />
              <span className="text-sm tracking-tighter font-semibold">Cheese Lover</span>
            </div>
            <div className="flex items-center gap-1 bg-[#d6f497] p-1 rounded-md">
              <HeartPulse size={16} />
              <span className="text-sm tracking-tighter font-semibold">Baked Fresh</span>
            </div>
            <div className="flex items-center gap-1 bg-[#d6f497] p-1 rounded-md">
              <List size={16} />
              <span className="text-sm tracking-tighter font-semibold">Recipe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipecard;
