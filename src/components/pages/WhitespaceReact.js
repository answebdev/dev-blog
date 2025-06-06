import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ScrollUpButton from 'react-scroll-up-button';
import { InlineShareButtons } from 'sharethis-reactjs';
import ws1 from '../../img/ws01.webp';
import ws2 from '../../img/ws02.webp';
import ws3 from '../../img/ws03.webp';
import ws4 from '../../img/ws04.webp';
import ws5 from '../../img/ws05.webp';
import ws6 from '../../img/ws06.webp';
import ws7 from '../../img/ws07.webp';
import ws8 from '../../img/ws08.webp';
import whitespace from '../../pdf/whitespace.pdf';

const WhitespaceReact = () => {
  return (
    <div>
      <Helmet>
        <title>CoderGuides | Removing Unwanted Whitespace in React</title>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <h3>
                <strong>Removing Unwanted Whitespace in React</strong>
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
                    'https://coderguides.com/notes/removing-unwanted-whitespace-in-react', // (defaults to current url)
                  image: 'https://bit.ly/2CMhCMC', // (defaults to og:image or twitter:image)
                  description:
                    'Guides and notes on various topics related to web development', // (defaults to og:description or twitter:description)
                  title: 'CoderGuides', // (defaults to og:title or twitter:title)
                  message:
                    'https://coderguides.com/notes/removing-unwanted-whitespace-in-react', // (only for email sharing)
                  subject: 'CoderGuides: Removing Unwanted Whitespace in React', // (only for email sharing)
                  username: '', // (only for twitter sharing)
                }}
              />
              <br />
              <p>
                <strong>Problem: </strong>Unwanted whitespace in the browser in
                a React app.
              </p>

              <p>
                <a
                  src={whitespace}
                  href={whitespace}
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
                I came across this issue when I was working on a project in
                React. You can see here that there is an extra space added
                between the words "click" and "here", and between "here" and the
                period.
              </p>
              <p>
                <img
                  src={ws1}
                  className='img-fluid mb-3'
                  title='Detail of Home Page'
                  alt='Detail of Home Page'
                />
              </p>
              <br />
              <p>
                This is what the code looks like. The indentation is from the
                text editor.
              </p>
              <p>
                <img
                  src={ws2}
                  className='img-fluid mb-3'
                  title='Code Detail'
                  alt='Code Detail'
                />
              </p>
              <br />
              <p>
                And even if you remove the whitespace manually in the text
                editor, the result is the same and you still get the extra
                spaces in the browser.
              </p>
              <p>
                <img
                  src={ws3}
                  className='img-fluid mb-3'
                  title='Code Detail'
                  alt='Code Detail'
                />
              </p>
              <br />
              <p>
                1. Here is a hack you can try. Put the text that has the extra
                whitespace in the browser inside a <strong>span</strong> tag. In
                this example, the word “here” (line 26) and the final period
                (line 28) have been put inside a <strong>span</strong> tag.
              </p>
              <p>
                <img
                  src={ws4}
                  className='img-fluid mb-3'
                  title='Code Detail'
                  alt='Code Detail'
                />
              </p>
              <br />
              <p>
                2. Next, add inline styling for each of these and do a{' '}
                <strong>marginLeft </strong>
                of "-10px" (lines 26 and 28):
              </p>
              <p>
                <img
                  src={ws5}
                  className='img-fluid mb-3'
                  title='Code Detail'
                  alt='Code Detail'
                />
              </p>
              <br />
              <p>
                And now the unwanted whitespace has been removed from between
                the word "click" and the period. But now there is no space
                between the words "click" and "here":
              </p>
              <p>
                <img
                  src={ws6}
                  className='img-fluid mb-3'
                  title='Detail of Home Page'
                  alt='Detail of Home Page'
                />
              </p>
              <br />
              <p>
                3. The only thing left to do is to manually add a space in the
                text editor before the word here (line 26):
              </p>
              <p>
                <img
                  src={ws7}
                  className='img-fluid mb-3'
                  title='Code Detail'
                  alt='Code Detail'
                />
              </p>
              <br />
              <p>
                And now the problem is solved. Now there is just one space
                between the words "click" and "here". And there is no longer any
                unwanted whitespace:
              </p>
              <p>
                <img
                  src={ws8}
                  className='img-fluid mb-3'
                  title='Detail of Home Page'
                  alt='Detail of Home Page'
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

export default WhitespaceReact;
