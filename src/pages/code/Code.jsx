
import CodeSandBoxCard from '../../components/CodesandboxCard/CodeSandBoxCard'
import React  from 'react';


class Code extends React.Component {

  render() {
    return  (
        <div id ="cards">
       
       
        <CodeSandBoxCard
        iframe ="https://codesandbox.io/embed/pie-6fwd7?fontsize=14" 
        />
        <CodeSandBoxCard
        iframe ="https://codesandbox.io/embed/tetris-js-cir2l?fontsize=14"
        />
        <CodeSandBoxCard
        iframe ="https://codesandbox.io/embed/festive-minsky-hvm5f?fontsize=14"
        />
        </div>

    )
}
}
export default Code;

