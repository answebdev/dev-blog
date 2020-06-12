import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ScrollUpButton from 'react-scroll-up-button';
import { InlineShareButtons } from 'sharethis-reactjs';
import ng1 from '../../img/ng01.webp';
import ng2 from '../../img/ng02.webp';
import ng3 from '../../img/ng03.webp';
import ng4 from '../../img/ng04.webp';
import ng5 from '../../img/ng05.webp';
import rp5 from '../../img/rp05.webp';
import ng7 from '../../img/ng07.webp';
import ng8 from '../../img/ng08.webp';
import nextGen from '../../pdf/next-gen.pdf';

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

const NextGen = () => {
  return (
    <div>
      <Helmet>
        <title>
          CoderGuides | Using Next-gen Image Formats to Enhance Your App's
          Performance (React)
        </title>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <h3>
                <strong>
                  Using Next-gen Image Formats to Enhance Your App's Performance
                  (React)
                </strong>
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
                    'https://coderguides.com/guides/using-next-gen-image-formats-to-enhance-your-apps-performance', // (defaults to current url)
                  image: 'https://bit.ly/2CMhCMC', // (defaults to og:image or twitter:image)
                  description:
                    'Guides and notes on various topics related to web development', // (defaults to og:description or twitter:description)
                  title: 'CoderGuides', // (defaults to og:title or twitter:title)
                  message:
                    'https://coderguides.com/guides/using-next-gen-image-formats-to-enhance-your-apps-performance', // (only for email sharing)
                  subject: `CoderGuides: Using Next-gen Image Formats to Enhance Your App's Performance (React)`, // (only for email sharing)
                  username: '', // (only for twitter sharing)
                }}
              />
              <br />
              <p>
                <strong>Problem: </strong>Slow loading time on an application's
                pages.
              </p>

              <p>
                <a
                  src={nextGen}
                  href={nextGen}
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
                <strong>Introduction</strong>
              </p>
              <p>
                There are a number of possible reasons why the pages on your
                application may load slowly. This guide focuses on using WebP
                versions of your images to help your applications load faster.
                This guide was created alongside a React application, but the
                ideas in this guide can apply to other applications and websites
                besides React. According to a web.dev article
                <a
                  className='click'
                  href='https://web.dev/uses-webp-images/?utm_source=lighthouse&utm_medium=devtools'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> here</span>
                </a>
                <span style={{ marginLeft: '-10px' }}>,</span> "JPEG 2000, JPEG
                XR, and WebP are image formats that have superior compression
                and quality characteristics compared to their older JPEG and PNG
                counterparts. Encoding your images in these formats rather than
                JPEG or PNG means that they will load faster and consume less
                cellular data."
              </p>
              <p>
                <br />
                <strong>Lighthouse</strong>
              </p>
              <p>
                Before continuing, let's take a look at how Lighthouse (an
                open-source, automated tool for improving the performance,
                quality, and correctness of your web apps) can help us here. For
                best results, run Lighthouse in incognito mode. While in Chrome,
                run Control + Shift + N to open incognito mode. Then, go to your
                URL, open the developer tools, and select Audits.
              </p>
              <p>
                <img
                  src={ng1}
                  className='img-fluid mb-3'
                  title='Landing Page and Web Developer Tools'
                  alt='Landing Page and Web Developer Tools'
                />
              </p>
              <br />
              <p>Click on "Generate report":</p>
              <p>
                <img
                  src={ng2}
                  className='img-fluid mb-3'
                  title='Landing Page and Lighthouse'
                  alt='Landing Page and Lighthouse'
                />
              </p>
              <br />
              <p>
                <strong>The Problem</strong>
              </p>
              <p>
                If you have a large image in either <strong>.jpg</strong> or{' '}
                <strong>.png</strong> format (the image in the screenshot is
                2246 x 1473 pixels in size), it will take a long time to load.
                As you can see, Performance in Lighthouse is 78%, and it took
                36.91 s to load. Lighthouse suggests serving images in next-gen
                formats.
              </p>
              <p>
                <img
                  src={ng3}
                  className='img-fluid mb-3'
                  title='Landing Page and Lighthouse'
                  alt='Landing Page and Lighthouse'
                />
              </p>
              <br />
              <p>
                <strong>What To Do</strong>
              </p>
              <p>
                1. First, convert your image from <strong>.jpg/.png</strong> to
                a next-gen format using an online converter like
                <a
                  className='click'
                  href='https://image.online-convert.com/convert-to-webp'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> this one</span>
                </a>
                <span style={{ marginLeft: '-10px' }}>.</span> In this example,
                we’re using this converter to convert from <strong>.png</strong>{' '}
                to
                <strong>.webp.</strong>
              </p>
              <p>
                <img
                  src={ng4}
                  className='img-fluid mb-3'
                  title='Online Converter'
                  alt='Online Converter'
                />
              </p>
              <br />
              <p>
                2. After converting the image into a <strong>.webp</strong>{' '}
                format, put the image into the appropriate folder. In this case,
                it has been placed in the <strong>img </strong>
                folder.
              </p>
              <p>
                <img
                  src={ng5}
                  className='img-fluid mb-3'
                  title='Detail of Image Folder'
                  alt='Detail of Folder'
                />
              </p>
              <br />
              <p>
                3. Import the image with the new <strong>.webp</strong>{' '}
                extension (line 3).
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import skirt from '../../img/skirt.webp';

const Home = () => {
  return (
-- REST OF CODE --`}
                  </code>
                </pre>
              </p>
              <br />
              <p>4. And that’s it. Now it should work.</p>
              <p>
                <img
                  src={rp5}
                  className='img-fluid mb-3'
                  title='Landing Page'
                  alt='Landing Page'
                />
              </p>
              <br />
              <p>
                5. The load time should now be faster. And when checking on
                Lighthouse, the Performance score has improved and is now at
                90%. And we no longer get the message that suggests serving
                images in next-gen formats. And now when the pages on your app
                load, they should load faster.
              </p>
              <p>
                <img
                  src={ng7}
                  className='img-fluid mb-3'
                  title='Landing Page and Lighthouse'
                  alt='Landing Page and Lighthouse'
                />
              </p>
              <p>
                <img
                  src={ng8}
                  className='img-fluid mb-3'
                  title='Landing Page and Lighthouse'
                  alt='Landing Page and Lighthouse'
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

export default NextGen;
