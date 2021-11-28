import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ogimage from '../../img/cg-og.png';
import coderguides from '../../img/CoderGuides.webp';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>CoderGuides | Home</title>

        <meta property='og:image' content={ogimage} />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1024' />
        <meta property='og:image:height' content='1024' />
        <meta property='og:type' content='article' />
        <meta property='og:url' content='https://coderguides.com/home' />
        <meta property='og:title' content='CoderGuides | Home' />
        <meta
          property='og:description'
          content='Guides and notes on various topics related to web development.'
        />

        <meta
          name='description'
          content='CoderGuides is dedicated to guides and notes on various topics related to web development.'
        />
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
                journey. But I decided to create this site to make the notes
                I've created available, as well as to add more along the way, in
                hopes of helping others. I realize that there may be more than
                one way to tackle the problems put forth here, and that these
                are not the only ways to approach the presented issues. And I
                know that what may work for some may not work for others. But
                this is what helped me, and perhaps others may find the
                information here useful.
              </p>
              <p>
                This site is currently divided into two sections: Guides and
                Notes. Feel free to take a look around and share with others.
              </p>

              <Button
                className='button'
                id='guides-btn'
                variant='success'
                href='/guides'
              >
                Go to Guides
              </Button>
              <Button
                className='button'
                id='notes-btn'
                variant='success'
                href='/notes'
              >
                Go to Notes
              </Button>
            </Col>

            <Col md={6}>
              <Image
                src={coderguides}
                style={{
                  width: '100%',
                  height: 'auto',
                  // float: 'right',
                }}
                fluid
              />
            </Col>
          </Row>

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
