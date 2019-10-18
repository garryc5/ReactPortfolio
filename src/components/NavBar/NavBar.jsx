import React  from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

class NavBar extends React.Component {

  render() {
    return  (
        <nav className={styles.all}>
            <Link to='/code' className={styles.Links}>Code</Link>
        <p className={styles.name}>
            GarrettCarver
            <br/>
            Software Devloper
            <br/>
            <Link to='/' className={styles.Links}>Home</Link>
        </p>
            <Link to='/photos' className={styles.Links}>Photos</Link>
        </nav>
    )
}
}
export default NavBar;