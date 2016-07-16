import React from 'react';
import ReactSlider from 'react-rangeslider';

class UserInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      riskLevel: 5,
      amount: 0
    }
  }

  handleChange(value) {
    this.setState({
      riskLevel: value
    });
    
  }

  render () {
    console.log(this.state.riskLevel)
    return (
      <div>
        <ReactSlider
          withBars={true}
          min={1}
          max={10}
          step={1}
          value={this.state.riskLevel}
          className='horizontal-slider'
          onChange={(value)=>this.handleChange(value)} />      
      </div>
    );
  }
}

export default UserInput;