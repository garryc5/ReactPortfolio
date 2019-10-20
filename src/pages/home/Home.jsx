import React  from 'react';
import styles from './Home.module.css';
import CodeSandBoxCard from '../../components/CodesandboxCard/CodeSandBoxCard'

class Home extends React.Component {
  state = {}

  render() {
    return  (
        <div id="cards"className={styles.home}>
<iframe className={styles.linkedin} src="https://www.linkedin.com/embed/feed/update/urn:li:share:6569010664558383104" height="669" width="504"   title="Embedded post"></iframe>
<iframe className={styles.linkedin} src="https://www.linkedin.com/embed/feed/update/urn:li:share:6588178652641452032" height="465" width="504"   title="Embedded post"></iframe>
        <CodeSandBoxCard
        title={<h4>The Power of COS</h4>}
        summery ={<p>I made this code sandbox to showcase the power of COS. Have you ever wanted to bounce between a range of numbers? When first thinking of a solution, you might have thought up a ton of conditional logic. Start counting up. If you hit the max number, start counting down, and so on.
        What if I told you COS could accomplish this with one simple function. When COS is incremented by pie it bounces between 1 and -1. Then by adding 1 we have a range between 0 and 2. Now we times by half the max wanted, and now the number will bounce between 0 and the max number.
        See the Exsample below!</p>}
        iframe="https://codesandbox.io/embed/cos-is-cool-lsfo7?fontsize=14"
        />
    <CodeSandBoxCard
        title ={<h4>Happy Birthday</h4>}
        summery={<p>I made a Happy Birthday code sandbox for my friend David Bae.
        This neat little POC(proof of concept) starts with one yellow ball randomly moving around the page. As you click more balls are added following the previous ball, spelling out Happy Birthday! Link to original post: <a href="https://www.linkedin.com/posts/garrettcarver-software-engineer_hastyexternalplot-activity-6584153242010218496-nkkT">here</a>      Check out the code below.
        </p>}
        iframe="https://codesandbox.io/embed/happy-b-day-fcsfy?fontsize=14"
        />
        </div>
    )
}
}
export default Home;