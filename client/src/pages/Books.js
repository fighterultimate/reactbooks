import React, { Component } from "react";
import ViewBtn from "../components/ViewBtn";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { stat } from "fs";


class Books extends Component {
  state = {
    search:"",
    results:[],
  };

  componentDidMount() {
    this.searchBooks();
  }

  searchBooks = query => {
    API.search(query)
      .then(res => {
        this.setState({ results: res.data.items })}, console.log(this.state.results))
      .catch(err => console.log(err));
  };
  

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    const css ={
      color:"red",
      textAlign:"center",
      fontSize:"58"
    }
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
           
            </Jumbotron>
          </Col>
             <h1 style={css}> Welcome to Google Book Search ,search our neverending library</h1>
              <h2></h2>
          <Col size="md-12 sm-12">
            <form>
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!(this.state.search)}
                onClick={this.handleFormSubmit}
              >
                Search Book
              </FormBtn>
            </form>
          </Col>
           
          <Col size="md-12 sm-12">
          <h2>Results</h2>
            {this.state.results.length ? (
              <List>
                {this.state.results.filter(book=>book.title!="Undefined").map(book => {
              return <ListItem key={book.id}>
                <strong>
                  {book.volumeInfo.title} by {book.volumeInfo.authors&&book.volumeInfo.authors.join(', ')}
                </strong>
                <ViewBtn>
                  <Link to={"/book/" + book.id}></Link>
                </ViewBtn>
                <SaveBtn>
                  <Link to={"/books/" + book.id}></Link>
                </SaveBtn>


              </ListItem>
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col> 
          
        </Row>
      </Container>
    );
  }
}

export default Books;
