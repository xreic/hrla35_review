import React from 'react';
import axios from 'axios';

export default class ListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateName: false,
      studentId: 0,
      studentName: this.props.studentName,
    };

    this.updateStudent = this.updateStudent.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  updateStudent(id) {
    axios
      .put(`/api/students/${id}`, { name: this.state.studentName })
      .then(() => this.props.getStudents())
      .catch((err) => console.error(err));
  }

  clickHandler(id) {
    this.setState({
      updateName: true,
      studentId: id,
    });
  }

  changeHandler(e) {
    this.setState({
      studentName: e.target.value,
    });
  }

  submitHandler(e) {
    e.preventDefault();

    this.setState(
      {
        updateName: false,
      },
      () => this.updateStudent(this.state.studentId)
    );
  }

  render() {
    return this.state.updateName ? (
      <span>
        <input
          value={this.state.studentName}
          onChange={this.changeHandler}
        ></input>
        <button onClick={this.submitHandler}>Change Name</button>
        <img src={this.props.student.imgurl} />
      </span>
    ) : (
      <span>
        <div onClick={() => this.clickHandler(this.props.student._id)}>
          {this.props.student.name}
        </div>
        <img src={this.props.student.imgurl} />
      </span>
    );
  }
}
