import React  from 'react';
import styles from './AboutMe.module.css';

class AboutMe extends React.Component {
  state = {}

  render() {
    return  (
        <div className={styles.AboutMe}>
            <p className={styles.intro}>
            I’m a former art student turned software engineer. I love the development process, from making captivating design to incorporating high functionality. I enjoy finding solutions to complex problems, while gaining new perspectives from others. 
            </p>
            <div className={styles.external}>  
            <a href='https://docs.google.com/document/d/1vjvcwD4YIVnebQOwyHk4aTQYCiZBHiYNFTSlnPo5vXQ/' target='blank' className={styles.Links}>Resume</a>
            <a href='https://www.linkedin.com/in/garrettcarver-software-engineer/' target='blank' className={styles.Links}>Linkedin</a>
            <a href='https://github.com/garryc5' target='blank' className={styles.Links}>GitHub</a>
        </div>
        </div>
    )
}
}
export default AboutMe;