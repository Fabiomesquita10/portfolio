import styles from "../components/homepage/homepage.module.css";
import CustomCursor from "../components/cursor/customCursor";
import Image from "next/image";
import ArrowButton from "../components/buttons/ArrowButton";
import { Avatar } from "@mui/material";
import Footer from "../components/layout/footer";

function HomePage(props) {
  const { isDarkMode } = props;
  const { isMenuOpen } = props;
  const { calculatedZoom } = props;
  const { isPhoneMode } = props;

  // Determine a cor de fundo com base na condição
  const backgroundColor = isDarkMode ? "#F5F5DC" : "#1E1E1E"; // Substitua com as cores desejadas
  const color = isDarkMode ? "#1E1E1E" : "#ffffff";

  const containerStyle = {
    backgroundColor: backgroundColor,
    color: color,
  };

  return (calculatedZoom < 250) | (calculatedZoom >= 250) ? (
    <div
      className={styles.container}
      style={{
        height: isPhoneMode | (calculatedZoom < 250) ? "100vh" : "200vh",
        backgroundColor,
        color,
      }}
    >
      <CustomCursor />
      <div className={styles.overlay}></div>
      <div
        className={
          (calculatedZoom > 250) | isPhoneMode
            ? styles.content_zoomed
            : styles.content_unzoomed
        }
      >
        {calculatedZoom < 150 ? (
          <Avatar
            alt="Remy Sharp"
            src="/profile_pic.png"
            sx={{ width: 250, height: 250 }}
            className={styles.avatar}
          />
        ) : null}
        <div className={styles.imageContainer}>
          {(calculatedZoom > 150) & (calculatedZoom <= 200) ? (
            <Avatar
              alt="Remy Sharp"
              src="/profile_pic.png"
              sx={{ width: 200, height: 200 }}
              className={styles.avatar}
            />
          ) : null}
          {calculatedZoom > 200 ? (
            <Avatar
              alt="Remy Sharp"
              src="/profile_pic.png"
              sx={{ width: 150, height: 150 }}
              className={styles.avatar}
            />
          ) : null}
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.name}>Fabio Mesquita</h1>
          <h2 className={styles.job} style={{ color }}>
            Backend & AI Developer
          </h2>
          <div className={styles.button}>
            <ArrowButton color={color} />
          </div>
        </div>
      </div>
      <Footer backgroundColor={backgroundColor} isPhoneMode={isPhoneMode} />
    </div>
  ) : null;
}

export default HomePage;
