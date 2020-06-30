import React, { Component } from 'react';
import { robots } from './robots';
import { CardList } from './components/CardList';
import { SearchBar } from './components/SearchBar';

class App extends Component {
  state = { robots: robots, searchInput: '' };
  onInputChange = event => {
    this.setState({ searchInput: event.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="h1">RoboCards</h1>
        <SearchBar onInputChange={this.onInputChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
