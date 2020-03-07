import React from 'react';

export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      imgurl: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHandler(e) {
    var { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => console.log(this.state)
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.postStudent(this.state);

    document.getElementById(e.target.id).reset();
    this.setState({
      name: '',
      imgurl: '',
    });
  }

  render() {
    return (
      <div>
        <form id="formAdd" onSubmit={this.handleSubmit}>
          <label>Student Name: </label>
          <input type="text" name="name" onChange={this.changeHandler} />
          <label>Image URL: </label>
          <input type="text" name="imgurl" onChange={this.changeHandler} />
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
