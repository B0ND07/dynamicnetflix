import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"; 
import {MdChevronLeft, MdChevronRight} from "react-icons/md"

function Row({ title, fetchUrl, rowID }) {
  const [movies, setMovies] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [like, setlike] = useState(false);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);
  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };


  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">

        <MdChevronLeft onClick={slideLeft} className="bg-white rounded-full absolute  opacity-50 hover:opacity-100 cursor-pointer z-10 left-0 hidden group-hover:block" size={40}/>

        <div id={"slider" + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((display, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
              onMouseEnter={() => setHoveredMovie(id)}
              onMouseLeave={() => setHoveredMovie(null)}
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${display.backdrop_path}`}
                alt={display.title}
              />
              {hoveredMovie === id && (
                <div className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-100 text-white">
                  <p className="absolute top-4 left-6 text-gray-300" >
                    {like ? (
                      <FaHeart />
                    ) : (
                      <FaRegHeart />
                    )}
                  </p>
                  <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {display.title || "No Title"}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <MdChevronRight onClick={slideRight} className="bg-white rounded-full absolute  opacity-50 hover:opacity-100 cursor-pointer z-10 right-0 hidden group-hover:block" size={40}/>
      </div>
    </div>
  );
}

export default Row;
