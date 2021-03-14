
import './App.scss';
import About from './components/About/About';
import Home from './components/home/home'
import Listings from './components/listings/listings';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Listings />
      <About />
    </div>
  );
}

export default App;
