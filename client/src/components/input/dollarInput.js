import React from 'react';
import Label from '../../../data/label';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

//DollarInput gets onDollarValChange callback as props from App
//onDollarValChange is invoked when an onChange event occurs on the form
class DollarInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      helpDollarInput: ''
    }
  }
  
  handleChange(value) {
    var value = value.replace(/\$/g,"");
    var value = value.replace(/\,/g,"");
    console.log(value);
    if (isNaN(value)) {
      this.setState({helpDollarInput: Label.dollarValueHelp})
    } else {
      if (value === '') {
        this.setState({value})
      } else {
        var amount = this.formatDollarVal(value);
        this.setState({value: '$' + amount})
      }
      this.props.onDollarValChange(value);
    }
  }

  handleEnter(event) {
    if(event.key === 'Enter') {
      this.clearInput();
    }
  }

  clearInput() {
    this.setState({value: ''})
  }

  formatDollarVal(value) {
    value += '';
    var x = value.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2; 
  }

  render() {
    return (
      <div>
        <div className="subheading">{Label.dollarValue}</div>
        <div className="center dollar">
          <input id="dollarVal" className="form-control"
            type="text"
            value= {this.state.value}
            maxLength={"12"}
            onChange={event => this.handleChange(event.target.value)}
            onKeyPress={event => this.handleEnter(event)} />
          <div className="help">{this.state.helpDollarInput}</div>
          <br />
        </div>
      </div>
    )
  }
}

export default DollarInput;
        // {this.dollarInputHelp()}  