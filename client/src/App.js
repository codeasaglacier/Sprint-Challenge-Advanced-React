import React, { Component } from 'react';
import './App.css';
import Cards from './components/componentDidMount'
import axios from 'axios'
import DarkMode from './components/darkmode'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      people: []
    }
  }


  componentDidMount() {
    axios
      .get( 'http://localhost:5000/api/players' )
      .then( res => {
        console.log( 'Res: ', res )
        this.setState( { people: res.data } )
      })
      .catch( err => console.log( 'Error: ', err))
  }

  handleChanges = e => {
    this.setState( {
      person: e.target.value
    })
    console.log( 'State: ', e.target.value )
  }

  render() {
    return(
      <div>
        <DarkMode />
        { this.state.people.map( data => (
          <Cards people = { data }/>
        )) }
      </div>
    )
  }
}

export default App;
