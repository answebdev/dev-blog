import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ScrollUpButton from 'react-scroll-up-button';
import rp1 from '../../img/rp01.webp';
import rp2 from '../../img/rp02.webp';
import rp3 from '../../img/rp03.png';
import rp4 from '../../img/rp04.png';
import rp5 from '../../img/rp05.webp';
import components from '../../img/components.pdf';

const ReactComponents = () => {
  return (
    <div>
      <Helmet>
        <title>
          Dev Blog | How to Not Render a Component on a Particular Page in React
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
              <br />
              <p>
                <strong>The problem: </strong>Layout components rendering on
                pages you don't want them to.
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
                    &nbsp;&nbsp;
                    <span
                      style={{
                        fontFamily: 'Oxygen',
                        fontSize: '16px',
                        color: '#3e63bd',
                      }}
                    >
                      Download The Notes Here
                    </span>
                  </i>
                </a>
              </p>

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
                  alt='Landing Page 1'
                />
              </p>

              <p>
                <img
                  src={rp2}
                  className='img-fluid mb-3'
                  alt='Landing Page 2'
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
                  alt='Code in Home Page Component 1'
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
                  alt='Code in Home Page Component 2'
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
                  alt='Landing Page 3'
                />
              </p>
            </Col>
          </Row>

          <div>
            <ScrollUpButton
              style={{
                marginBottom: '33px',
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