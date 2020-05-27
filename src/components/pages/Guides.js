import React from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import netlifyForms from '../../img/netlify-forms.png';

const Guides = () => {
  return (
    <div>
      <Helmet>
        <title>Dev Blog | Guides</title>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <h3>
                <strong>Guides</strong>
              </h3>
              <p>Mini-guides on a variety of topics.</p>
              <hr />
              <br />
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Card style={{ marginBottom: '40px' }}>
                <Card.Body>
                  <Card.Title>
                    <Image
                      src={netlifyForms}
                      style={{
                        width: '35%',
                        height: 'auto',
                        float: 'right',
                        marginLeft: '10px',
                      }}
                      fluid
                    />
                    <strong>Setting up a Netlify Form in React</strong>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <p>
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.
                    </p>
                  </Card.Text>
                  <Button
                    className='button'
                    id='guides-btn'
                    variant='success'
                    href='/guides/setting-up-a-netlify-form-in-react'
                    style={{ marginRight: '5px' }}
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Guides;
