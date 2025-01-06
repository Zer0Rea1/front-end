import React from "react";
import { Link } from "react-router-dom";

const NewsSection = ({ title, news }) => {
  return (
    <section className="mb-8">
      
      <h2 className="font-jameel-noori text-3xl mb-6 border-r-4 border-red-600 h-12 pr-4">{title}</h2>
      
      {news.map((item, index) => (
        <div
          key={index}
          className="bg-gray-200 shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow duration-300"
        >
          <Link to={`/post/${item.slug}`}>
            <img
              src={item.image}
              alt=""
              className="w-full h-auto object-cover rounded-lg"
            />
            <h3 className="font-jameel-noori text-[20px] mt-2 mb-4 ">{item.title}</h3>
            <p className="font-jameel-noori text-[15px]  leading-[2.5rem]">
              {item.content.substring(0, 150)}...
            </p>
          </Link>
        </div>
      ))}
      <Link className="rtl w-full text-center block text-red-500 underline text-xl" >See More</Link>
    </section>
  );
};

export default NewsSection;
