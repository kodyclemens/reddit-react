import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { searchReddit } from '../actions/index';

class SearchForm extends Component {

  state = {
    query: '',
    amount: 10
  };

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchReddit(this.state.query, this.state.amount)
  };

  handleSlider = event => {
    this.setState({
      amount: event.target.value 
    })
  }

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
          <label>Search for {this.state.amount} posts</label>
          <br></br>
          <input type="range" min="10" max="100" value={this.state.amount} className="slider" id="myRange" onChange={this.handleSlider} ></input>
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
  searchReddit: (query, amount) => dispatch(searchReddit(query, amount))
});

export default connect(null, mapDispatchToProps)(SearchForm);