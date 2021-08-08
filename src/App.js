import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Navigation from './components/Navigation';
// import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Interior from './pages/Interior';

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
          <Route exact path="/" component={Home} />
          <Route exact path="/northern-lights-interior" component={Interior} />
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
