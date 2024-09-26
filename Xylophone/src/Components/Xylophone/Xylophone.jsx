import React from "react";
import "./xylophone.scss";
import DoSound from "../../assets/Sounds/Do.mp3";
import ReSound from "../../assets/Sounds/Re.mp3";
import MiSound from "../../assets/Sounds/Mi.mp3";
import FaSound from "../../assets/Sounds/Fa.mp3";
import SolSound from "../../assets/Sounds/Sol.mp3";
import LaSound from "../../assets/Sounds/La.mp3";
import SiSound from "../../assets/Sounds/Si.mp3";
import Do2Sound from "../../assets/Sounds/Do2.mp3";

const Xylophone = () => {
  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <div className="xylophone">
      <div
        className="xylophone__bar xylophone__bar--do"
        onMouseEnter={() => playSound(DoSound)}
      >
        Do
      </div>
      <div
        className="xylophone__bar xylophone__bar--re"
        onMouseEnter={() => playSound(ReSound)}
      >
        Re
      </div>
      <div
        className="xylophone__bar xylophone__bar--mi"
        onMouseEnter={() => playSound(MiSound)}
      >
        Mi
      </div>
      <div
        className="xylophone__bar xylophone__bar--fa"
        onMouseEnter={() => playSound(FaSound)}
      >
        Fa
      </div>
      <div
        className="xylophone__bar xylophone__bar--sol"
        onMouseEnter={() => playSound(SolSound)}
      >
        Sol
      </div>
      <div
        className="xylophone__bar xylophone__bar--la"
        onMouseEnter={() => playSound(LaSound)}
      >
        La
      </div>
      <div
        className="xylophone__bar xylophone__bar--si"
        onMouseEnter={() => playSound(SiSound)}
      >
        Si
      </div>
      <div
        className="xylophone__bar xylophone__bar--do2"
        onMouseEnter={() => playSound(Do2Sound)}
      >
        Do
      </div>
    </div>
  );
};

export default Xylophone;
