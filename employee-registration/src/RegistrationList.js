import React from 'react';
import './RegistrationList.css';

class RegistrationList extends React.Component {
	render() {
  	return ( 
        <ul class="list-group">
            <li class="list-group-item">
                <span>1001</span> &nbsp;
                <span>Manickam Anandan</span> &nbsp;
                <span>manandan@altimetrik.com</span> &nbsp;
                <span>9751418412</span> &nbsp;
            </li>
        </ul>
    );
  }
}

export default RegistrationList;