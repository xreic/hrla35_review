import React from 'react';





export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'page': 'home',
      'studentlist' : []
    }


  }

  componentDidMount(){
    this.getStudents()
  }

  getStudents(){
    
  }

  changepage(e){
    
  }

  render() {
    if (this.state.page === 'add'){
      return (
        <div>
          <Add />
          <button value='home' onClick={(e) => this.changepage(e)}>Back</button>
        </div>
      )
    } else if (this.state.page === 'list'){
      return (
        <div>
          <List />
          <button value='home' onClick={(e) => this.changepage(e)}>Back</button>
        </div>
      )
    } else if (this.state.page === 'random'){
      return (
        <div>
          <Random />
          <button value='home' onClick={(e) => this.changepage(e)}>Back</button>
        </div>
      )
    } else {
      return (
        <div>
          <button value='add' >Add Student</button>
          <button value='list' >List Students</button>
          <button value='random' >Random Student</button>
        </div>
      )
    }
  }
}