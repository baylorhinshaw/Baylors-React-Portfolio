import './Nav.css';
import { Link } from 'react-router-dom';
import resume from '../images/resume.pdf'

function Nav() {
  return (
    <div className='nav'>
            <div class="navleft">
                <h1>Baylor Hinshaw</h1>
            </div>
            <div class="navright">
                <Link to="/home">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
                <a href={resume}>Resume</a>
            </div>
    </div>
  );
}

export default Nav;