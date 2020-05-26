import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Dev Blog | Home</title>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <div className='content-div' style={{ marginBottom: '80px' }}>
          <Row>
            <Col md={12}>
              <h3>
                <strong>Welcome to Dev Blog</strong>
              </h3>
              <hr />
              <p>
                Welcome to the my web developer blog. This site is dedicated to
                notes of various topics intended to help those in need. I
                originally created these notes to help me as throughout my web
                development journey. But I decided to create this site to leave
                the notes I've created to help others who may have come gotten
                stuck along the way. I am aware that there may be more than one
                way to solve the problems that I put forth here, and that this
                is not the only way. But this is what helped me, and perhaps it
                can help others out as well.
              </p>
              <p>
                This site is currently divided into two sections: Guides and
                Shorts. Guides is intended for brief explanations of various
                topics, such as how to set up Netlify forms in React. Shorts is
                intended for quick tricks or hacks, such as how to remove
                unwanted whitespace in React.
              </p>
              <p>
                Thank you for visiting Dev Blog. I hope you find something here
                that is useful and helps you out. To go to the Guides page,
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
              <p>
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
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Home;
