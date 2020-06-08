import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Error = () => {
  return (
    <div>
      <Helmet>
        <title>CoderGuides | Error</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css'
        />
        <style type='text/css'>{`
        body {
          background-color: #ff6347;
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
          display: none;
        }

        h2,
        p {
          color: #ffffff;
        }

        h2 {
          letter-spacing: 1.5px;
        }

        p {
          font-size: 20px;
        }

        #error-msg {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        #error-btn {
          font-family: 'Quicksand', sans-serif;
          font-weight: 700;
          background: #ffffff;
          border-color: #ffffff;
          color: #ff6347;
          margin-right: 5px;
          margin-bottom: 40px;
        }
    `}</style>
      </Helmet>
      <Container fluid>
        <Row>
          <Col md={12}>
            <div id='error-msg'>
              <h2 className='text-center animate__animated animate__hinge'>
                <strong>Oops!</strong>
              </h2>
              <br />
              <p className='text-center'>404 Page Not Found.</p>
              <br />
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
