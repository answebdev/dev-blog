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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <p>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
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
