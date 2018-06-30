import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementCount, decrementCount, resetCount } from 'actions/countActions';

class Counter extends Component {

  reset = () => {
    this.props.resetCount();
  }

  render() {
    const { 
      count,
      title,
      incrementCount,
      decrementCount
    } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <h2>Count: <span>{count}</span></h2>
        <button onClick={incrementCount}>+1</button>
        <button onClick={decrementCount}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.getIn(['count', 'count']),
    title: state.getIn(['text', 'title'])
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
