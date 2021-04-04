import React from 'react'
import './App.scss';
import ContextProvider from './context/global-provider'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Footer from './components/footer/footer';
import Home from './components/home/home'
import Navbar from './components/navbar/navbar';
import Search from './components/search/search';

function App() {
  return (
    <div className="App">
      <Router>
        <ContextProvider>
          <Navbar />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/search/:category" component={Search} />
            </Switch>
          <Footer />
        </ContextProvider>
      </Router>
    </div>
  );
}

export default App;
