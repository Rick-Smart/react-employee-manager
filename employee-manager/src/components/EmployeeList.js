import React from "react";

const url = "https://randomuser.me/api/?results=200&nat=us";

class EmployeeList extends React.Component {
  state = {
    employees: [],
  };

  async componentDidMount() {
    const data = await fetch(url);
    const { results: employees } = await data.json();
    this.setState({ employees });
  }

  sortBy = (event) => {
    const name = event.target.name;

    switch (name) {
      case "firstName":
        {
          const allEmployees = this.state.employees
          allEmployees.map(employee =>{
            
          })
        }
        break;
      case "lastName":
        break;
      case "email":
        break;
      case "phone":
        break;
      case "age":
        break;

      default:
        break;
    }
  };

  render() {
    const { employees } = this.state;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Profile Pic</th>
            <td>
              <a href="#" name="firstName" onClick={this.sortBy}>
                First
              </a>
            </td>
            <td>
              <a href="#" name="lastName" onClick={this.sortBy}>
                Last
              </a>
            </td>
            <td>
              <a href="#" name="email" onClick={this.sortBy}>
                Email
              </a>
            </td>
            <td>
              <a href="#" name="phone" onClick={this.sortBy}>
                Phone
              </a>
            </td>
            <td>
              <a href="#" name="age" onClick={this.sortBy}>
                Age
              </a>
            </td>
            <td>
              <a href="#" name="location" onClick={this.sortBy}>
                Location
              </a>
            </td>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.login.uuid}>
              <td>
                <img src={employee.picture.thumbnail} alt=""></img>
              </td>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.email}</td>
              <td>{employee.cell}</td>
              <td>{employee.dob.age}</td>
              <td>{employee.location.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default EmployeeList;
