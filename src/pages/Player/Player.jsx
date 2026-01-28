import React, { useEffect, useState } from "react";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results?.[0] || {}))
      .catch(console.error);
  }, [id]);

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center gap-5 text-white">

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/90 to-black" />

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 z-10
                   rounded-full bg-black/60 backdrop-blur-md p-3
                   transition hover:bg-white/20 hover:scale-110"
      >
        <img src={back_arrow_icon} alt="Back" className="w-5" />
      </button>

      {/* Video */}
      <div className="relative z-10 w-[92%] max-w-6xl aspect-video
                      overflow-hidden rounded-xl
                      shadow-[0_30px_60px_rgba(0,0,0,0.85)]">
        <iframe
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title="Trailer"
          allowFullScreen
          className="w-full h-full border-none"
        />
      </div>

      {/* Info */}
      <div className="relative z-10 w-[92%] max-w-6xl
                      flex items-center justify-between
                      text-sm text-gray-400">

        <span>{apiData.published_at?.slice(0, 10)}</span>

        <span className="text-white font-medium truncate max-w-[60%] text-center">
          {apiData.name}
        </span>

        <span className="uppercase tracking-wide">
          {apiData.type}
        </span>
      </div>
    </div>
  );
};

export default Player;
