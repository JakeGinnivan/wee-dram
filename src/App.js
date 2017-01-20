import React, { Component } from 'react'
import './App.css'
import { searchWhiskys } from './api'
import { searchLatest } from './utils/searchLatest'

class App extends Component {
    state = {
      searching: false,
      searchTerm: '',
      searchResults: []
    }

    constructor(props) {
        super(props)

        this.autoSearcher = searchLatest((results) => {
            this.setState({
                searching: false,
                searchResults: results
            })
        })
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
        const searchTerm = e.target.value
        this.setState({ searchTerm })
        this.autoSearcher.searchTermChanged(searchTerm)
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
                        <span>{r.name}</span>
                        <button type="button" onClick={this.checkin}>Check in</button>
                    </div>
                  ))}
                </div>
            </div>
        )
    }
}

export default App
