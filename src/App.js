import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Navigation from './components/Navigation';
// import Footer from './components/Footer';

// Pages
import Overview from './pages/Overview';
import Exterior from './pages/Exterior';
import Interior from './pages/Interior';
import Tour from './pages/Tour';

// Components, lazy loading
const Navigation = lazy(() => import('./components/Navigation'))
const Footer = lazy(() => import('./components/Footer'))


function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div />}>
          <Navigation />
        </Suspense>
        <div>
        <Route exact path="/" component={Overview} />
          <Route exact path="/northern-lights-exterior" component={Exterior} />
          <Route exact path="/northern-lights-interior" component={Interior} />
          <Route exact path="/northern-lights-tour" component={Tour} />
        </div>
        <div className="footer_section">
          <Suspense fallback={<div />}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
