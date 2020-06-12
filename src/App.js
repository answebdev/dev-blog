import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import Home from './components/pages/Home';
import Guides from './components/pages/Guides';
import Notes from './components/pages/Notes';
import Error from './components/pages/Error';
import AlertMessages from './components/pages/AlertMessages';
import OpenGraphMetaTags from './components/pages/OpenGraphMetaTags';
import NextGen from './components/pages/NextGen';
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
              <Route exact path='/notes' component={Notes} />
              <Route
                exact
                path='/guides/how-to-beautify-your-alert-messages'
                component={AlertMessages}
              />
              <Route
                exact
                path='/guides/adding-open-graph-meta-tags-to-your-app-or-website'
                component={OpenGraphMetaTags}
              />
              <Route
                exact
                path='/guides/using-next-gen-image-formats-to-enhance-your-apps-performance'
                component={NextGen}
              />
              <Route
                exact
                path='/guides/setting-up-a-netlify-form-in-react'
                component={NetlifyFormReact}
              />
              <Route
                exact
                path='/notes/removing-unwanted-whitespace-in-react'
                component={WhitespaceReact}
              />
              <Route
                exact
                path='/notes/how-to-not-render-a-component-on-a-paricular-page-in-react'
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
