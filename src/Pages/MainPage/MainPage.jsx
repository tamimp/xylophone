import React, { useState, useEffect } from "react";
import Xylophone from "../../Components/Xylophone/Xylophone";
import SheetMusic from "../../Components/SheetMusic/SheetMusic";
import Footer from "../../Components/Footer/Footer";
import Modal from "../../Components/Modal/Modal";
import "./MainPage.scss";

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // State for modal visibility

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Check local storage to determine if the modal should be shown
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsModalOpen(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  return (
    <div className="main-page">
      {isModalOpen && (
        <Modal
          message="Welcome to the free online xylophone! Simply click the keys to play."
          onClose={closeModal}
        />
      )}
      <SheetMusic />
      <Xylophone />
      <Footer />
    </div>
  );
};

export default MainPage;
