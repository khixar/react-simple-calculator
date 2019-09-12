import React, { Component } from 'react';

class NumberSystem extends Component {
  state = {
    input1: "",
    input2: "",
    operator: "",
    answer: null
  }

  handleResult = () => {
    this.setState({
      answer: eval(this.state.input1 + this.state.operator + this.state.input2),
      input1: "",
      input2: "",
      operator: ""
    })
  }

  handleOperator = (event) => {
    document.getElementById(event.target.id).style.border = "thick solid white";
    if (this.state.input2 !== "") {
      this.setState({
        answer: eval(this.state.input1 + this.state.operator + this.state.input2),
        operator: event.target.value,
        input1: eval(this.state.input1 + this.state.operator + this.state.input2),
        input2: ""
      })
    }
    this.setState({
      operator: event.target.value
    })
  }

  handleClick = (event) => {
    if (this.state.operator === "") {
      this.setState({
        input1: this.state.input1 + event.target.value,
        answer: null
      })
    }
    else {
      if (this.state.operator === '+') {
        document.getElementById("plus").style.border = "";
      }
      else if (this.state.operator === '-') {
        document.getElementById("minus").style.border = "";
      }
      else if (this.state.operator === '*') {
        document.getElementById("multiply").style.border = "";
      }
      else {
        document.getElementById("divide").style.border = "";
      }
      if (this.state.answer !== null) {
        this.setState({
          answer: null
        })  
      }
      this.setState({
        input2: this.state.input2 + event.target.value
      })
    }
  }

  render() {
    var display = null;
    if (this.state.input1 !== "") display = this.state.input1;
    if (this.state.input2 !== "") display = this.state.input2;
    if (this.state.answer !== null) display = this.state.answer;
    return (
      <div className="container">
        <div className="center number-system">
          <nav className="my-nav">
            <div className="nav-wrapper">
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <div className="white-text input-text">{display}</div>
              </ul>
            </div>
          </nav>
        </div>
        <div className="center my-btn">
          <button className="waves-effect waves-light btn-large" value="1" onClick={this.handleClick}>1</button>
          <button className="waves-effect waves-light btn-large" value="2" onClick={this.handleClick}>2</button>
          <button className="waves-effect waves-light btn-large" value="3" onClick={this.handleClick}>3</button>
          <button className="waves-effect red btn-large operators" id="plus" value="+" onClick={this.handleOperator}>+</button><br />
          <button className="waves-effect waves-light btn-large" value="4" onClick={this.handleClick}>4</button>
          <button className="waves-effect waves-light btn-large" value="5" onClick={this.handleClick}>5</button>
          <button className="waves-effect waves-light btn-large" value="6" onClick={this.handleClick}>6</button>
          <button className="waves-effect red btn-large operators" id="minus" value="-" onClick={this.handleOperator}>-</button><br />
          <button className="waves-effect waves-light btn-large" value="7" onClick={this.handleClick}>7</button>
          <button className="waves-effect waves-light btn-large" value="8" onClick={this.handleClick}>8</button>
          <button className="waves-effect waves-light btn-large" value="9" onClick={this.handleClick}>9</button>
          <button className="waves-effect red btn-large operators" id="multiply" value="*" onClick={this.handleOperator}>*</button><br />
          <button className="waves-effect waves-light btn-large" value="0" onClick={this.handleClick}>0</button>
          <button className="waves-effect red btn-large operators" id="divide" value="/" onClick={this.handleOperator}>/</button>
          <button className="waves-effect red btn-large operators" value="=" onClick={this.handleResult}>=</button>
        </div>
      </div>
    ) 
  }
}

export default NumberSystem;