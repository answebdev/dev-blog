import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ScrollUpButton from 'react-scroll-up-button';
import { InlineShareButtons } from 'sharethis-reactjs';
import routes01 from '../../img/routes01.webp';
import routes02 from '../../img/routes02.webp';
import routes03 from '../../img/routes03.webp';
import routes04 from '../../img/routes04.webp';
import routes05 from '../../img/routes05.webp';
import routes06 from '../../img/routes06.webp';
import routes07 from '../../img/routes07.webp';
import routes08 from '../../img/routes08.webp';
import routes09 from '../../img/routes09.webp';
import routes10 from '../../img/routes10.webp';
import routes11 from '../../img/routes11.webp';
import routes12 from '../../img/routes12.webp';
import routes13 from '../../img/routes13.webp';
import routes14 from '../../img/routes14.webp';
import routes from '../../pdf/routes.pdf';

import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

Prism.highlightAll();

// Prism Line Number Plugin
// Source: https://davidwalsh.name/prism-line-number-plugin
/*
	This plugins was created based on the Prism line-numbering plugin.
	This plugin aims to number all lines and is independent of highlighting.
*/
(function () {
  if (!window.Prism || !document.querySelectorAll) {
    return;
  }

  function $$(expr, con) {
    return Array.prototype.slice.call((con || document).querySelectorAll(expr));
  }

  function numberLines(pre) {
    var offset = +pre.getAttribute('data-line-offset') || 0;
    var lineHeight = parseFloat(getComputedStyle(pre).lineHeight);
    var code = pre.querySelector('code');
    var numLines = code.innerHTML.split('\n').length;
    pre.setAttribute('data-number', '');

    for (var i = 1; i <= numLines; i++) {
      var line = document.createElement('div');
      line.className = 'line-number';
      line.setAttribute('data-start', i);
      line.style.top = (i - offset - 1) * lineHeight + 'px';

      (code || pre).appendChild(line);
    }
  }

  Prism.hooks.add('after-highlight', function (env) {
    var pre = env.element.parentNode;

    if (!pre || !/pre/i.test(pre.nodeName)) {
      return;
    }

    $$('.line-number', pre).forEach(function (line) {
      line.parentNode.removeChild(line);
    });

    numberLines(pre);
  });
})();

const ReactRoutes = () => {
  return (
    <div>
      <Helmet>
        <title>CoderGuides | Creating Routes in React</title>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <h3>
                <strong>Creating Routes in React</strong>
              </h3>
              <hr />
              <InlineShareButtons
                config={{
                  alignment: 'left', // alignment of buttons (left, center, right)
                  color: 'social', // set the color of buttons (social, white)
                  enabled: true, // show/hide buttons (true, false)
                  font_size: 16, // font size for the buttons
                  labels: 'cta', // button labels (cta, counts, null)
                  language: 'en', // which language to use (see LANGUAGES)
                  networks: [
                    // which networks to include (see SHARING NETWORKS)
                    'facebook',
                    'twitter',
                    'linkedin',
                    'pinterest',
                    'email',
                    'sharethis',
                  ],
                  padding: 12, // padding within buttons (INTEGER)
                  radius: 4, // the corner radius on each button (INTEGER)
                  show_total: true,
                  size: 40, // the size of each button (INTEGER)

                  // OPTIONAL PARAMETERS
                  url:
                    'https://coderguides.com/guides/creating-routes-in-react', // (defaults to current url)
                  image: 'https://bit.ly/2CMhCMC', // (defaults to og:image or twitter:image)
                  description:
                    'Guides and notes on various topics related to web development', // (defaults to og:description or twitter:description)
                  title: 'CoderGuides', // (defaults to og:title or twitter:title)
                  message:
                    'https://coderguides.com/guides/creating-routes-in-react', // (only for email sharing)
                  subject: 'CoderGuides: Creating Routes in React', // (only for email sharing)
                  username: '', // (only for twitter sharing)
                }}
              />
              <br />
              <p>
                <strong>Objective: </strong>To create routes in React.
              </p>

              <p>
                <a
                  src={routes}
                  href={routes}
                  rel='noopener noreferrer'
                  target='_blank'
                  style={{ padding: '0' }}
                >
                  <i
                    className='fas fa-file-download'
                    style={{ color: '#3e63bd' }}
                  >
                    &nbsp;
                    <span
                      style={{
                        fontFamily: 'Quicksand',
                        fontSize: '16px',
                        color: '#3e63bd',
                      }}
                    >
                      Download The Notes Here
                    </span>
                  </i>
                </a>
              </p>
              <br />
              <p>
                <strong>Creating the React App</strong>
              </p>
              <p>
                We're going to look at how to create routes in React. The first
                thing we're going to do is to create a new React app. In this
                example, I created a new GitHub repository and cloned it in a
                folder. So at this point, the only thing in my project's folder
                is a .gitignore file and a README file.
              </p>
              <p>
                <img
                  src={routes01}
                  className='img-fluid mb-3'
                  title='Inside the Project Folder'
                  alt='Inside the Project Folder'
                />
              </p>
              <br />
              <p>
                To create the React starter package, <strong>cd</strong> into
                your project's folder and run{' '}
                <strong>npx create-react-app my-app</strong> (where{' '}
                <strong>my-app</strong> is replaced with the name of your app).
                You can also run <strong>npx create-react-app .</strong> instead
                of <strong>npx create-react-app my-app.</strong> Adding the dot
                (instead of creating a name) will create and set up all the
                initial React library files in the current folder. In this
                example, I'll be running <strong>npx create-react-app .</strong>
              </p>
              <p>
                <pre
                  style={{
                    borderRadius: '0.3em',
                    position: 'relative',
                    padding: '1em 0 1em 3em',
                    fontSize: '18px',
                    backgroundColor: '#272822',
                    color: '#f8f8f2',
                  }}
                >
                  <code>{`npx create-react-app .`}</code>
                </pre>
              </p>
              <br />
              <p>
                So, once you've done that and get the "Happy hacking!" message
                in the terminal, you're all set to go.
              </p>
              <p>
                <img
                  src={routes14}
                  className='img-fluid mb-3'
                  title='Happy hacking!'
                  alt='Happy hacking!'
                />
              </p>
              <br />
              <p>And now your project's folder should look like this:</p>
              <p>
                <img
                  src={routes02}
                  className='img-fluid mb-3'
                  title='Inside the Project Folder'
                  alt='Inside the Project Folder'
                />
              </p>
              <br />
              <p>
                To start our React app, we need to go into the root of our
                project folder and run <strong>npm start</strong> (or{' '}
                <strong>yarn start</strong>).
              </p>
              <p>
                <pre
                  style={{
                    borderRadius: '0.3em',
                    position: 'relative',
                    padding: '1em 0 1em 3em',
                    fontSize: '18px',
                    backgroundColor: '#272822',
                    color: '#f8f8f2',
                  }}
                >
                  <code>{`npm start`}</code>
                </pre>
              </p>
              <br />
              <p>
                And this is what we should see. We now have our React app
                running in the browser. So, now that we have our React app
                running, let's create our routes.
              </p>
              <p>
                <img
                  src={routes03}
                  className='img-fluid mb-3'
                  title='React App'
                  alt='React App'
                />
              </p>
              <br />
              <p>
                <strong>Creating the Routes</strong>
              </p>
              <p>
                1. Let's start by getting rid of some things we don't need, just
                to keep things simple. Right now, our App.js file looks like
                this. This is what it looks like when we create a new React app:
              </p>

              <p>
                <pre>
                  <code className='language-javascript'>
                    {`import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                Let's get rid of everything but the {`<div>`}, and we'll put an{' '}
                {`<h1>`} inside with "Hello". And we'll get rid of the logo that
                was imported above too. And we can just leave the CSS as it is
                (line 2). So, our App.js should now look like this:
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Hello</h1>
    </div>
  );
}

export default App;`}
                  </code>
                </pre>
              </p>
              <br />
              <p>And now our app should look like this in the browser:</p>
              <p>
                <img
                  src={routes04}
                  className='img-fluid mb-3'
                  title='React App'
                  alt='React App'
                />
              </p>
              <br />
              <p>
                2. So, now we're ready to work on our routes. The first thing we
                need to do is to install
                <a
                  className='click'
                  href='https://www.npmjs.com/package/react-router-dom'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> react-router-dom</span>
                </a>
                <span style={{ marginLeft: '-10px' }}>.</span> So, let's go
                ahead and install it: <strong>npm i react-router-dom.</strong>
              </p>
              <p>
                <pre
                  style={{
                    borderRadius: '0.3em',
                    position: 'relative',
                    padding: '1em 0 1em 3em',
                    fontSize: '18px',
                    backgroundColor: '#272822',
                    color: '#f8f8f2',
                  }}
                >
                  <code>{`npm i react-router-dom`}</code>
                </pre>
              </p>
              <br />
              <p>
                And we can verify that it has been installed by checking in the
                dependencies in our package.json file (line 7).
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`"dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.4.1"
},`}
                  </code>
                </pre>
              </p>
              <br />

              <p>
                3. We're going to be using
                <a
                  className='click'
                  href='https://reactrouter.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> React Router</span>
                </a>
                <span style={{ marginLeft: '-10px' }}>,</span> so let's set that
                up. Let's start by importing it into our App.js file (line 2).
              </p>

              <p>
                <pre>
                  <code className='language-javascript'>
                    {`import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                And then, let's go down to where we have our main app and wrap
                everything inside of {`<Router>`} (after the{' '}
                <strong>return,</strong> and before the {`<div>`}).
              </p>

              <p>
                <pre>
                  <code className='language-javascript'>
                    {`import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>Hello</h1>
      </div>
    </Router>
  );
}

export default App;`}
                  </code>
                </pre>
              </p>
              <br />

              <p>
                And let's go ahead and add some routes now. First, let's add a{' '}
                {`<Switch>`} (after the {`<div>`}). And we can get rid of our{' '}
                {`<h1>`} now. And inside the {`<Switch>`} is where we're going
                to put our routes. So, let's add a route for the Home Page
                ('/'), and another one for an About Page ('/about') (lines 6-7).
                And at this point we're going to get a couple of errors saying,{' '}
                <strong>'Home' is not defined</strong> and{' '}
                <strong>'About' is not defined,</strong> and we're not going to
                see anything in the browser. And that's because we haven't
                created these components. So, let's go ahead and do that now.
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
}`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                4. So, let's create these components, so that we'll be able to
                go to the actual page when we go to their URLs ('/' and
                '/about'). To do this, let's go inside our <strong>src</strong>{' '}
                folder and create a folder called <strong>components</strong>.
                And inside <strong>components,</strong> we'll create another
                folder called <strong>pages.</strong> This is where we're going
                to keep our Home Page and About Page components. So, inside the{' '}
                <strong>pages</strong> folder, we'll create two separate files:
                Home.js and About.js. And these will be our components.
              </p>
              <p>
                <img
                  src={routes05}
                  className='img-fluid mb-3'
                  title='React App Folder Structure'
                  alt='React App Folder Structure'
                />
              </p>
              <br />
              <p>
                Next, we need to go to App.js and bring these in (lines 3-4).
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import './App.css';`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                So, now that we've brought our components into App.js, we need
                to add some code to our components so that we'll be able to see
                something in the browser. And this is where you would put your
                content and other components (e.g. forms, images, text, etc.),
                depending on what you're building. But for our purposes, we'll
                just have an {`<h1>`} (line 6). So, we need to bring in React
                (line 1), and then we'll go ahead and create our component, with
                our {`<h1>`}. And then we need our{' '}
                <strong>export default</strong> at the end (line 11).
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                And when we go to the browser, we get our Home Page with our{' '}
                {`<h1>`}.
              </p>
              <p>
                <img
                  src={routes06}
                  className='img-fluid mb-3'
                  title='Home Page'
                  alt='Home Page'
                />
              </p>
              <br />
              <p>
                And remember, the path we used for the Home Page was '/', so
                when we look at the URL, it's just going to be{' '}
                <strong>localhost:3000/.</strong>
              </p>
              <p>
                <img
                  src={routes07}
                  className='img-fluid mb-3'
                  title='Home Page URL'
                  alt='Home Page URL'
                />
              </p>
              <br />
              <p>
                And let's do the same for the About Page. And we'll just have an{' '}
                {`<h1>`} with the text, "About Page".
              </p>

              <p>
                <pre>
                  <code className='language-javascript'>
                    {`import React from 'react';
                    
const About = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

export default About;`}
                  </code>
                </pre>
              </p>
              <br />

              <p>
                And the path we're using for the About Page is{' '}
                <strong>/about.</strong> So, now when we go to{' '}
                <strong>/about</strong> in our URL, we should see our About
                Page. And we get our {`<h1>`}.
              </p>
              <p>
                <img
                  src={routes08}
                  className='img-fluid mb-3'
                  title='About Page'
                  alt='About Page'
                />
              </p>
              <br />
              <p>
                And you can see that the URL now shows <strong>/about,</strong>{' '}
                which means we're on the About Page.
              </p>
              <p>
                <img
                  src={routes09}
                  className='img-fluid mb-3'
                  title='About Page URL'
                  alt='About Page URL'
                />
              </p>
              <br />
              <p>
                5. Okay. So, we've got our routes set up and our Home and About
                pages. But it doesn't do us any good if we have to manually type
                in the paths in order to get to our pages, so let's add some
                links so we can get to our pages by clicking on them. And
                normally, you would have a navbar for your links, but to keep
                things simple, we'll just use links. So, let's go to our Home
                Page component (Home.js). And the first thing we need to do is
                to bring in <strong>Link</strong> from react-router-dom (line
                2). And we're going to put each of our links in an {`<li>`}. And
                each link is going to point to a specific path, depending on the
                page (lines 8-13).
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </div>
  );
};

export default About;`}
                  </code>
                </pre>
              </p>
              <br />
              <p>And if we check the browser, we should get our links.</p>
              <p>
                <img
                  src={routes10}
                  className='img-fluid mb-3'
                  title='Home Page with Links'
                  alt='Home Page with Links'
                />
              </p>
              <br />
              <p>And we'll do the same with the About Page.</p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </div>
  );
};

export default About;`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                And we should see our links on the About Page as well. And the
                links should be working now. So, now we can easily navigate to
                our Home and About pages by just clicking on the links. And when
                you check the URL, you should see the correct path, depending on
                which page you're on.
              </p>
              <p>
                <img
                  src={routes11}
                  className='img-fluid mb-3'
                  title='About Page with Links'
                  alt='About Page with Links'
                />
              </p>
              <br />
              <p>
                6. The last thing left to do is to create an error page. And
                we're going to be creating this component as well, just like we
                did for the Home and About pages. Let's first go to App.js and
                add this route. And we'll name the component{' '}
                <strong>Error</strong> (line 8). And you'll notice that this
                route looks a little different from the other routes. For Home
                and About, we need the <strong>exact</strong> path, since there
                is only one exact path for each page. However, the reason we're
                using an error page, is so that we can have a page that a user
                is redirected to if they do not hit one of our exact paths (e.g.
                due to misspelling issues, or broken or dead links). That's why
                we do not use <strong>exact path</strong> for our Error Page
                route.
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                And we also need to bring in our <srong>Error</srong> component
                (line 5), which we we're going to create now.
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Error from './components/pages/Error';
import './App.css';`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                So, inside of our <strong>pages</strong> folder, let's create a
                file called Error.js. And we'll just add in a simple page, just
                like we did for our Home and About components. And we'll add an{' '}
                {`<h1>`} with a message like, "404 Page Not Found."
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`import React from 'react';

const Error = () => {
  return (
    <div>
      <h1>404 Page Not Found.</h1>
    </div>
  );
};

export default Error;`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                And we'll go ahead and add a link so that the user will be able
                to get back to the Home Page (line 9). And then we need to
                remember to import <strong>Link</strong> (line 2).
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h1>404 Page Not Found.</h1>
      <li>
        <Link to='/'>Home</Link>
      </li>
    </div>
  );
};

export default Error;`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                So, we now have our Error Page set up. But we're not going to
                see it unless we do not hit our Home and About paths exactly. So
                let's say, for example, we have an extra letter in our URL, for
                some reason, so that it looks like this.
              </p>
              <p>
                <img
                  src={routes12}
                  className='img-fluid mb-3'
                  title='Wrong URL'
                  alt='Wrong URL'
                />
              </p>
              <br />
              <p>
                Well, this is not one of our paths. We're trying to get to our
                About Page, but we're not hitting the exact path. So, since
                we're not hitting the exact path, we're redirected to the Error
                Page. And we get our error message, "404 Page Not Found." And
                there's our link to the Home Page. So, if we click on it, we're
                back on our Home Page.
              </p>
              <p>
                <img
                  src={routes13}
                  className='img-fluid mb-3'
                  title='Error Page'
                  alt='Error Page'
                />
              </p>
              <br />
              <p>And we're back on our Home Page.</p>
              <p>
                <img
                  src={routes10}
                  className='img-fluid mb-3'
                  title='Home Page'
                  alt='Home Page'
                />
              </p>
              <br />
              <p>
                So, we created a simple React app with working routes. We
                started by creating a new React app. Next, we created our routes
                for a Home and About page. Then, we created the Home and About
                components. Finally, we created an Error Page for users to get
                redirected to if they do not hit one of our exact paths, with a
                link that takes us back to the Home Page.
              </p>
            </Col>
          </Row>

          <div>
            <ScrollUpButton
              style={{
                marginBottom: '35px',
                marginRight: '-15px',
                background: '#ff6347',
                borderRadius: '5px',
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReactRoutes;
