// import './App.css';

// Components
import Navigation from './components/Navigation';
// import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        <Home />
        <About />
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
