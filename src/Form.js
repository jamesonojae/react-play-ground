import React from 'react';

export class From extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      comments: '',
      topic: ''
    }
  }
  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value
    })
    // console.log(this.props.username);

  }

  handleCommentChange = event => {
    this.setState({
      comments: event.target.value
    })
  }
  handleTopicChange = event => {
    this.setState({
      topic: event.target.value
    })
  }
  handleSubmit = event => {
    console.log(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  }
  render() {
    // destructuring the state variables
    const {username, comments, topic} = this.state;
    return (
        <div>
          <p>FORM Component</p>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>User Name</label>
              <input type="text"
                     value={username}
                     onChange={this.handleUserNameChange}
              />
            </div>
            <div>
              <label>Comments</label>
              <textarea
                  value={comments}
                  onChange={this.handleCommentChange}
              >hhhh</textarea>
            </div>
            <div>
              <label>Topic</label>
              <select value={topic} onChange={this.handleTopicChange}>
                <option>React</option>
                <option>Angular</option>
              </select>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
    )
  }
}
