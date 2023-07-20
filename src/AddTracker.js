import React, { Component } from 'react'

export class AddTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackers: props.trackers,
      symbol: '',
      price: null,
    };
    this.handleSubmit = this.props.handleSubmit(this.state.symbol, this.state.price);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label for='symbol'>Option Symbol</label>
          <input 
            type='text' 
            name='symbol' 
            id='symbol' 
            onChange={this.handleChange}
            value={this.state.symbol} 
            required
          />
        </div>
        <div>
          <label for='price'>Purchase/Sell Price</label>
          <input 
            type='number' 
            name='price' 
            id='price' 
            onChange={this.handleChange}
            value={this.state.price} 
            required
          />
        </div>
        <div>
          <input value='Submit' type='submit' />
        </div>
      </form>
    )
  }
}

export default AddTracker