import React from 'react'
import { searchWhiskys } from '../api'
import { searchLatest } from '../utils/searchLatest'

export default class Search extends React.Component {
    state = {
      searching: false,
      searchTerm: '',
      searchResults: [],
    }

    constructor(props) {
        super(props)

        this.autoSearcher = searchLatest((results) => {
            this.setState({
                searching: false,
                searchResults: results
            })
        }, searchWhiskys)
    }

    searchChanged = (e) => {
        const searchTerm = e.target.value
        this.setState({ searchTerm })
        this.autoSearcher.searchTermChanged(searchTerm)
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

    render() {
        return (
            <div>
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
                        <button type="button" onClick={() => this.props.checkin(r)}>Check in</button>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}