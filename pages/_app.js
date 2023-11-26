import Layout from "../components/layout/layout";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/regular.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";
import "@fortawesome/fontawesome-free/css/brands.min.css";
import { useState } from "react";
import DarkModeToggle from "../components/layout/DarkModeToggle";


function MyApp({ Component, pageProps }) {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [calculatedZoom, setCalculatedZoom] = useState(null);
  const [isPhoneMode, setPhoneMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    // Lógica adicional para aplicar o modo noturno/diurno ao seu aplicativo
  };

  return (
    <UserProvider>
      <Layout isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} calculatedZoom={calculatedZoom} setCalculatedZoom={setCalculatedZoom} isPhoneMode={isPhoneMode} setPhoneMode={setPhoneMode}>
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Component {...pageProps} isDarkMode={isDarkMode} isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} calculatedZoom={calculatedZoom} setCalculatedZoom={setCalculatedZoom} isPhoneMode={isPhoneMode} setPhoneMode={setPhoneMode} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
