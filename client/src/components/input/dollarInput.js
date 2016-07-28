import React from 'react';
import Label from '../../../data/label';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

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
    if (this.state.value >= 100) return 'success';
    else if (this.state.value < 100) return 'error';
  }

  handleChange(value) {
    this.setState({value});
    this.props.onDollarValChange(value);
  }

  handleEnter(event) {
    if(event.key === 'Enter') {
      this.clearInput();
    }
  }

  clearInput() {
    this.setState({value: ''})
  }

  render() {
    return (
      <div className='center dollar'>
        <input id="dollarVal" className="form-control"
          type="text"
          value={this.state.value}
          placeholder={Label.dollarValue}
          onChange={event => this.handleChange(event.target.value)}
          onKeyPress={event => this.handleEnter(event)} />
      </div>
    )
  }
}

export default DollarInput;
    // return (
    //   <form className='center dollar'>
    //     <FormGroup
    //       controlId="formBasicText"
    //       validationState={this.getValidationState()}
    //     >
    //       <FormControl
    //         type="text"
    //         value={this.state.value}
    //         ref="input"
    //         placeholder={Label.dollarValue}
    //         onChange={event => this.handleChange(event.target.value)}
    //       />
    //       <FormControl.Feedback />
    //       <HelpBlock>{Label.dollarValueHelp}</HelpBlock>
    //     </FormGroup>
    //   </form>
    // )