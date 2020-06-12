import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ScrollUpButton from 'react-scroll-up-button';
import { InlineShareButtons } from 'sharethis-reactjs';
import rp1 from '../../img/rp01.webp';
import rp2 from '../../img/rp02.webp';
import rp3 from '../../img/rp03.webp';
import rp4 from '../../img/rp04.webp';
import rp5 from '../../img/rp05.webp';
import components from '../../pdf/components.pdf';

const ReactComponents = () => {
  return (
    <div>
      <Helmet>
        <title>
          CoderGuides | How to Not Render a Component on a Particular Page in
          React
        </title>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <h3>
                <strong>
                  How to Not Render a Component on a Particular Page in React
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
                    'https://coderguides.com/notes/how-to-not-render-a-component-on-a-paricular-page-in-react', // (defaults to current url)
                  image: 'https://bit.ly/2CMhCMC', // (defaults to og:image or twitter:image)
                  description:
                    'Guides and notes on various topics related to web development', // (defaults to og:description or twitter:description)
                  title: 'CoderGuides', // (defaults to og:title or twitter:title)
                  message:
                    'https://coderguides.com/notes/how-to-not-render-a-component-on-a-paricular-page-in-react', // (only for email sharing)
                  subject:
                    'CoderGuides: How to Not Render a Component on a Particular Page in React', // (only for email sharing)
                  username: '', // (only for twitter sharing)
                }}
              />
              <br />
              <p>
                <strong>Problem: </strong>Layout components rendering on pages
                you don't want them to.
              </p>

              <p>
                <a
                  src={components}
                  href={components}
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
                I was recently working on a project in React, and I had two
                different component folders: Pages and Layout. Inside the Layout
                folder, I had my Navbar component and my Footer component. The
                Navbar and Footer both rendered nicely on all my pages, which is
                what I wanted. However, I wanted my landing page to have a
                different layout and did not want to have the Navbar and Footer
                on my landing page. But after creating my landing page, sure
                enough, the Navbar and Footer were there.
              </p>
              <p>
                <img
                  src={rp1}
                  className='img-fluid mb-3'
                  title='Landing Page with Navbar'
                  alt='Landing Page with Navbar'
                />
              </p>

              <p>
                <img
                  src={rp2}
                  className='img-fluid mb-3'
                  title='Landing Page with Footer'
                  alt='Landing Page with Footer'
                />
              </p>
              <br />
              <p>
                I know that there are a number of ways to approach this. You can
                see a variety of approaches on Stack Overflow, as I did. I also
                tried different approaches, but did not succeed. I was able to
                find a solution to this with the help of{' '}
                <a
                  className='click'
                  href='https://www.npmjs.com/package/react-helmet'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> React Helmet</span>
                </a>
                <span style={{ marginLeft: '-10px' }}>
                  , a reusable React component that is used to manage changes to
                  the document head. I like React Helmet, and I was already
                  using it on this project to manage the titles that appear in
                  the browser tabs.
                </span>
              </p>
              <p>
                So, as I was already using React Helmet, I decided to try to use
                it for this too. The code below is a simplified version of the
                code for my landing page component (I removed the code for the
                component, since that is not the focus here), which I called
                Home.js.
              </p>
              <p>
                After installing React Helmet, I then brought it into my landing
                page, Home.js (line 3). Wrapping the title element inside the
                Helmet element (lines 9-11) allows us to give a title that will
                appear on the tab in the browser. This is what I was already
                using React Helmet for.
              </p>
              <p>
                <img
                  src={rp3}
                  className='img-fluid mb-3'
                  title='Code Detail'
                  alt='Code Detail'
                />
              </p>
              <br />

              <p>
                In order to deal with my component issue, I was able to use
                React Helmet to add CSS to only this component (lines 7-12).
                Specifically, I used the "display" property and set that to
                "none" for both the Navbar and Footer components (lines 8-10).
                And that's it. That fixed it. If I had done this in App.css
                (which is what I used for my project's global styles), then the
                styles would have gotten applied to all of the components, which
                is not what I wanted. Then the Navbar and Footer would not show
                on any of the pages. React Helmet allowed me to apply this CSS
                to only my landing page, which is what I wanted.
              </p>
              <p>
                <img
                  src={rp4}
                  className='img-fluid mb-3'
                  title='Code Detail'
                  alt='Code Detail'
                />
              </p>

              <br />
              <p>
                And as you can see, I no longer have the Navbar and Footer
                showing in my landing page, which is what I wanted.
              </p>
              <p>
                <img
                  src={rp5}
                  className='img-fluid mb-3'
                  title='Landing Page'
                  alt='Landing Page'
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

export default ReactComponents;
