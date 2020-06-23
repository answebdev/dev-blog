import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

export class ContactForm extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Helmet>
            <title>CoderGuides | Contact</title>
          </Helmet>
          <Container className='container' fluid>
            <br />
            <div className='content-div'>
              <Row>
                <Col md={3}></Col>
                <Col md={6}>
                  <h3>
                    <strong>Contact Form</strong>
                  </h3>
                  <hr />
                  <div className='content'>
                    <p>
                      For ideas or suggestions on how the site can be improved,
                      or if you spot a bug or an error, feel free to send a
                      message here.
                    </p>
                    <Form
                      action='/success'
                      name='coder-guides-contact-form'
                      method='POST'
                      data-netlify='true'
                    >
                      <input
                        type='hidden'
                        name='form-name'
                        value='coder-guides-contact-form'
                      />
                      <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type='name'
                          name='name'
                          placeholder='Name'
                        />
                      </Form.Group>
                      <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type='email'
                          name='email'
                          placeholder='email@example.com'
                        />
                        <Form.Text className='text-muted'>
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>
                      <Form.Group controlId='exampleForm.ControlTextarea1'>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as='textarea' name='message' rows='5' />
                      </Form.Group>
                      <div className='field'>
                        <div data-netlify-recaptcha='true'></div>
                      </div>
                      <Button
                        className='actions'
                        variant='success'
                        type='submit'
                        value='Send Message'
                        id='submit-btn'
                      >
                        Send Message
                      </Button>
                    </Form>
                    <br />
                  </div>
                </Col>
                <Col md={3}></Col>
              </Row>
            </div>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default ContactForm;
