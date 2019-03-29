import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { searchReddit } from '../actions/index';

class SearchForm extends Component {

  state = {
    query: ''
  };

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchReddit(this.state.query)
    this.setState({
      query: ''
    })
  };

  render() {
    return(
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Search Term
            </Form.Label>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Facebook stored plaintext passwords" onChange={this.handleChange} value={this.state.query} />
            </Col>
          </Form.Group>
  
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Search Reddit</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    )
  };
};

const mapDispatchToProps = dispatch => ({
  searchReddit: formData => dispatch(searchReddit(formData))
});

export default connect(null, mapDispatchToProps)(SearchForm);