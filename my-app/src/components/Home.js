import bae from '../images/bae.png'
import pin from '../images/pin.png'
import vsc from '../images/vsc.png'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/javascript.png'
import react from '../images/react.png'
import node from '../images/nodejs.png'
import sql from '../images/sql.png'
import mysql from '../images/mysql.png'
import mongodb from '../images/mongodb.png'
import bootstrap from '../images/bootstrap.png'
import github from '../images/gh.png'

import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className='location'><img class="pin" src={pin} alt="pin"></img>Atlanta, GA</div>
            <div>Software Engineer</div>
            <p>I am currently a student at Georgia Techs Full-Stack Coding Bootcamp. I create well designed applications focused on seamless functionality and engagement.</p>
            <img className="bae" alt="baylor hishaw" src={bae}/>
            <div className="landt">Languages and Tools:</div>
                <img className="lnt" alt="Visual Studio Code" src={vsc}/>
                <img className="lnt" alt="HTML5" src={html}/>
                <img className="lnt" alt="CSS3" src={css}/>
                <img className="lnt" alt="JavaScript" src={js}/>
                <img className="lnt" alt="React" src={react}/>
                <img className="lnt" alt="Node.js" src={node}/>
                <img className="lnt" alt="SQL" src={sql}/>
                <img className="lnt" alt="MySQL" src={mysql}/>
                <img className="lnt" alt="MongoDB" src={mongodb}/>
                <img className="lnt" alt="Bootstrap" src={bootstrap}/>
                <img className="lnt" alt="GitHub" src={github}/>
        </div>
    );
}

export default Home;