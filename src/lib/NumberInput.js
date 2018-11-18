import React, { Component } from 'react';

export const NUMBER_FORMAT_FARSI = 'FARSI';
export const NUMBER_FORMAT_LATIN = 'LATIN';

class NumberInput extends Component {


  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    const value = props.value || '';
    const numberFormat = props.numberFormat || NUMBER_FORMAT_FARSI;
    const valueToShow = this.mapValue(value, numberFormat);

    this.state = {
      value,
      valueToShow,
      numberFormat,
      selectionStart: undefined,
      selectionEnd: undefined,
    };
  }

  componentDidUpdate() {
    // console.log('updated');
    if(this.state.selectionStart || this.state.selectionStart===0)
      this.inputRef.current.setSelectionRange(this.state.selectionStart, this.state.selectionEnd);
  }

  handleKeyDown = (event) => {
    // console.log('keyCode: ', event.keyCode, 'key: ', event.key);
    if(event.keyCode===8) { //backspace
      event.preventDefault();
      this.updateState(this.deleteValue(event.target, -1));
    }else if(event.keyCode===46){ //delete
      event.preventDefault();
      this.updateState(this.deleteValue(event.target, 1));
    }else if(event.keyCode>=48 && event.keyCode<=57){ //digits
      event.preventDefault();
      // console.log('digit');
      this.updateState(this.updateValue(event.target, (event.keyCode - 48).toString(), this.state.numberFormat));
    }else if(event.keyCode>=36 && event.keyCode<=40){ //arrows
    }else if(event.keyCode===229){ //android bug workaround
    }else{
      // console.log('other');
      event.preventDefault();
    }
  };

  handlePaste = (event) => {
    event.preventDefault();

    const enteredValue = stripAnyThingButDigits((event.clipboardData || window.clipboardData).getData('text'));

    this.updateState(this.updateValue(event.target, enteredValue), this.state.numberFormat);
  };

  handleInput = (event) => {
    if(this.state.valueToShow===event.target.value) return;

    const enteredValue = stripAnyThingButDigits(event.target.value);

    this.updateState(this.recheckValue(event.target, enteredValue, this.state.numberFormat));
  };

  mapValue = (value, numberFormat) => {
    if(numberFormat===NUMBER_FORMAT_FARSI){
      return mapToFarsi(value);
    }else if(numberFormat===NUMBER_FORMAT_LATIN){
      return mapToLatin(value);
    }
    return mapToFarsi(value);
  };


  updateState = (newState) => {
    if(!newState) return;

    this.setState(newState, ()=>{
      this.fireOnChange();
    });

  };

  updateValue = (element, enteredValue, numberFormat) => {
    const enteredValueMapped = this.mapValue(enteredValue, numberFormat);
    let valueToShow = element.value;
    let selectionStart = element.selectionStart;
    let selectionEnd = element.selectionEnd;

    valueToShow = valueToShow.substring(0, selectionStart) + enteredValueMapped + valueToShow.substring(selectionEnd);

    selectionStart += enteredValueMapped.length;
    selectionEnd = selectionStart;

    const value = mapToLatin(valueToShow);

    return {
      value,
      valueToShow,
      selectionStart,
      selectionEnd,
    };
  };

  recheckValue = (element, enteredValue, numberFormat) => {
    let valueToShow = this.mapValue(enteredValue, numberFormat);
    let selectionStart = element.selectionStart;
    let selectionEnd = element.selectionEnd;

    const value = mapToLatin(valueToShow);

    return {
      value,
      valueToShow,
      selectionStart,
      selectionEnd,
    };
  };

  deleteValue = (element, qty) => {
    let valueToShow = element.value;
    let selectionStart = element.selectionStart;
    let selectionEnd = element.selectionEnd;

    // console.log({selectionStart, selectionEnd})

    if(selectionStart===selectionEnd){
      if(qty < 0) {
        if(selectionStart===0) return;
        valueToShow = valueToShow.substring(0, selectionStart + qty) + valueToShow.substring(selectionEnd);
        selectionStart += qty;
      }else{
        if(selectionEnd===valueToShow.length) return;
        valueToShow = valueToShow.substring(0, selectionStart) + valueToShow.substring(selectionEnd+qty);
      }
    }else{
      valueToShow = valueToShow.substring(0, selectionStart) + valueToShow.substring(selectionEnd);
    }

    selectionEnd = selectionStart;

    const value = mapToLatin(valueToShow);

    return {
      value,
      valueToShow,
      selectionStart,
      selectionEnd,
    };
  };

  fireOnChange = () => {
    if(this.props.onChange){
      this.props.onChange({target: {name: this.props.name, value: this.state.value}});
    }
  };

  handleChange = () => {
    //we do not use the onChange, we use the keyPress and paste instead
  };

  render() {

    const {value, onChange, onInput, onPast, onKeyDown, pattern, inputMode, type, ref, numberFormat, ...rest} = this.props;
    const {valueToShow} = this.state;

    return (
      <input
        ref={this.inputRef}
        type={"text"}
        inputMode={"numeric"}
        pattern={"[0-9]*"}
        value={valueToShow}
        onKeyDown={this.handleKeyDown}
        onPaste={this.handlePaste}
        onChange={this.handleChange}
        onInput={this.handleInput}
        {...rest}
      />
      );
  }
}
export default NumberInput;


export function mapToFarsi(str) {
  if(!str) return str;
  return str.toString().replace(/[1234567890]/gi, e => String.fromCharCode(e.charCodeAt(0) + 1728))
}

export function mapToLatin(str) {
  if(!str) return str;
  return str.toString().replace(/[۱۲۳۴۵۶۷۸۹۰]/gi, e => String.fromCharCode(e.charCodeAt(0) - 1728))
}

export function stripAnyThingButDigits(str) {
  if(!str) return str;
  return str.toString().replace(/[^1234567890۱۲۳۴۵۶۷۸۹۰]/gi, '');
}