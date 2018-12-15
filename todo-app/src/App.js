import React from "react";
import Navbar from "./Navbar"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import axios from "axios";

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			items : []
		};
	}

	componentDidMount() {
		axios.get("http://81be4ed2.ngrok.io/todos")
		.then(response => {
			this.setState({
				items: response.data
			});
		});
	}

	addTodo = item => {
		if(item){
			axios.post("http://81be4ed2.ngrok.io/todos", {todo: {title: item}}).then(response => {
				this.setState({
					items: [...this.state.items, item]
				});
			});
		};
	};

	deleteTodo = itemId => {
		axios.delete("http://81be4ed2.ngrok.io/todos/" + itemId).then(response => {
     this.setState({
       items: response.data
     });
   });
 };

	render() {
	  return (
		<div>
		  <Navbar name="My Todo App" />
		  <TodoForm addTodo={this.addTodo}/>
		  <TodoList items={this.state.items} deleteTodo={this.deleteTodo}/>
		</div>
	  );
	}
}
   
export default App;
   