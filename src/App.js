import React, { Component } from 'react'
import './App.css'
import { checkin } from './api'
import Checkin from './components/CheckIn'
import Checkins from './components/Checkins'
import Search from './components/Search'

class App extends Component {
    state = {
      checkingIn: undefined
    }

    checkin = (whisky) => {
        this.setState({ checkingIn: whisky })
    }

    completeCheckin = (details) => {
        checkin(this.state.checkingIn.id, details)
        this.setState({
            checkingIn: undefined
        })
    }

    render() {
        let content

        if (this.state.checkingIn) {
            content = <Checkin whisky={this.state.checkingIn} checkin={this.completeCheckin} />
        } else if (this.state.tab === "my-checkins") {
            content = <Checkins />
        } else {
            content = <Search checkin={this.checkin} />
        }

        return (
            <div className="App">
                <div>
                    <a onClick={() => this.setState({ tab: "checkin", checkingIn: undefined })}>Checkin</a>
                    {' | '}
                    <a onClick={() => this.setState({ tab: "my-checkins", checkingIn: undefined })}>My Checkins</a>
                </div>
                {content}
            </div>
        )
    }
}

export default App
