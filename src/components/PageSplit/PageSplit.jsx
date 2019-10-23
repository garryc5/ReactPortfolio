import React  from 'react';
import styles from './PageSplit.module.css';
import p1 from '../photos/1.jpg'
import p2 from '../photos/pr.png'
class NavBar extends React.Component {

  render() {
    return  (
        <div className={styles.all}>
            <div  id='left' className={styles.d1}>
                <div id="flash" className={styles.flash}></div>
                <img className={styles.img} src={p2} alt="test"/></div>
            <div id= 'leftReplace' className={styles.r1}>From Photographer</div>
            <div id='right' className={styles.d2}>
                <img className={styles.img} src={p1} alt="opps"/>
            </div>
            <div id= 'rightReplace' className={styles.r2}>To Devloper</div>
        </div>
    )
}
}
export default NavBar;