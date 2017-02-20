import React from 'react'
import { getCheckins } from '../api'

export default class Checkins extends React.Component {
    state = {
        checkins: []
    }

    componentWillMount() {
        getCheckins().then(data => {
            console.log(data)
            this.setState({ checkins: data })
        })
    }

    render() {
        return (
            <ul>
                {this.state.checkins.map(c => (
                    <li>{c.name} (water: {c.withWaterRating}, without water: {c.withoutWaterRating})</li>
                ))}
            </ul>
        )
    }
}