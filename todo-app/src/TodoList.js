import React from 'react';

class TodoList extends React.Component {
  markComplete = event => {
    event.target.style.textDecoration = 'line-through'
  };

  handleDelete = item => {
    this.props.deleteTodo(item.id);
  };
  
	render() {
  if(!this.props.items.length > 0){
    return "Wait for a second";
  }
	return ( 
<div class="form-group mx-sm-3 mb-2">
<ul className="list-group">
       {this.props.items.map(item => {
         return (
           <li key={item.id} className="list-group-item">
             <span onClick={this.markComplete}>{item.title}</span>
             <span
               onClick={this.handleDelete.bind(this, item)}
               className="float-right">Delete
             </span>
           </li>
         );
       })}
</ul>
</div>
 );
  }
}

export default TodoList;