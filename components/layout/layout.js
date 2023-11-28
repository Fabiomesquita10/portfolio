import { Fragment } from 'react';

import DarkModeToggle from './DarkModeToggle';
import MainHeader from './main-header';
import styles from "./layout.module.css";
import Footer from './footer';

function Layout(props) {
  const { isMenuOpen } = props;
  const { setMenuOpen } = props;
  const { calculatedZoom } = props;
  const { setCalculatedZoom } = props;
  const { isPhoneMode } = props;
  const { setPhoneMode } = props;

  return (
    <Fragment>
      <MainHeader isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} calculatedZoom={calculatedZoom} setCalculatedZoom={setCalculatedZoom} isPhoneMode={isPhoneMode} setPhoneMode={setPhoneMode} />
      <main className={styles.content}>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
