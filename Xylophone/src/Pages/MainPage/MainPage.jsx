import React from "react";
import Xylophone from "../../Components/Xylophone/Xylophone";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="main-page">
      <h1>Welcome to the Xylophone App</h1>
      <section className="xylophone-section">
        <Xylophone />
      </section>
    </div>
  );
};

export default MainPage;
