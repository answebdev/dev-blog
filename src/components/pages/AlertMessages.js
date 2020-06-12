import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ScrollUpButton from 'react-scroll-up-button';
import { InlineShareButtons } from 'sharethis-reactjs';
import alert01 from '../../img/alert01.webp';
import alert02 from '../../img/alert02.webp';
import alert03 from '../../img/alert03.webp';
import alertMessage from '../../pdf/alert-message.pdf';

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
        <title>CoderGuides | How to Beautify Your Alert Messages</title>
        <link
          rel='stylesheet'
          href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/styles/monokai.min.css'
        ></link>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <h3>
                <strong>How to Beautify Your Alert Messages</strong>
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
                    'https://coderguides.com/guides/how-to-beautify-your-alert-messages', // (defaults to current url)
                  image: 'https://bit.ly/2CMhCMC', // (defaults to og:image or twitter:image)
                  description:
                    'Guides and notes on various topics related to web development', // (defaults to og:description or twitter:description)
                  title: 'CoderGuides', // (defaults to og:title or twitter:title)
                  message:
                    'https://coderguides.com/guides/how-to-beautify-your-alert-messages', // (only for email sharing)
                  subject: 'CoderGuides: How to Beautify Your Alert Messages', // (only for email sharing)
                  username: '', // (only for twitter sharing)
                }}
              />
              <br />
              <p>
                <strong>Objective: </strong>To replace the default JavaScript
                alert message with a more attractive alternative.
              </p>

              <p>
                <a
                  src={alertMessage}
                  href={alertMessage}
                  rel='noopener noreferrer'
                  target='_blank'
                  style={{ padding: '0' }}
                >
                  <i
                    className='fas fa-file-download'
                    style={{ color: '#3e63bd' }}
                  >
                    &nbsp;&nbsp;
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
                In this article, we're going to replace the default JavaScript
                alert message with a message that looks more attractive. The
                default alert message looks like this:
              </p>
              <p>
                <img
                  src={alert01}
                  className='img-fluid mb-3'
                  title='Default JavaScript Alert Message'
                  alt='Default JavaScript Alert Message'
                />
              </p>
              <br />
              <p>
                Our goal here is to replace it with a message that looks like
                this:
              </p>
              <p>
                <img
                  src={alert02}
                  className='img-fluid mb-3'
                  title='SweetAlert Message'
                  alt='SweetAlert Message'
                />
              </p>
              <br />
              <p>
                To do this, we're going to use a package called
                <a
                  className='click'
                  href='https://sweetalert.js.org/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> SweetAlert</span>
                </a>
                <span style={{ marginLeft: '-10px' }}>.</span>
              </p>
              <p>
                1. The first thing we need to do is to install it. So, in the
                terminal, run <strong>npm install --save sweetalert.</strong>
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
                  <code>{`npm install --save sweetalert`}</code>
                </pre>
              </p>
              <br />

              <p>
                You can verify that it has been installed by checking in the
                dependencies in your package.json file (line 6).
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`"dependencies": {
  "bootstrap": "^4.4.1",
  "react": "^16.13.1",
  "react-dom": "^16.13.1",
  "react-router-dom": "^5.1.2",
  "sweetalert": "^2.1.2",
},`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                2. The next thing we need to do is to import it into our
                application, wherever we want to use it. In this example, I'm
                using SweetAlert in one of my React components (line 2).
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`import React, { useContext } from 'react';
import swal from 'sweetalert';
import PropTypes from 'prop-types';`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                3. All we need to do now is to add the SweetAlert message to our
                code. In order to do this, we simply call the{' '}
                <strong>swal</strong> function (make sure it's called after the
                DOM has loaded). A basic example would look like this:
              </p>
              <p>
                <img
                  src={alert03}
                  className='img-fluid mb-3'
                  title='SweetAlert Message'
                  alt='SweetAlert Message'
                />
              </p>
              <br />
              <p>
                So, all we do here is call the <strong>swal</strong> function,
                and then add in our message. In this case, our message is,
                "Hello World!"
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`swal("Hello world!");`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                We can also pass in other arguments in order to further
                customize our message. In this example, taken from the
                introductory SweetAlert example from above, we again start by
                calling the <strong>swal</strong> function (line 1). The first
                argument passed in is for the title of the message, "No
                Students" (line 2). The second argument passed in is for the
                text of the message, "You currently have no students on your
                roster. Please click Home and add students to your roster to use
                the Generator feature" (lines 3-5). The third argument is for
                the icon of the alert, "warning" (line 6), of which there are
                four predefined ones: "warning", "error", "success", and "info".
                And by setting <strong>dangerMode</strong> to "true" (line 7),
                the focus will automatically be set on the cancel button instead
                of the confirm button, and the confirm button will be red
                instead of blue to emphasize the dangerous action. For more
                details on getting started and customization, check out the
                SweetAlert guides
                <a
                  className='click'
                  href='https://sweetalert.js.org/guides/#getting-started'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> here</span>
                </a>
                <span style={{ marginLeft: '-10px' }}>.</span>
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`swal({
  title: 'No Students',
  text:
    'You currently have no students on your roster. Please click Home and
    add students to your roster to use the Generator feature.',
  icon: 'warning',
  dangerMode: true,
});`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                So, this is what our SweetAlert message looks like. And that's
                it. We now have a more attractive looking alert message.
              </p>
              <p>
                <img
                  src={alert02}
                  className='img-fluid mb-3'
                  title='SweetAlert Message'
                  alt='SweetAlert Message'
                />
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
