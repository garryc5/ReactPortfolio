import React  from 'react';
import styles from './CodeSandBoxCard.module.css';

class CodeSandBoxCard extends React.Component {

  render() {
    return  (
        <div className={styles.card}>
          {this.props.title}
          {this.props.summery}
<iframe src={this.props.iframe} title="cos-is-cool" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" className={styles.iframe} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
        </div>
    )
}
}
export default CodeSandBoxCard;