import React  from 'react';
import styles from './PageSplit.module.css';

class NavBar extends React.Component {

  render() {
    return  (
        <div className={styles.all} onScroll={this.handleScroll}>
            <div  id='left' className={styles.d1}>
                <div id="flash" className={styles.flash}></div>
                <img className={styles.img} src="https://lh3.googleusercontent.com/uwj-wy5LWNAsibRjb69kgfPCp37V09nYSbLi3z2VWfgIrGw4RHGlKxalVt-ZlBn7QYnqQklxW7Ze2NIannPTPsCfRNkOm89CN60TBQMvcuVJuRAGGwMVClseBrUlw5wYUpmFjZh-5_h3FCnScWYSHl7JyLriwB4fLQqLdeug1hPbLXq0aOLZs6joxws7PG77OnronVuR2PknFnNC208Zhtx2K9TAjoOad7v8SxlJzwfrxLw9XlomCsgydGKa7UVOFfBKJ2CH6c4f3NAzzFl2wtcvHtLkoGjLrldGoE9FfaFKvyIuyXN3hdbMVThOWY69vq6CJ6ZgwAaeJWmVTS91WNudO6yER2lz7Wone_4HpIXlSKnbhU_NKarNAQCtuDUGk2lHXWc48dfjvwZ1l-0LuJYqQHaaovglT_ZH6b7FPEwW6Gzw5_rIpmxHJJeJSaiDdqo6Oil9_pxjSSszwDkcmKeRW2Hr_CjutvP1QwdMZ2-R6SlsukGNkjQxRpbvgzjVqV5igU2Nj0IV7Xz6chAlTHBSWzLy605F_iokcSTFizv0R86A638oe2rVAQlkJguqdGRS64AFILHm-V1ivrb5a498BiR9MgdtF5EpNwhqbcqOHwbO95cHeM2dl1x0aLrTdM45My7yP-R70x1GashhUxpBSJHzBtxAJH9L4VvcpPnGVivimwihh_Q8hK3P8w6NrekkSnu7tr8zNGU4hKGpo5hNH7_oBt494MCZrQybSQuv1yg=w699-h744-no" alt="test"/></div>
            <div id= 'leftReplace' className={styles.r1}>From Photographer</div>
            <div id='right' className={styles.d2}>
                <img className={styles.img} src="https://lh3.googleusercontent.com/13mMOOy4aPJ2C29beUnjmKKF65uxiFI_rAf5q_aIPgnTzUlohT9DTRtvXsvbIL06usnlxtP80P64dvpIVauxvKGVinlbowgUklheIN3bgJNu47tdbOomQKPU5nrg41EFPtjoxByQal4qBx8F3JPqx4xQ9B9yX45bpS2gK9NDD0YukohD-T2cx9Zqmf-DfBpdud8FZifuLoaBgunvstKgnUENlPtk1rzYeU3GPEZtdD03j9aagIaDhOpRd4fS4w901UqaYyzqzoD9G35xdeir1vwZpf41PtZvLHHS99eOMyQa2xlRdx-oXSwWxuwtz8IYfbDEx0CaOVoNT9AVAcGQ-_HdJqL6xNXdm7bid3Kprwq3n2BTIJ4J6uguyxoCAKDi6MDcVvac3S5MRle8z08Myd2kVcK8WiNNtEnFIwJ9t80fgXpq8f1EiOiuFvtmjga7PSjsBqxjoleufBOjgQsl2SsL_x_Yhz2lpqmp7wACcIaA2kPJwY_qKhulkEkPoQaK7UIzXZT8OCoPthdI-jcVPw1kuXVHstMJcqbOJWaZzZjVZASnzMx-MmoYoGV03aAWC5Qw7L4ZJccuraQJ5bmG8Omhv5RRSaLWpFoMeGu3WOgNupRRKXQarXSHbVKIZwgsCUxhKE446ZvI8kuy94JKqwrR48YS6cs05l9rHPJrRsfkWB1LBRKuYA=w383-h319-no" alt="opps"/>
            </div>
            <div id= 'rightReplace' className={styles.r2}>To Devloper</div>
        </div>
    )
}
}
export default NavBar;