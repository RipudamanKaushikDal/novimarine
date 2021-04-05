import React from 'react'
import ContextProvider from './context/global-provider'
import {useRoutes} from 'hookrouter';
import './App.scss';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import routes from './routes';

function App() {

  const routeResults = useRoutes(routes)

  return (
    <div className="App">
        <ContextProvider>
          <Navbar />
            {routeResults}
          <Footer />
        </ContextProvider>
    </div>
  );
}

export default App;
