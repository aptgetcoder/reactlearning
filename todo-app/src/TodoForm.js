import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputText : ""
    };
  }

  handleChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };
  handleClick = event => {
    this.props.addTodo(this.state.inputText);
    this.setState({
      inputText: ""
    }); 
    event.preventDefault();
  };
	render() {
	return ( 
		<form class="form-inline">
  <div class="form-group mx-sm-3 mb-2">
    <input onChange={this.handleChange} type="text" class="form-control" id="inputPassword2" value={this.state.inputText}></input>
  </div>
  <button onClick={this.handleClick} type="submit" class="btn btn-primary mb-2">Add Todo</button>
</form>
	 );
  }
}

export default TodoForm;