import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementCount, decrementCount, resetCount } from 'actions/count';

class Counter extends Component {

  reset = () => {
    this.props.resetCount();
  }

  render() {
    const { 
      count,
      text,
      incrementCount,
      decrementCount
    } = this.props;

    return (
      <div>
        <h1>Count: <span>{count}</span></h1>
        <h2>{text}</h2>
        <button onClick={incrementCount}>+1</button>
        <button onClick={decrementCount}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    count: state.count.count,
    text: state.count.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: bindActionCreators(incrementCount, dispatch),
    decrementCount: bindActionCreators(decrementCount, dispatch),
    resetCount: bindActionCreators(resetCount, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
