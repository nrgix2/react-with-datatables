import React, { Component } from 'react';
import Home from './components/Home';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="title">Colleges and Universities in the United States</h3>
        <p className="description"><i>This is a datatable which combines the very
          helpful <a href="https://datatables.net/">DataTables.net</a> library
          and <a href="https://reactjs.org/">Create React App</a>. Hopefully
          this helps a developer out there that wants to use the library with
        React.</i>
        </p>
        <Home />
      </div>
    );
  }
}
