import React from 'react';
import { Link } from 'react-router-dom';
import brand from '../assets/96news.jpg';

const Header = () => {
  const toggleSearchBar = (e) => {
    const searchInput = document.querySelector('.search-input');
    searchInput.classList.toggle('hidden');
    searchInput.focus();
    
    // Automatically focus on the input when it appears
  };

  return (
    <header className="bg-red-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-3xl font-bold font-jameel-noori mb-4 md:mb-0">
          <img src={brand} alt="96 News HD" className="h-12" />
        </Link>
        <nav>
          <ul className="flex flex-wrap justify-center space-x-2 md:space-x-4 items-center">
            <li className="p-3 cursor-pointer" onClick={toggleSearchBar}>
              <i className="fa-solid fa-magnifying-glass text-xl hover:text-red-300 transition-colors duration-300"></i>
            </li>
            <input
              type="text"
              className="search-input rtl hidden bg-red-400 border-2 border-red-700 rounded-lg px-4 py-2 text-white placeholder-gray-200 focus:outline-none focus:border-red-900 transition-all duration-300"
              placeholder="...Search"
            />
            <li>
              <button className="font-jameel-noori text-lg hover:bg-red-700 px-3 py-2 rounded">
                تازہ ترین
              </button>
            </li>
            <li>
              <button className="font-jameel-noori text-lg hover:bg-red-700 px-3 py-2 rounded">
                پاکستان
              </button>
            </li>
            <li>
              <button className="font-jameel-noori text-lg hover:bg-red-700 px-3 py-2 rounded">
                دنیا
              </button>
            </li>
            <li>
              <Link to={'/sports'} className="font-jameel-noori text-lg hover:bg-red-700 px-3 py-2 rounded">
                کھیل
              </Link>
            </li>
            <li>
              <button className="font-jameel-noori text-lg hover:bg-red-700 px-3 py-2 rounded">
                کاروبار
              </button>
            </li>
            <li>
              <button className="font-jameel-noori text-lg hover:bg-red-700 px-3 py-2 rounded">
                صحت
              </button>
            </li>
            <li>
              <button className="font-jameel-noori text-lg hover:bg-red-700 px-3 py-2 rounded">
                سائنس
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;