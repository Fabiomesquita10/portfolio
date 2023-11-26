import styles from "../components/homepage/homepage.module.css";
import CustomCursor from "../components/cursor/customCursor";
import Image from "next/image";
import ArrowButton from "../components/buttons/ArrowButton";

function HomePage(props) {
  const { isDarkMode } = props;
  const { isMenuOpen } = props;
  const { calculatedZoom } = props;
  const { isPhoneMode } = props;

  // Determine a cor de fundo com base na condição
  const backgroundColor = isDarkMode ? "#F5F5DC" : "#232121"; // Substitua com as cores desejadas
  const color = isDarkMode ? "#232121" : "#ffffff";

  const containerStyle = {
    backgroundColor: backgroundColor,
    color: color,
  };

  return (calculatedZoom < 250) | (calculatedZoom >= 250) ? (
    <div className={styles.container} style={{ backgroundColor, color }}>
      <CustomCursor />
      <div className={styles.overlay}></div>
      <div
        className={
          (calculatedZoom > 250) | isPhoneMode
            ? styles.content_zoomed
            : styles.content_unzoomed
        }
      >
        <div className={styles.imageContainer}>
          {calculatedZoom <= 150 ? (
            <Image
              src="/profile_pic.png"
              alt="Descrição da imagem"
              width={400} // Ajuste conforme necessário
              height={350} // Ajuste conforme necessário
            />
          ) : null}
          {(calculatedZoom > 150) & (calculatedZoom <= 200) ? (
            <Image
              src="/profile_pic.png"
              alt="Descrição da imagem"
              width={280} // Ajuste conforme necessário
              height={240} // Ajuste conforme necessário
            />
          ) : null}
          {calculatedZoom > 200 ? (
            <Image
              src="/profile_pic.png"
              alt="Descrição da imagem"
              width={170} // Ajuste conforme necessário
              height={150} // Ajuste conforme necessário
            />
          ) : null}
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.name}>Fabio Mesquita</h1>
          <h2 className={styles.job} style={{ color }}>
            Backend & AI Developer
          </h2>
          <div>
            <ArrowButton color={color}/>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default HomePage;