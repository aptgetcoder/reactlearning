import React from "react";
import Navbar from "./Navbar"
import RegistrationForm from "./RegistrationForm";
import axios from "axios";

class App extends React.Component {

  constructor(props){
	  super(props);
	  this.state = {
			employees : []
		};
	}

  addEmployee = employee => {
		if(employee.empId){
			axios.post("http://34.238.84.206:33535/employeeDetails/save", {
        empId: employee.empId,
        empName: employee.empName,
        emailId: employee.emailId,
        mobileNo: employee.mobileNo
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }}).then(response => {
				this.setState({
					employees: [...this.state.employees, employee]
				});
			});
		};
	};
	
	render() {
	  return (
		<div>
		  <Navbar name="Employee Registration" />
      <RegistrationForm addEmployee={this.addEmployee}/>
		</div>
	  );
	}
}
   
export default App;