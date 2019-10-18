import React  from 'react';
import styles from './Cards.module.css';

class PhotoCard extends React.Component {

  render() {
    return  (
        <div className={styles.card}>
        {this.props.title}
        {this.props.summery}
        <img src={this.props.img} alt="opps"/>
        </div>
    )
}
}
export default PhotoCard;