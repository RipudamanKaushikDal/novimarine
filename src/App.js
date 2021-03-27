import React from 'react'
import './App.scss';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import About from './components/about/about';
import Footer from './components/footer/footer';
import Home from './components/home/home'
import Listings from './components/listings/listings';
import Navbar from './components/navbar/navbar';
import Search from './components/search/search';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/listings" component={Listings} />
            <Route path="/about" component={About} />
            <Route path="/search/:category" component={Search} />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
