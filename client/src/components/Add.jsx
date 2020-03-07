import React from 'react';


export default class Add extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'name': '',
      'imgurl': ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHandler(e){

  }

  handleSubmit(e){

  }

  render() {
    return (
      <div>
        <form>
          <label>Student Name: </label>
          <input type="text" name="name" />
          <label>Image URL: </label>
          <input type="text" name="imgurl" />
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
    )
  }
}