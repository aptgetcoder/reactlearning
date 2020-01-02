import React from 'react';
import './RegistrationForm.css';

class RegistrationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            empId: '',
            empName: '',
            emailId: '',
            mobileNo: ''
        };


    }

    clickSubmit = event => {
       const employeeDetail = {
        empId: this.state.empId,
        empName: this.state.empName,
        emailId: this.state.emailId,
        mobileNo: this.state.mobileNo
       }
       this.props.addEmployee(employeeDetail);
       this.setState({
            empId: '',
            empName: '',
            emailId: '',
            mobileNo: ''
       })
        event.preventDefault();
      };

      empIdChange = event => {
        this.setState({
          empId: event.target.value
        });
      };

      empNameChange = event => {
        this.setState({
          empName: event.target.value
        });
      };

      emailIdChange = event => {
        this.setState({
          emailId: event.target.value
        });
      };

      mobileNoChange = event => {
        this.setState({
          mobileNo: event.target.value
        });
      };

	render() {
  	return ( 
        <form>
            <div class="form-group">
                <label for="employeeId">Employee ID</label>
                <input onChange={this.empIdChange} type="text" class="form-control" id="employeeIdInput" placeholder="Eg). 7003" value={this.state.empId}></input>
            </div>
            <div class="form-group">
                <label for="employeeName">Employee Name</label>
                <input onChange={this.empNameChange} type="text" class="form-control" id="employeeNameInput" placeholder="Eg). Manickam Anandan" value={this.state.empName}></input>
            </div>
            <div class="form-group">
                <label for="emailId">Email Id</label>
                <input onChange={this.emailIdChange} type="text" class="form-control" id="emailIdInput" placeholder="Eg). manandan@altimetrik.com" value={this.state.emailId}></input>
            </div>
            <div class="form-group">
                <label for="mobileNo">Mobile Number</label>
                <input onChange={this.mobileNoChange} type="text" class="form-control" id="mobileNoInput" placeholder="Eg). 9751418412" value={this.state.mobileNo}></input>
            </div>
            <button onClick={this.clickSubmit} type="button" class="btn btn-md btn-primary">Submit</button>
        </form> 
    );
  }
}

export default RegistrationForm;