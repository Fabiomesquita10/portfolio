import { Fragment } from 'react';

import DarkModeToggle from './DarkModeToggle';
import MainHeader from './main-header';
import styles from "./layout.module.css";

function Layout(props) {

  return (
    <Fragment>
      <MainHeader />
      <main className={styles.content}>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
