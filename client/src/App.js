import React, { Component } from 'react';
import Form from './components/Form';
import DisplayLessons from './components/DisplayLessons';
import axios from 'axios';
import './App.css';
class App extends Component {
  state = {
    lessons: []
  }

  componentDidMount = () => {
    this.fetchLessons();
  };

  fetchLessons = () => {
    axios.get('/lessons')
      .then((response) => {
        const { lessons } = response.data;
        this.setState({ lessons: [...this.state.lessons, ...lessons] })
      })
      .catch(() => alert('Error fetching new lessons'));
  };


  addLesson = ({ name, price, lessonDate }) => {
    this.setState({
      lessons: [...this.state.lessons, { name, price, lessonDate }]
    });
  };

  render() {
    return (
      <div className="App">
        <Form addLesson={this.addLesson}/>
        < DisplayLessons lessons={this.state.lessons} />

      </div>
    );
  }
}

export default App;
