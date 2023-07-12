import styles from "../components/Homepage/homepage.module.css";
import Link from "next/link";

function HomePage(props) {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <img className={styles.backgroundImage} src="bg5.jpg" alt="Background" />
      <div className={styles.content}>
        <h1 className={`${styles.name} name`}>Fabio Mesquita</h1>
        <h2 className={`${styles.job} job`}>Backend Developer</h2>
        <div className={styles.buttonContainer}>
          <Link className={styles.button} href="/aboutMe">
            About Me!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

// export async function getStaticProps() {
//     return ""
// }
