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
      <div className="container text-center">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>
              Search Term
            </Form.Label>
            <Col>
              <Form.Control type="text" placeholder="pugs" onChange={this.handleChange} value={this.state.query} size="lg" maxLength="4" id="search-form" />
            </Col>
          </Form.Group>
          <label>Search for {this.state.amount} posts</label>
          <br></br>
          <input type="range" min="10" max="100" value={this.state.amount} className="slider" id="myRange" onChange={this.handleSlider} ></input>
          <Form.Group as={Row}>
            <Col>
              <Button type="submit" className="btn mx-auto">Search Reddit</Button>
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