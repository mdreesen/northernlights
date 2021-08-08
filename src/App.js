import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Navigation from './components/Navigation';
// import Footer from './components/Footer';

// Pages
import Home from './pages/Home';

import Interior from './pages/Interior';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/northern-lights-interior" component={Interior}/>
        </div>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
