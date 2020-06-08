import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
// import guides from '../../img/guides.webp';
// import shorts from '../../img/shorts.webp';

import coderguides from '../../img/CoderGuides.webp';

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
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <p>
                Welcome to CoderGuides. This site is dedicated to guides and
                notes on various topics related to web development. I originally
                created these notes to help me throughout my web development
                journey. But I decided to create this site to leave the notes
                I've created in hopes of helping others. I realize that there
                may be more than one way to tackle the problems put forth here,
                and that these are not the only ways to approach the presented
                issues. And I am aware that what may work for some may not work
                for others. But this is what helped me, and perhaps others may
                find the information here useful.
              </p>
              <p>
                This site is currently divided into two sections: Guides and
                Notes. Feel free to take a look around and share with others.
              </p>

              {/* <br /> */}

              <Button
                className='button'
                id='guides-btn'
                variant='success'
                href='/guides'
                style={{ marginRight: '5px', marginBottom: '40px' }}
              >
                Go to Guides
              </Button>
              <Button
                className='button'
                id='shorts-btn'
                variant='success'
                href='/notes'
                style={{ marginRight: '5px', marginBottom: '40px' }}
              >
                Go to Notes
              </Button>
            </Col>

            <Col md={6}>
              <Image
                src={coderguides}
                // alt='CoderGuides'
                // title='CoderGuides'
                style={{
                  width: '100%',
                  height: 'auto',
                  // float: 'right',
                }}
                fluid
              />
            </Col>
          </Row>

          {/* <Row>
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
                the information here useful. This site is currently divided into
                two sections: Guides and Shorts. Feel free to take a look around
                and share with others.
              </p>
              <br />
            </Col>
          </Row> */}

          {/* <Row>
            <Col md={6}>
              <Card style={{ marginBottom: '40px' }}>
                <Card.Img variant='top' src={guides} />
                <Card.Body>
                  <Card.Title>
                    <strong>Guides</strong>
                  </Card.Title>
                  <Card.Text>
                    Check out the Guides section for explanations on various
                    topics, such as how to add Open Graph meta tags to Your App
                    or Website.
                  </Card.Text>
                  <Button
                    className='button'
                    id='guides-btn'
                    variant='success'
                    href='/guides'
                  >
                    Go to Guides
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card style={{ marginBottom: '40px' }}>
                <Card.Img variant='top' src={shorts} />
                <Card.Body>
                  <Card.Title>
                    <strong>Shorts</strong>
                  </Card.Title>
                  <Card.Text>
                    In the Shorts section, you'll find quick tips, such as how
                    to remove unwanted whitespace in your content in the browser
                    in React.
                  </Card.Text>
                  <Button
                    className='button'
                    id='shorts-btn'
                    variant='success'
                    href='/shorts'
                  >
                    Go to Shorts
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row> */}
          <hr />
          <Row>
            <Col md={12}>
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
