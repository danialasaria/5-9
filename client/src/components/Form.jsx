import React, { Component } from 'react';
import { TextField, Button,InputAdornment } from '@material-ui/core';
// import { InputAdornment } from '@mui/material';
// import InputAdornment from '@mui/material/InputAdornment';
import axios from 'axios';

class Form extends Component {
  state = {
    name: '',
    price: '',
    lessonDate: ''
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  submit = e => {
    e.preventDefault();
    const { name, price, lessonDate } = this.state;
    axios({
      url: '/add',
      method: 'POST',
      data: {
        name,
        price,
        lessonDate,
      }
    })
      .then((response) => {
        this.props.addUser(response.data);
        this.setState({
          name: '',
          price: '',
          lessonDate: ''
        });
      })
      .catch(() => alert('Failed uploading data'))
  };
  render() {
    return (
      <form className="form noValidate" autoComplete="off" onSubmit={this.submit}>
        <h2>Log your lessons</h2>
        <TextField
          id="standard-dense"
          value={this.state.name}
          label="Name"
          name="name"
          onChange={this.handleChange}
        />
        <TextField
          name="lessonDate"
          value={this.state.lessonDate}
          id="standard-dense"
          onChange={this.handleChange}
          label="Date"
        />

        <TextField
          name="price"
          value={this.state.price}
          id="standard-dense"
          onChange={this.handleChange}
          label="Price"
        />
          
        <Button variant="contained" color="primary" onClick={this.submit}> Submit </Button>

      </form>
    );
  }
}

export default Form;
