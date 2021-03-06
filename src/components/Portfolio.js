import Card from './Card';
import './Portfolio.css';
import GolfScore from '../images/Golf_Score.gif'
import LazyLayover from '../images/lazylayover.png'
import WorkdaysSchedule from '../images/workdayschedule.png'
import PasswordGen from '../images/PasswordGen.png'
import TextEditor from '../images/texteditor.png'
import Anime from '../images/anime.png'


function  Portfolio() {
    return (
        <div className='Portfolio'>
            <Card image={Anime} title='Ani-Time' description='Ani-Time is a project that is still in the works, so far you can keep up or search different seasons and years of anime. The links below will be updated when this project is finished.' deployed='#' repo='#'/>
            <Card image={TextEditor} title='Text Editor' description='With this text editor, you should be able to create notes or code snippets with or without an internet connection so that you can use it later.' deployed='https://baylors-text-editor.herokuapp.com/' repo='https://github.com/baylorhinshaw/Baylors-Text-Editor-PWA'/>
            <Card image={GolfScore} title='Golf Score' description='Golfscore is an application where you can find golf courses near you and save your score on those courses as well.' deployed='https://evening-thicket-48303.herokuapp.com/' repo='https://github.com/sadiyan/golf-score'/>
            <Card image={LazyLayover} title='Lazy Layover' description='LazyLayover will help you find different things to do around you while you wait for your next flight.' deployed='https://jstndhouk.github.io/Lazy-Layover/' repo='https://github.com/jstndhouk/Lazy-Layover'/>
            <Card image={WorkdaysSchedule} title='Workday Scheduler' description='Workday Scheduler is an application to help you keep track of things you need to do throughout the day.' deployed='https://baylorhinshaw.github.io/Work-Day-Scheduler/' repo='https://github.com/baylorhinshaw/Work-Day-Scheduler'/>
            <Card image={PasswordGen} title='Password Generator' description='This application will let you pick what kinds of fields to make a random generated password.' deployed='https://baylorhinshaw.github.io/Password-Generator-Neon-Edition/' repo='https://github.com/baylorhinshaw/Password-Generator-Neon-Edition'/>
        </div>
    );
}

export default Portfolio;