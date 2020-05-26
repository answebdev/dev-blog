import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import Home from './components/pages/Home';
import Guides from './components/pages/Guides';
import Shorts from './components/pages/Shorts';
import Error from './components/pages/Error';
import NetlifyFormReact from './components/pages/NetlifyFormReact';
import WhitespaceReact from './components/pages/WhitespaceReact';
import ReactComponents from './components/pages/ReactComponents';

import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Fragment>
          <Navigation />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/guides' component={Guides} />
              <Route exact path='/shorts' component={Shorts} />

              <Route
                exact
                path='/guides/setting-up-a-netlify-form-in-react'
                component={NetlifyFormReact}
              />
              <Route
                exact
                path='/shorts/removing-unwanted-whitespace-in-react'
                component={WhitespaceReact}
              />
              <Route
                exact
                path='/shorts/how-to-not-render-a-component-on-a-paricular-page-in-react'
                component={ReactComponents}
              />
              <Route component={Error} />
            </Switch>
          </div>
        </Fragment>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
