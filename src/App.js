import './App.css';
import background from './images/marianna-smiley-y3BBVEpMl4E-unsplash.jpg'
import Nav from './components/Nav'
import Footer from './components/Footer';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App" style={{ 
      backgroundImage: `url(${background})`,
      backgroundSize:'auto', 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'top'
    }}>
      <Nav />
    <Switch>
      <Route exact path='/home' component={Home} />
      <Route path='/aboutme' component={AboutMe}/>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
