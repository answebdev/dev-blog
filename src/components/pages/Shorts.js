import React from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import placeholder2 from '../../img/placeholder2.png';

const Shorts = () => {
  return (
    <div>
      <Helmet>
        <title>Dev Blog | Shorts</title>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <Row>
          <Col md={12}>
            <h3>
              <strong>Shorts</strong>
            </h3>
            <p>Quick tips, tricks, and hacks.</p>
            <hr />
            <br />
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card style={{ marginBottom: '40px' }}>
              <Card.Body>
                <Card.Title>
                  <strong>Removing Unwanted Whitespace in React</strong>
                </Card.Title>

                <Image
                  src={placeholder2}
                  style={{
                    width: '35%',
                    height: 'auto',
                    float: 'right',
                    marginLeft: '10px',
                  }}
                  fluid
                />
                <Card.Text>
                  <p>
                    I came across this issue when I was working on a project in
                    React. The problem was that I kept getting unwanted
                    whitespace in my content in the browser, even when I didn't
                    seem to have any whitespace in my content in the text
                    editor.
                  </p>
                </Card.Text>
                <Button
                  className='button'
                  variant='success'
                  href='/shorts/removing-unwanted-whitespace-in-react'
                  style={{ marginRight: '5px' }}
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <br />
      </Container>
    </div>
  );
};

export default Shorts;
