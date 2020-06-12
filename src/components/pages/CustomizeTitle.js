import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ScrollUpButton from 'react-scroll-up-button';
import { InlineShareButtons } from 'sharethis-reactjs';
import title01 from '../../img/title01.webp';
import title02 from '../../img/title02.webp';
import title03 from '../../img/title03.webp';
import title04 from '../../img/title04.webp';
import customizedTitles from '../../pdf/customized-titles.pdf';

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

const AlertMessages = () => {
  return (
    <div>
      <Helmet>
        <title>
          CoderGuides | How to Customize the Title of Any Page in React
        </title>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <h3>
                <strong>How to Customize the Title of Any Page in React</strong>
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
                    'https://coderguides.com/guides/how-to-customize-the-title-of-any-page-in-react', // (defaults to current url)
                  image: 'https://bit.ly/2CMhCMC', // (defaults to og:image or twitter:image)
                  description:
                    'Guides and notes on various topics related to web development', // (defaults to og:description or twitter:description)
                  title: 'CoderGuides', // (defaults to og:title or twitter:title)
                  message:
                    'https://coderguides.com/guides/how-to-customize-the-title-of-any-page-in-react', // (only for email sharing)
                  subject:
                    'CoderGuides: How to Customize the Title of Any Page in React', // (only for email sharing)
                  username: '', // (only for twitter sharing)
                }}
              />
              <br />
              <p>
                <strong>Objective: </strong>To customize the title of any page
                in React.
              </p>

              <p>
                <a
                  src={customizedTitles}
                  href={customizedTitles}
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
                We're going to look at how to customize the title of any page in
                React. By title, this means the document's title that is shown
                in a browser's title bar or a page's tab. In this example, the
                title in the tab is "CoderGuides | Home".
              </p>
              <p>
                <img
                  src={title01}
                  className='img-fluid mb-3'
                  title='Example of Document Title'
                  alt='Example of Document Title'
                />
              </p>
              <br />
              <p>And in this example, the title is "CoderGuides | Guides".</p>
              <p>
                <img
                  src={title02}
                  className='img-fluid mb-3'
                  title='Example of Document Title'
                  alt='Example of Document Title'
                />
              </p>
              <br />
              <p>
                If we go into our app's index.html file in the{' '}
                <strong>public</strong> folder, we can add whatever title we
                want inside the {`<head>`} using the {`<title>`} tag, as in line
                9:
              </p>

              <p>
                <pre>
                  <code className='language-html'>
                    {`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/dev-logo.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <title>CoderGuides</title>
</head>`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                But if we go to our Home Page, we only have "CoderGuides" for
                the title in the tab (note the URL: /home).
              </p>
              <p>
                <img
                  src={title03}
                  className='img-fluid mb-3'
                  title='Example of Document Title'
                  alt='Example of Document Title'
                />
              </p>
              <br />
              <p>
                And if we go to the Guides Page, we also only get "CoderGuides"
                in the tab (note the URL: /guides).
              </p>

              <p>
                <img
                  src={title04}
                  className='img-fluid mb-3'
                  title='Example of Document Title'
                  alt='Example of Document Title'
                />
              </p>
              <br />
              <p>
                Indeed, this is what was added for the title in the index.html
                file above. And you will see that by doing this, you will get
                the same title (i.e. "CoderGuides") across all of your pages in
                your app. So, what do we do if we want to customize the title of
                each of our pages, so that each page in our app can have its own
                individual title? This is where
                <a
                  className='click'
                  href='https://github.com/nfl/react-helmet'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> React Helmet</span>
                </a>
                <span style={{ marginLeft: '-10px' }}> comes in.</span> React
                Helmet is a document head manager for React that allows you to
                manage all of your changes to the document head. There are
                different ways that React Helmet is useful, but we're going to
                use it here to help us customize the title of each of our pages.
              </p>
              <br />
              <p>
                <strong>What To Do</strong>
              </p>
              <p>
                1. The first thing that we need to do is to install React
                Helmet. So, in the terminal, run{' '}
                <strong>npm install --save react-helmet.</strong>
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
                  <code>{`npm install --save react-helmet`}</code>
                </pre>
              </p>
              <br />

              <p>
                Then we can verify that it has been installed by checking in the
                dependencies in the package.json file (line 4).
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`"dependencies": {
  "react": "^16.13.1",
  "react-dom": "^16.13.1",
  "react-helmet": "^6.0.0",
  "react-router-dom": "^5.2.0",
},`}
                  </code>
                </pre>
              </p>
              <br />

              <p>
                2. The next thing we need to do is to import React Helmet into
                our application, wherever we want to use it. In this case, we're
                going to be using it in our Home Page component, as well as in
                our Guides Page component. I have them both as separate files
                (Home.js and Guides.js), so I'm going to import React Helmet
                into each of these files (line 2). So, for both Home.js and
                Guides.js, it's going to look like this. If your app has, for
                example, a total of five pages, and you plan on customizing the
                title of each of those five pages, then you will need to import
                React Helmet into each of those five files.
              </p>

              <p>
                <pre>
                  <code className='language-javascript'>
                    {`import React from 'react';
import { Helmet } from 'react-helmet';`}
                  </code>
                </pre>
              </p>
              <br />

              <p>
                3. So, now that we've brought in React Helmet, we need to use
                it. This is the point where we customize our title. And we're
                going to use this inside of our component (in this case, our
                Home component). And we do this at the top, right after the{' '}
                <strong>return</strong> and the first open {`<div>`} tag. Notice
                that we add our customized title, "CoderGuides | Home", inside
                the {`<title>`} tag (line 8), which in turn goes inside the
                opening and closing {`<Helmet>`} tags.
              </p>

              <p>
                <pre>
                  <code className='language-javascript'>
                    {`import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>CoderGuides | Home</title>
      </Helmet>
        <div>
          <h3>Welcome to CoderGuides</h3>
            -- REST OF CODE --`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                And that's it. Now when we go to the browser, we can see our
                customized title in the tab.
              </p>
              <p>
                <img
                  src={title01}
                  className='img-fluid mb-3'
                  title='Example of Document Title'
                  alt='Example of Document Title'
                />
              </p>
              <br />
              <p>
                And then for the Guides Page component, we do the same thing,
                but change the title accordingly (line 8).
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`import React from 'react';
import { Helmet } from 'react-helmet';

const Guides = () => {
  return (
    <div>
      <Helmet>
        <title>CoderGuides | Guides</title>
      </Helmet>
        <div>
          <h3>Guides</h3>
            -- REST OF CODE --`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                And when we check in the browser, we get our customized title in
                the tab.
              </p>

              <p>
                <img
                  src={title02}
                  className='img-fluid mb-3'
                  title='Example of Document Title'
                  alt='Example of Document Title'
                />
              </p>
              <br />
              <p>
                And that's all there is to it. So, to customize the title for
                all your pages, just repeat the same steps for each page you
                want to customize the title to.
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

export default AlertMessages;
