import React from 'react'

export default class Checkin extends React.Component {
    state = {
        withWaterValue: "",
        withoutWaterValue: "",
    }

    render() {
        return (
            <div>
                <h2>Checking in {this.props.whisky.name}</h2>
                <div>
                    Without water:
                    <radiogroup>
                        <input type="radio" id="without-water-rating-5" name="rating" value="5" checked={this.state.withoutWaterValue === "5"} onChange={() => this.setState({ withoutWaterValue: "5" })} /><label htmlFor="without-water-rating-5">5</label>
                        <input type="radio" id="without-water-rating-4" name="rating" value="4" checked={this.state.withoutWaterValue === "4"} onChange={() => this.setState({ withoutWaterValue: "4" })} /><label htmlFor="without-water-rating-4">4</label>
                        <input type="radio" id="without-water-rating-3" name="rating" value="3" checked={this.state.withoutWaterValue === "3"} onChange={() => this.setState({ withoutWaterValue: "3" })} /><label htmlFor="without-water-rating-3">3</label>
                        <input type="radio" id="without-water-rating-2" name="rating" value="2" checked={this.state.withoutWaterValue === "2"} onChange={() => this.setState({ withoutWaterValue: "2" })} /><label htmlFor="without-water-rating-2">2</label>
                        <input type="radio" id="without-water-rating-1" name="rating" value="1" checked={this.state.withoutWaterValue === "1"} onChange={() => this.setState({ withoutWaterValue: "1" })} /><label htmlFor="without-water-rating-1">1</label>
                        <input type="radio" id="without-water-rating-0" name="rating" value="0" checked={this.state.withoutWaterValue === "0"} onChange={() => this.setState({ withoutWaterValue: "0" })} /><label htmlFor="without-water-rating-0">0</label>
                    </radiogroup>
                </div>

                <div>
                    With water:
                    <radiogroup>
                        <input type="radio" id="rating-5" name="with-water-rating" value="5" checked={this.state.withWaterValue === "5"} onChange={() => this.setState({ withWaterValue: "5" })} /><label htmlFor="rating-5">5</label>
                        <input type="radio" id="rating-4" name="with-water-rating" value="4" checked={this.state.withWaterValue === "4"} onChange={() => this.setState({ withWaterValue: "4" })} /><label htmlFor="rating-4">4</label>
                        <input type="radio" id="rating-3" name="with-water-rating" value="3" checked={this.state.withWaterValue === "3"} onChange={() => this.setState({ withWaterValue: "3" })} /><label htmlFor="rating-3">3</label>
                        <input type="radio" id="rating-2" name="with-water-rating" value="2" checked={this.state.withWaterValue === "2"} onChange={() => this.setState({ withWaterValue: "2" })} /><label htmlFor="rating-2">2</label>
                        <input type="radio" id="rating-1" name="with-water-rating" value="1" checked={this.state.withWaterValue === "1"} onChange={() => this.setState({ withWaterValue: "1" })} /><label htmlFor="rating-1">1</label>
                        <input type="radio" id="rating-0" name="with-water-rating" value="0" checked={this.state.withWaterValue === "0"} onChange={() => this.setState({ withWaterValue: "0" })} /><label htmlFor="rating-0">0</label>
                    </radiogroup>
                </div>

                <div>
                    <label htmlFor="comment">Comment: </label>
                    <br />
                    <textarea id="comment"
                        value={this.state.comment}
                        onChange={(event) => this.setState({ comment: event.target.value })}
                    />
                </div>
                <div>
                    <input
                        type="button" value="Submit"
                        disabled={!this.state.withWaterValue || !this.state.withoutWaterValue}
                        onClick={() => this.props.checkin({
                            withWaterRating: this.state.withWaterValue,
                            withoutWaterRating: this.state.withoutWaterValue,
                            comment: this.state.comment,
                        })}
                    />
                </div>
            </div>
        )
    }
}