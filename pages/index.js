import styles from "../components/homepage/homepage.module.css";
import Link from "next/link";
import CustomCursor from "../components/cursor/customCursor";
import Image from "next/image";

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
      <div className={(calculatedZoom > 250) | isPhoneMode ? styles.content_zoomed : styles.content_unzoomed}>
        <div className={styles.imageContainer}>
          <Image
            src="/profile_pic.png"
            alt="Descrição da imagem"
            width={400} // Ajuste conforme necessário
            height={400} // Ajuste conforme necessário
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.name} style={{ color }}>
            Fabio Mesquita
          </h1>
          <h2 className={styles.job} style={{ color }}>
            Backend & AI Developer
          </h2>
          <div className={styles.buttonContainer}>
            <Link className={styles.button} style={{ color }} href="/aboutMe">
              About Me!
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default HomePage;

// export async function getStaticProps() {
//     return ""
// }
