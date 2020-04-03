import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {

      message: '',
      messages: []
    };
  }
  handleSubmit = event =>{
    event.preventDefault();
    let formData = this.state.message
    let array = this.state.messages.concat(formData)
    this.setState({
      messages: array
    })
  }
  handleInput = event =>{




    this.setState({
      message: event.target.value
    }
  )

    }
  // handleChars = event =>{
  //
  // }
  render() {
    return (
      <div>
        <strong>Your message: </strong>
        <small>Characters remaining: {this.props.maxChars - this.state.message.length}</small>
        <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleInput}

          type="text" name="message" id="message" />
        <input type='submit'/>
        </form>
      </div>
    );
  }
}

export default TwitterMessage;
