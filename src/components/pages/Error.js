import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Error = () => {
  return (
    <div>
      <Helmet>
        <title>CoderGuides | Error</title>
      </Helmet>
      <Container fluid>
        <Row>
          <Col md={12}>
            <div id='error-msg'>
              <h2 className='text-center'>
                <strong>Oops!</strong>
              </h2>
              <p></p>
              <p className='text-center'>404 Page Not Found.</p>
              <div id='back-div'>
                <a class='btn btn-success btn-sm' id='error-btn' href='/home'>
                  <i className='fa fa-home'></i> Take Me Home
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Error;
