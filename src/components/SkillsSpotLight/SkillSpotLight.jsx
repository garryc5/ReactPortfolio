import React  from 'react';
import styles from './SkillsSpotLight.module.css';

class SkillsSpotLight extends React.Component {
  state = {
    w:0,
    b:0, 
    x : 0,
    timer:''
  }
  componentDidMount(){
  this.setState({timer : setInterval(this.topDomManipulation, 15)})}
  cosval = (x) => {
    var y = Math.cos(x * Math.PI);
    y++;
    y *= 40;
    return y;
  }
   topDomManipulation = ()=> 
   {
    this.setState({
      w : this.cosval(this.state.x),
      b : this.cosval(this.state.x + 1),
      x : this.state.x + 0.01
    })
    document.getElementById("spotlight").style.left = `${this.state.w - 1}vw`;
    document.getElementById("spotlight").style.borderRadius = `${this.state.w / 3 + 20}% ${this.state.b / 3 + 20}% ${this.state.b / 3 + 20}% ${this.state.w / 3 + 20}%`;
    }
    
    handleMouseOver = e => {
      clearInterval(this.state.timer);
      document.getElementById("spotlight").style.left = `${e.clientX}px`;
    }

    handleMouseOut = e =>
    {
      this.setState({timer: setInterval(this.topDomManipulation, 15)      })
    }
    handleTouchStart = e => {
      clearInterval(this.state.timer);
      document.getElementById("spotlight").style.left = `${e.clientX}px`;
    }

    handleTouchEnd = e =>
    {
      this.setState({timer: setInterval(this.topDomManipulation, 15)      })
    }


render() {
    return  (
  <div className={styles.all}>
    <h2 className={styles.title}>Skills:</h2>
    <div id="text"className={styles.text} onMouseMove={this.handleMouseOver} onMouseOut = {this.handleMouseOut} onTouchStart ={this.handleTouchStart} onTouchEnd={this.handleTouchEnd}>
      <h1 className={styles.skills}>Node<br />Express</h1>
      <h1 className={styles.skills}>React<br />React Native</h1>
      <h1 className={styles.skills}>MongoDB<br />SQL</h1>
      <h1 className={styles.skills}>Python<br />Django</h1>
      <h1 className={styles.skills}>Photography<br />Photoshop</h1>
    </div>
    <div id="spotlight" className={styles.spotlight}></div>
</div>
)}
}
export default SkillsSpotLight;