import React from "react";
import Xylophone from "../../Components/Xylophone/Xylophone";
import SheetMusic from "../../Components/SheetMusic/SheetMusic";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="main-page">
      <SheetMusic />
      <Xylophone />
      <p>A xylophone for Aaron</p>
    </div>
  );
};

export default MainPage;
