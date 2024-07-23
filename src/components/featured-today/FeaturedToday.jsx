import React from "react";
import { Link } from "react-router-dom";

export const FeaturedToday = ({ data }) => {
  return (
    <>
      <span className="text-gold-500 text-2xl font-bold ">Featured today</span>
      <div class="flex overflow-x-scroll space-x-4 max-w-4xl mb-4  p-4">
        {data?.map((item, index) => (
          <div key={index} className="flex-shrink-0 cursor-pointer">
            <Link to={`/movie/${item?.id}`}>
              <div className="relative group">
                <img
                  src={item?.img}
                  alt="Image"
                  className="h-48 object-cover w-48 transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-none group-hover:backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg">Hovered Text</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
