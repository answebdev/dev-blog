import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>CoderGuides | Home</title>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <h3>
                <strong>Welcome to CoderGuides</strong>
              </h3>
              <hr />
              <p>
                Welcome to CoderGuides. This site is dedicated to guides and
                notes on various topics related to web development. I originally
                created these notes to help me throughout my web development
                journey. But I decided to create this site to leave the notes
                I've created in hopes of helping others. I realize that there
                may be more than one way to tackle the problems put forth here,
                and that these are not the only ways to approach the presented
                issues. But this is what helped me, and perhaps others may find
                the information here useful.
              </p>
              <p>
                This site is currently divided into two sections: Guides and
                Shorts. The Guides section is intended for brief explanations on
                various topics, such as how to set up Netlify forms in React.
                The Shorts section is intended for quick tips, such as how to
                remove unwanted whitespace in React. To go to the Guides page,
                click{' '}
                <a className='click' href='/guides'>
                  <span style={{ marginLeft: '-10px' }}> here</span>
                </a>
                <span style={{ marginLeft: '-10px' }}>.</span>
                &nbsp;To go to the Shorts page, click{' '}
                <a className='click' href='/shorts'>
                  <span style={{ marginLeft: '-10px' }}> here</span>
                </a>
                <span style={{ marginLeft: '-10px' }}>.</span>
              </p>
              {/* <p>
                For more information, feel free to visit my website
                <a
                  className='click'
                  href='https://adolfschmuck.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> here</span>
                </a>
                <span style={{ marginLeft: '-10px' }}>.</span>
              </p> */}

              <p>
                &copy; 2020 CoderGuides | CoderGuides was created and developed
                by{' '}
                <a
                  className='click'
                  href='https://adolfschmuck.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> Adolf Schmuck</span>
                </a>
                <span style={{ marginLeft: '-10px' }}>.</span>
              </p>

              <p id='disclaimer'>
                CoderGuides contains links to other websites. These links are
                not endorsements of any products or services found on such
                sites, and no information on such sites has been endorsed or
                approved by CoderGuides.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Home;
