import React  from 'react';
import styles from './PageSplit.module.css';

class NavBar extends React.Component {

  render() {
    return  (
        <div className={styles.all} onScroll={this.handleScroll}>
            <div  id='left' className={styles.d1}></div>
            <div id= 'leftReplace' className={styles.r1}>From Photographer</div>
            <div id='right' className={styles.d2}></div>
            <div id= 'rightReplace' className={styles.r2}>To Devloper</div>
        </div>
    )
}
}
export default NavBar;