import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
	render() {
  	return ( 
      <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">{this.props.name}</span>
      </nav> 
    );
  }
}

export default Navbar;