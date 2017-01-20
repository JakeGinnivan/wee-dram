import React, { Component } from 'react'
import './App.css'
import { searchWhiskys } from './api'

class App extends Component {
    state = {
      searching: false,
      searchTerm: '',
      searchResults: []
    }

    search = () => {
      this.setState({ searching: true, searchResults: [] })
      searchWhiskys(this.state.searchTerm)
        .then(results => this.setState({
            searching: false,
            searchResults: results
        }))
        .catch(err => this.setState({ searching: false }))
    }

    searchChanged = (e) => {
      this.setState({ searchTerm: e.target.value })
    }

    checkin = (id) => {

    }

    render() {
        return (
            <div className="App">
                <div>
                    <h1>Find your whisky to check-in</h1>
                    <label htmlFor="searchBox">Search: </label>
                    <input
                        type="text" id="searchBox" disabled={this.state.searching}
                        onChange={this.searchChanged} value={this.state.searchTerm} />
                    <button type="button" onClick={this.search} disabled={this.state.searching}>Search</button>
                </div>
                <div>
                  {this.state.searchResults.map(r => (
                      <div key={r.id}>
                        {r.name}
                        <button type="button" onClick={this.checkin}>Check in</button>
                    </div>
                  ))}
                </div>
            </div>
        )
    }
}

export default App
