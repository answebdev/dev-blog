import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Success = () => {
  return (
    <div>
      <Helmet>
        <title>CoderGuides | Success</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css'
        />
        <style type='text/css'>{`
        body {
          font-family: 'Quicksand', sans-serif;
          background-color: #ffffff;
          color: #ff6347;
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

        h3,
        p {
          color: #ff6347;
        }

        h3 {
          letter-spacing: 1.5px;
          font-weight: 700;
        }

        p {
          font-size: 20px;
        }

        #success-msg {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        #success-btn {
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
            <div id='success-msg'>
              <h3 className='text-center'>Thank you!</h3>
              <br />

              <p className='text-center'>Your message has been sent.</p>
              <br />
              <div id='back-div'>
                <a class='btn btn-success btn-sm' id='back-btn' href='/contact'>
                  <i class='fas fa-pencil-alt'></i> Back to Form
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Success;
