import React from 'react';


export default class Random extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'student': {}
    }
    this.getRandomStudent = this.getRandomStudent.bind(this);
  }



  getRandomStudent(){
    
  }

  render() {
    return (
      <div>
        <div>
          <img src='https://ca.slack-edge.com/T2SV1LBC6-UT9N1BX1A-c2a4df2e7442-512'></img>
          <h1>Lee</h1>
        </div>
        <button >Randomize</button>
      </div>
    )
  }
}