import githubLogo from '../images/github.png'
import linkedinLogo from '../images/linkedin.png'
import homeLogo from '../images/home.png'
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <a href="https://github.com/baylorhinshaw" target="_blank"><img class="logo" src={githubLogo} alt="github logo"></img></a>
            <a href="https://www.linkedin.com/in/baylorhinshaw/" target="_blank"> <img class="logo" src={linkedinLogo} alt="linkedin logo"></img></a>
            <Link to="/home"><img class="logo" src={homeLogo} alt="home"></img></Link>
        </div>
    );
}

export default Footer;