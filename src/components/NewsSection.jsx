import React from "react";
import { Link } from "react-router-dom";


const NewsSection = ({ title, news, loading }) => {
  return (
    <section className="mb-8">
      <h2 className="font-jameel-noori text-3xl mb-6 border-r-4 border-red-600 h-12 pr-4">
        {title}
      </h2>

      {/* Show skeleton while loading */}
      {loading ? (
        <NewsSectionSkeleton />
      ) : (
        news.slice(0,2).map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Link to={`/post/${item.slug}`}>
              <img
                loading="lazy"
                src={item.image}
                alt=""
                className="w-full h-auto object-cover rounded-lg"
              />
              <h3 className="font-jameel-noori text-[20px] mt-2 mb-4">
                {item.title}
              </h3>
              <p className="font-jameel-noori text-[15px] leading-[2.5rem]">
                {item.content.substring(0, 150)}...
              </p>
            </Link>
          </div>
        ))
      )}

      <Link className="rtl w-full text-center block text-red-500 underline text-xl">
        See More
      </Link>
    </section>
  );
};


const NewsSectionSkeleton = () => {
  return (
    <>
      <section className="mb-8 bg-white">
        {/* <h2 className="bg-gray-300 animate-pulse h-12 rounded mb-6 pr-4"></h2> */}
        
        <div className="bg-gray-200 animate-pulse shadow-md rounded-lg p-4 mb-4">
          <div className="bg-gray-300 animate-pulse w-full h-48 rounded-lg"></div>
          <h3 className="bg-gray-300 animate-pulse h-6 mt-2 mb-4 rounded"></h3>
          <p className="bg-gray-300 animate-pulse h-12 leading-[2.5rem] rounded"></p>
        </div>
        
        <div className="bg-gray-200 animate-pulse shadow-md rounded-lg p-4 mb-4">
          <div className="bg-gray-300 animate-pulse w-full h-48 rounded-lg"></div>
          <h3 className="bg-gray-300 animate-pulse h-6 mt-2 mb-4 rounded"></h3>
          <p className="bg-gray-300 animate-pulse h-12 leading-[2.5rem] rounded"></p>
        </div>
      
        {/* <Link className="bg-gray-300 animate-pulse h-8 w-full text-center block text-red-500 underline text-xl rounded"></Link> */}
      </section>
    </>
  );
};



export default NewsSection;