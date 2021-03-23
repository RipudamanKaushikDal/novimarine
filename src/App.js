
import './App.scss';
import About from './components/about/about';
import Footer from './components/footer/footer';
import Home from './components/home/home'
import Listings from './components/listings/listings';
import Navbar from './components/navbar/navbar';
import Search from './components/search/search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Listings />
      <About />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
