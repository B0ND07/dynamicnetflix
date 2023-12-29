import React, { useEffect, useState } from "react";
import { UserAuth } from "./context/AuthContext";
import { db } from "./firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

function Savedshows() {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  const [hoveredMovie, setHoveredMovie] = useState(null);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieID = doc(db, "users", `${user?.email}`);

  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieID, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">My Saved Shows</h2>
      <div className="relative flex items-center group">
        <div className="w-full h-full relative ml-28">
          {movies.map((display, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
              onMouseEnter={() => setHoveredMovie(id)}
              onMouseLeave={() => setHoveredMovie(null)}
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${display.img}`}
                alt={display.title}
              />
              {hoveredMovie === id && (
                <div className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-100 text-white">
                  <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {display.title || "No Title"}
                  </p>
                  <p
                    onClick={() => deleteShow(display.id)}
                    className="absolute text-gray-300 top-4 right-4"
                  >
                    <AiOutlineClose />
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Savedshows;
