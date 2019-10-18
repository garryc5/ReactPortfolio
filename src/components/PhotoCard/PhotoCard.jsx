import React  from 'react';
import styles from './PhotoCard.module.css';

class PhotoCard extends React.Component {

  render() {
    return  (
        
            <a href={this.props.img} target='blank'><img className={styles.img} src={`${this.props.img}`} alt="opps"/></a> 
    )
}
}
export default PhotoCard;