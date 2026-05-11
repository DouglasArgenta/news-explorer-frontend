import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../../pages/SavedNews";

import LoginPopup from "../LoginPopup/LoginPopup";
import RegisterPopup from "../RegisterPopup/RegisterPopup";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

  function handleLoginClick() {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  }

  function handleRegisterClick() {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  }

  function closeAllPopups() {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setIsInfoTooltipOpen(false);
  }

  function handleRegisterSuccess() {
    setIsRegisterOpen(false);
    setIsInfoTooltipOpen(true);
  }

  function handleLoginSuccess() {
    setIsLoggedIn(true);
    closeAllPopups();
  }

  return (
    <>
      <Header onLoginClick={handleLoginClick} isLoggedIn={isLoggedIn} />

      <Routes>
        <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />

        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>

      <Footer />

      <LoginPopup
        isOpen={isLoginOpen}
        onClose={closeAllPopups}
        onSwitch={handleRegisterClick}
        onLogin={handleLoginSuccess}
      />

      <RegisterPopup
        isOpen={isRegisterOpen}
        onClose={closeAllPopups}
        onSwitch={handleLoginClick}
        onRegister={handleRegisterSuccess}
      />

      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closeAllPopups}
        onLoginClick={handleLoginClick}
      />
    </>
  );
}

export default App;
