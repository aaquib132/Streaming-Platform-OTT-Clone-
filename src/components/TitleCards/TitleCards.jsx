import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category || "now_playing"
      }?language=en-US&page=12`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results || []))
      .catch(console.error);
  }, [category]);

  return (
    <section className="px-[4%] mt-12">
      {/* Section Title */}
      <h2 className="mb-4 text-lg font-semibold text-white tracking-wide">
        {title || "Popular on Netflix"}
      </h2>

      {/* Cards */}
      <div
        className="group flex gap-4 overflow-x-auto scroll-smooth
                   pb-4 [&::-webkit-scrollbar]:hidden"
      >
        {apiData.map((card) => (
          <Link
            to={`/player/${card.id}`}
            key={card.id}
            className="relative min-w-[180px] sm:min-w-[220px] md:min-w-[260px] lg:min-w-[300px]
                       rounded-lg overflow-hidden
                       transition-transform duration-300
                       hover:scale-105 hover:z-10"
          >
            {/* Image */}
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.original_title}
              className="h-full w-full object-cover"
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0
                         bg-gradient-to-t from-black/90 via-black/40 to-transparent
                         opacity-0 group-hover:opacity-100
                         transition-opacity duration-300"
            />

            {/* Info */}
            <div
              className="absolute bottom-0 left-0 right-0
                         p-3 opacity-0 group-hover:opacity-100
                         transition-all duration-300 translate-y-4
                         group-hover:translate-y-0"
            >
              <p className="text-sm font-semibold text-white truncate">
                {card.original_title}
              </p>

              <div className="mt-1 flex items-center gap-2 text-xs text-gray-300">
                <span className="rounded bg-black/60 px-2 py-0.5">
                  ⭐ {card.vote_average?.toFixed(1)}
                </span>
                <span>{card.release_date?.slice(0, 4)}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TitleCards;
