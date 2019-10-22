import Card from '../../components/Cards/Cards'
import CodeSandBoxCard from '../../components/CodesandboxCard/CodeSandBoxCard'
import React  from 'react';


class Code extends React.Component {

  render() {
    return  (
        <div id ="cards">
       
       
        <CodeSandBoxCard
        title={<h3 id="title">Survey App
            <br/>
            <a target="blank" href="https://surveyapiandcharts.herokuapp.com/">full version</a>
        </h3>}
        summery={<p>
            This app allows users to create surveys and send them to firends and family. 
            Other notable features:
            <ul>
            <li>Created an Api to query the data from surveys.</li>
            <li>Developed a way to visualize data from mongoDB. By generating a line graph and pie chart using CSS, JavaScript, HTML, node.js and ejs. </li>
            <li>The backend implemented a mongoDB database using the mongoose and node.</li>
            </ul>
            Below is a preview of of the pie chart from the full app.
            </p>}
        iframe ="https://codesandbox.io/embed/pie-6fwd7?fontsize=14" 
        />
        <CodeSandBoxCard 
                title=
                {<h3 id = "tetris">
                    Tetris
                    <br/>
                    <a target="blank" href="https://garryc5.github.io/TetrisGame/">full version</a>
                </h3>}
                summery=
                {<p id = "tetris">
                    My take on the classic game of Tetris. Made with out canvas, just JavaScript. 
                    This game is designed to have a unmanagable drop speed after 14 lines.
                    I hope you enjoy! 
                    <ul>
                    <li id = "tetris">Developed a reactive mobile friendly Tetris game to provide users a great experience.</li>
                    <li id = "tetris">Created collision logic and dynamic controls using JavaScript, CSS, and HTML.</li>
                    </ul>
                </p>}
        iframe ="https://codesandbox.io/embed/tetris-js-cir2l?fontsize=14"
        />
        <Card 
         title=
         {<h3 id="title">
             Milo
             <br/>
             <a target="blank" href="https://milo-app-fitness.herokuapp.com/">full version</a>
         </h3>}
         summery=
         {<p>
             Milo is a wellness and fitness app. Designed to provide news articles of health and track fitness goals.
             Check out the code <a target="blank" href="https://github.com/garryc5/milo">here</a>
             <ul>
             <li>Lead a team to build a full stack fitness app to help track exercises,  with a psql database, django and python.</li>
             <li>I developed a web scraper to populate the news feed with relevant articles on fitness.</li>
             <li>I also set up the uml diagram and made the site switch to a side by side snap view on mobile.</li>
             </ul>
         </p>}
        img="https://camo.githubusercontent.com/4aa85989ed7b30872d19dbb3483680f73ea57e8a/68747470733a2f2f692e696d6775722e636f6d2f543857575275332e6a7067"
/>
<Card 
         title=
         {<h3 id="title">
             Bargain-action-down 
             <br/>
             <a target="blank" href="https://bargain-action-down.herokuapp.com">full version</a>
         </h3>}
         summery=
         {<p>
            Bargain Action Down is a task tracker for your spending activities, that encourages you to spend less to score more. Once you have a task in mind you can bargain that down and render your new activity, scoring points based on potential money saved. Points are recorded as tasks are completed and your savings are converted to quantities of things you could do with your savings!
             Check out the code <a target="blank" href="https://github.com/ConnerMcCabe/Bargain-Action-Down">here</a>
             <ul>
                <li> Build a MERN(mongo express react node) stack app. </li>
                <li> Allows users to track there savings with token-based OAuth.</li>
             </ul>
         </p>}
        img="https://camo.githubusercontent.com/01a681faca76ddf8c33e7d35de55e0c777431da7/68747470733a2f2f7472656c6c6f2d6174746163686d656e74732e73332e616d617a6f6e6177732e636f6d2f3564343335646536326437633337376635306631633036362f3564613062363432633231316630316431613537316362312f61643033376537646161656139623064373337316231343465623332376431312f4d61696e506167652e706e67"
/>
<Card 
         title=
         {<h3 id="title">
             HackBaltimore
            </h3>}
         summery=
         {<p>
            Working remotely with a team in Baltimore to making a site to tackle problems on https://portal.hackbaltimore.io/challenges. 
             Check out the code <a target="blank" href="https://github.com/garryc5/Cobra">here</a>
             <ul>
                <li>So far I set up our git repo and mapped out our uml diagram.</li>
                <li>I’m also working to help build a react front-end for the site.</li>
                <li>Set up token based Oath.</li>
             </ul>
         </p>}
        img ="https://pbs.twimg.com/profile_images/1054712118866522113/wZF0PTCZ_400x400.jpg"
/>
<Card 
         title=
         {<h3 id="title">
             BearBonesDB
            </h3>}
         summery=
         {<p>
Constructed a npm(node package) that makes a lightweight local database for small projects. It utilizes some bash commands to write edit and save files to the database.             
Set up is super easy. All you have to do is add the line setup.NewModel('modelName') for every model you would like.
Then run node setup.js, and your all set up. Why use BearBonesDB? Its lightweight, and unlike mongo or sql by writing directly to the file system data is immediately visable. No Terminal! No External site. Just Data!

Check out the code <a target="blank" href="https://github.com/garryc5/BearBonesDB">here</a>

         </p>}
        img ="https://lh3.googleusercontent.com/0gxt3p0eAXaFNYyHIE6puz1bKL0tg8CprnFWxq5Qx6yVpiHdVs7AkH2I13m7wfD1gTtUu-e2GXvG4INbUaHXzsz6WUyjpVVgCmCXZPXI6K_9McYq2wU-MJwI5Yc7ijUqqpb34bMDfUbe1mtzRbUmo_EwJPrWP2A74mpy6Km_Ah-MJbmqrFIrmxMR20B9PW58W53kGyE55RUL8LpXQJ6zfWLvVkHKlnaDZQzjoTTvV5njx3Hvlzb7e9eXRafPgiKrdwTpXOnY1-e4CWRoB6J-QcGy4xq_NsZqPzgEg825dXwXlBihMjqxCYJdmcrczjACdSt3KAc_MFjLPeqrF4WBfzXHdkMS3D3W0Y4pcj2DEd0XoHlf1F8EJr5yRjhorPgEhiaSaIph9z__EDwqdaSuTOIhZmfDVaKeHQ9sdT9fr-oju_LnAIUzlCZJZ2096J5bXAodXoB_iDA8FhWFksc9ceIzSN2aJTndy-iKXLSYtNzzx4UKrPvR9KXkZPV-KjRV4sRgid0-H44QNGs6M4QRYXmMvcjGKED-1HKY31L_FXAF63psPnSnu4DN8oQZiKwvMvOWF-IQp5eKNcY6q1LmbKn2syjM6CSecnWoo0qlCo6orGtLC7gCmJlLXUQDaDYmCRVuR_EkmapOuSEZXiyJcEGJNfyhoCA1vMgpX8QVT9VeFpbQClGJF4iEBTSbluuJTHLsZK576ZJP35o4WpgUnQ9ZOPHhZLdx2ESlszVgLeY4Nt0=w852-h821-no"
/>      



        <CodeSandBoxCard
          title=
          {<h3 id="title">
              MORE CODE!
             </h3>}
          summery=
          {<p>
              If you enjoy my other project, check out my github page.
             <br/><a target="blank" href="https://github.com/garryc5">The Latest and Greatest</a>
 
          </p>}
        iframe ="https://codesandbox.io/embed/festive-minsky-hvm5f?fontsize=14"
        />
        </div>

    )
}
}
export default Code;

