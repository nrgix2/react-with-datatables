import React, { Component } from 'react';
import DataTable from './DataTable';
import universities from './universities.json';

export default class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      schools: [],
      loading: true
    };
  }

  componentDidMount() {
    // In this app, the data is coming from a json file which is a list of
    // universities in the US. You can use any data you want. Make sure to
    // organize the data to be inside an array.
    const listOfUniversities = universities;
    let accumulator = [];

    for(let university in listOfUniversities) {
      accumulator.push([
        "", // This empty field is reserved for the plus/minus dropdown button
        listOfUniversities[university]["unitid"],
        listOfUniversities[university]["institution name"],
        listOfUniversities[university]["year"],
      ]);
    }

    // set all schools to state
    this.setState({
      schools: accumulator,
      loading: false
     });
  }

  render() {
    if (this.state.loading) {
      return (
        <p>Loading...</p>
      );
    }

    return (
      <DataTable schools={this.state.schools} />
    );
  }
}
