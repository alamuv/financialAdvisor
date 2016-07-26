import React from 'react';
import Label from '../../data/label';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
var _debounce = require('lodash/debounce');

//DollarInput gets onDollarValChange callback as props from App
//onDollarValChange is invoked when an onChange event occurs on the form
//it changes the app's risk level state to the changed risk level 
class DollarInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  getValidationState() {
    if (this.state.value >= 500) return 'success';
    else if (this.state.value < 500) return 'error';
  }

  handleChange(value) {
    this.setState({value});
    this.props.onDollarValChange(value);
  }

  render() {
    return (
      <form className='center dollar'>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <FormControl
            type="text"
            value={this.state.value}
            ref="input"
            placeholder={Label.dollarValue}
            onChange={event => this.handleChange(event.target.value)}
          />
          <FormControl.Feedback />
          <HelpBlock>Enter a number greater than 500($500).</HelpBlock>
        </FormGroup>
      </form>
    )
  }
}

export default DollarInput;