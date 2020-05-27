import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import bg from '../../img/bright-background.webp';

const LandingPage = () => {
  return (
    <div>
      <Helmet>
        <title>CoderGuides</title>
        <style type='text/css'>{`
        body {
          background-color: #26231e;
        }

        .container {
          max-width: 100%;
          height: 100%;
          margin: auto;
          overflow: hidden;
          padding: 0;
        }
        
        .navbar,
        .footer {
          display:none;
        }
    `}</style>
      </Helmet>
      <Container className='container' fluid>
        <Row>
          <Col md={12}>
            <header
              id='landing-header'
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h1 id='landing-msg'>
                <a id='landing' href='/home'>
                  CoderGuides
                </a>
              </h1>
            </header>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
