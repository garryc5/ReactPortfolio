import React  from 'react';
import styles from './NavBar.module.css';

class NavBar extends React.Component {
  state = {}

  render() {
    return  (
        <nav className={styles.all}>
            <p>
                GarrettCarver
                <br/>
                Software Devloper
            </p>
        </nav>
    )
}
}
export default NavBar;