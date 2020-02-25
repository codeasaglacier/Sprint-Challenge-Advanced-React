import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'
import App from '../App'

class Cards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      person: []
    }
  }

  componentDidMount() {
    axios
      .get( 'http://localhost:5000/api/players' )
      .then( res => {
        // console.log( 'cDMRes: ', res )
        this.setState( { person: this.props.people } )
      })
      .catch( err => console.log( 'Error: ', err))
  }

  render() {
    return(
      <div>
        <p data-testid = 'wwcCards'>Name: { this.state.person.name }</p>
        <p>Country: { this.state.person.country }</p>
        <p>Searches: { this.state.person.searches }</p>
      </div>
    )
  }
}

export default Cards