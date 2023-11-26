import styles from "../components/homepage/homepage.module.css";
import Link from "next/link";
import CustomCursor from "../components/cursor/customCursor";
import Image from "next/image";

function HomePage(props) {
  const { isDarkMode } = props;

  // Determine a cor de fundo com base na condição
  const backgroundColor = isDarkMode ? "#F5F5DC" : "#232121"; // Substitua com as cores desejadas
  const color = isDarkMode ? "#232121" : "#ffffff";

  // Crie o objeto de estilo
  const containerStyle = {
    backgroundColor: backgroundColor,
    color: color,
  };

  return (
    <div className={styles.container} style={containerStyle}>
      <CustomCursor />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.name} style={{ color: color }}>
          Fabio Mesquita
        </h1>
        <h2 className={styles.job} style={{ color: color }}>
          Backend & AI Developer
        </h2>
        <div className={styles.buttonContainer}>
          <Link
            className={styles.button}
            style={{ color: color }}
            href="/aboutMe"
          >
            About Me!
          </Link>
        </div>
      </div>
      {/*
      <div className={styles.content}>
          <Image
            src="/bg1.jpg"
            alt="Sua Foto"
            width={200}
            height={200}
            className={styles.photo}
          />
  </div>*/}
    </div>
  );
}

export default HomePage;

// export async function getStaticProps() {
//     return ""
// }
