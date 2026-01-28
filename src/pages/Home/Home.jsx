import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero relative">
        <img
          src={hero_banner}
          alt="movie-banner image"
          className="banner-img w-full [-webkit-mask-image:linear-gradient(to_right,transparent,black_75%)] 
            mask-[linear-gradient(to_right,transparent,black_75%)]"
        />

        <div className="hero-caption absolute w-full pl-[6%] bottom-0">
          <img
            src={hero_title}
            alt="movie title"
            className="caption-img w-[90%] max-w-105 mb-7.5"
          />

          <p className="max-w-175 text-[17px] mb-5">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>

          <div className="hero-btn flex gap-2.5 mb-12.5">
            <button className="btn hover:bg-[#ffffffbf] border-0 outline-none inline-flex items-center gap-2 px-5 py-2 text-[15px] font-semibold text-black bg-white rounded-sm cursor-pointer">
              <img className="w-5 h-5" src={play_icon} alt="Play Button" />
              Play
            </button>

            <button className="dark-btn border-0 hover:bg-[#6d6d6e66] outline-none inline-flex items-center gap-2 px-5 py-2 text-[15px] font-semibold text-white bg-[#6d6d6eb3] rounded-sm cursor-pointer">
              <img className="w-5 h-5" src={info_icon} alt="More Info Button" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards pl-[6%]">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
