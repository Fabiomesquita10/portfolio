// Footer.jsx
import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = (props) => {
  const { backgroundColor } = props;
  const { isPhoneMode } = props;

  return (
    <footer className={
        isPhoneMode ? styles.footerPhone : styles.footer
      } style={{ backgroundColor }}>
      <div className={styles.buttonContainer}>
        <Link href="https://github.com/Fabiomesquita10">
          <Image
            src="/fa-icon/github.png"
            alt="GitHub Icon"
            width={50}
            height={50}
            className={styles.icon}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/fabio-mesquitaa/">
          <Image
            src="/fa-icon/linkedin.png"
            alt="LinkedIn Icon"
            width={50}
            height={50}
            className={styles.icon}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
