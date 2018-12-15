import React from 'react';

class Navbar extends React.Component {
	render() {
  	return ( <nav class="navbar navbar-light bg-light">
    <span class="navbar-brand mb-0 h1">{this.props.name}</span>
    </nav> );
  }
}

export default Navbar;