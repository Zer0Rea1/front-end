import React from 'react';
import { Link } from 'react-router-dom';
import Brand from '../assets/96news.jpg';
const LatestNewsSidebar = ({latestNews}) => {
  return (
    <>
    <h2 className="font-jameel-noori text-[25px] mb-4 border-r-4 border-red-600 h-12 pr-4">تازہ ترین خبریں</h2>
    <div className="bg-gray-200 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 sticky top-2">
      
      
      <ul className="space-y-2">
        {latestNews.slice(0,5).map((item, index) => (
          <li key={index} className="font-jameel-noori text-lg border-b border-gray-200 pb-6 last:border-b-0">
            
            <Link to={`/post/${item.slug}`} className="hover:text-red-600 transition-colors duration-300">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </> 
  );
};

export default LatestNewsSidebar;

