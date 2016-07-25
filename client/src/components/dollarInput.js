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
    if (this.state.value > 0) return 'success';
    else if (this.state.value < 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.props.onDollarValChange(this.state.value);
    this.clearInput();
  }

  clearInput() {

  }

  render() {
    return (
      <form className='center dollar'>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>{Label.dollarValue}</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder={Label.dollarValue}
            onChange={() => _debounce(this.handleChange.bind(this), 500)}
          />
          <FormControl.Feedback />
          <HelpBlock>Enter a number greater than 500($500).</HelpBlock>
        </FormGroup>
      </form>
    )
  }
}

export default DollarInput;