import React, { useState } from "react";
import song1 from "../../assets/Songs/Twinkle_Twinkle_Little_Star.png";
import song2 from "../../assets/Songs/Happy_birthday_Part_1.png";
import song3 from "../../assets/Songs/Happy_birthday_Part_2.png";
import Arrow from "../../assets/Icons/arrow.svg";
import "./SheetMusic.scss";

// Define the songs with their image sources
const songs = [{ imageSrc: song1 }, { imageSrc: song2 }, { imageSrc: song3 }];

// Create a function to extract the title from the file name
const getTitleFromFileName = (fileName) => {
  return fileName.split("/").pop().split(".")[0].replace(/_/g, " "); // Remove the extension and replace underscores with spaces
};

const SheetMusic = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current song index

  // Function to go to the next song
  const nextSong = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  // Function to go to the previous song
  const prevSong = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="sheet-music">
      <div className="sheet-music__current">
        <h3 className="sheet-music__title">
          🎶{getTitleFromFileName(songs[currentIndex].imageSrc)} 🎶
        </h3>
        <img
          src={songs[currentIndex].imageSrc}
          alt={getTitleFromFileName(songs[currentIndex].imageSrc)}
          className="sheet-music__image"
        />
      </div>
      <div className="sheet-music__buttons">
        <button className="sheet-music__prev-button" onClick={prevSong}>
          <img src={Arrow} alt="Previous" className="rotate-arrow" />
        </button>
        <button className="sheet-music__next-button" onClick={nextSong}>
          <img src={Arrow} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default SheetMusic;
