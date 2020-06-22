import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ScrollUpButton from 'react-scroll-up-button';
import { InlineShareButtons } from 'sharethis-reactjs';
import favicon01 from '../../img/favicon01.webp';
import favicon02 from '../../img/favicon02.webp';
import favicon03 from '../../img/favicon03.webp';
import favicon04 from '../../img/favicon04.webp';
import favicon05 from '../../img/favicon05.webp';
import favicon06 from '../../img/favicon06.webp';
import favicon from '../../pdf/favicon.pdf';

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

const Favicon = () => {
  return (
    <div>
      <Helmet>
        <title>CoderGuides | Adding a Favicon to Your HTML Site</title>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <h3>
                <strong>Adding a Favicon to Your HTML Site</strong>
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
                    'https://coderguides.com/guides/adding-a-favicon-to-your-html-site', // (defaults to current url)
                  image: 'https://bit.ly/2CMhCMC', // (defaults to og:image or twitter:image)
                  description:
                    'Guides and notes on various topics related to web development', // (defaults to og:description or twitter:description)
                  title: 'CoderGuides', // (defaults to og:title or twitter:title)
                  message:
                    'https://coderguides.com/guides/adding-a-favicon-to-your-html-site', // (only for email sharing)
                  subject: 'CoderGuides: Adding a Favicon to Your HTML Site', // (only for email sharing)
                  username: '', // (only for twitter sharing)
                }}
              />
              <br />
              <p>
                <strong>Objective: </strong>To add a favicon to your HTML site.
              </p>

              <p>
                <a
                  src={favicon}
                  href={favicon}
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
                As defined on
                <a
                  className='click'
                  href='https://www.w3.org/2005/10/howto-favicon'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> W3C</span>
                </a>
                <span style={{ marginLeft: '-10px' }}>
                  , a favicon is a "graphic image (icon) associated with a
                  particular Web page and/or Web site". It is the image (icon)
                  that appears in a browser's title bar or a page's tab, such as
                  in the image you see below to the left of the text,
                  "CoderGuides":
                </span>{' '}
              </p>
              <p>
                This article explains how to add a favicon to your HTML site.
              </p>
              <p>
                <img
                  src={favicon01}
                  className='img-fluid mb-3'
                  title='Example of Favicon'
                  alt='Example of Favicon'
                />
              </p>
              <br />
              <p>
                When you create a brand new page in HTML and go to the browser,
                you will not see a favicon.
              </p>
              <p>
                <img
                  src={favicon02}
                  className='img-fluid mb-3'
                  title='Example of Favicon'
                  alt='Example of Favicon'
                />
              </p>
              <br />
              <p>It may look like this if you are using Google Chrome.</p>
              <p>
                <img
                  src={favicon03}
                  className='img-fluid mb-3'
                  title='Example of Favicon'
                  alt='Example of Favicon'
                />
              </p>
              <br />
              <p>
                In order to add a favicon to your site, the first thing you need
                is an image. The is the image we're going to be using for our
                favicon in this example. I've named the file of this image
                "mysite.png".
              </p>
              <p>
                <img
                  src={favicon04}
                  className='img-fluid mb-3'
                  title='Image for Favicon'
                  alt='Example of Favicon'
                />
              </p>
              <br />
              <p>
                To add this image as the favicon, we need to go to the{' '}
                {`<head>`} of our code and add the <strong>rel</strong>{' '}
                attribute value of "icon", along with image file in the{' '}
                <strong>href</strong> attribute. The <strong>rel</strong>{' '}
                attribute is used to define the value. In this case, the value
                is defined as the "icon" representing the current document. Make
                sure to use the correct path for your image inside the{' '}
                <strong>href</strong> attribute. In this example, the
                "mysite.png" image is in a folder called{' '}
                <strong>images,</strong> which is itself inside a folder called{' '}
                <strong>assets</strong> (line 6). Make sure to do this for each
                HTML page of your website, so that the favicon appears on every
                page in the browser.
              </p>
              <p>
                <pre>
                  <code className='language-html'>
                    {`<!DOCTYPE html>
<html lang="en">

<head>
  <title>MySite</title>
  <link rel="icon" href="assets/images/mysite.png">
  -- REST OF CODE --
</head>`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                And that's all you have to do. And now when we refresh the page
                in the browser, we can see our favicon:
              </p>
              <p>
                <img
                  src={favicon05}
                  className='img-fluid mb-3'
                  title='Example of Favicon'
                  alt='Example of Favicon'
                />
              </p>
              <br />
              <p>And in Google Chrome, it would look like this:</p>
              <p>
                <img
                  src={favicon06}
                  className='img-fluid mb-3'
                  title='Example of Favicon'
                  alt='Example of Favicon'
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

export default Favicon;
