import React from 'react';
import './App.css';
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:8080`
});

class App extends React.Component {
  state = {
    courses: []
  };
  componentDidMount() {
    this.getCourses();
  }
  constructor() {
    super();
    this.getCourses();
  }
  getCourses = async () => {
    let data = await api.get('/courses').then(({ data }) => data);

    this.setState({ courses: data });
  };

  createCourse = async () => {
    let res = await api.post('/', { title: 'Test', id: 4, author: 'test' });
    console.log(res);
    this.getCourses();
  };
  render() {
    return (
        <div>
          <button onClick={this.createCourse}>Create Course</button>
          {this.state.courses.map((course) => (
              <h2 key={course.id}>{course.title}</h2>
          ))}
        </div>
    );
  }
}

export default App;
