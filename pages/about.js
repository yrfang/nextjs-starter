import React from 'react';
import { connect } from 'react-redux';

import { startClock, tickClock } from 'actions/clockActions';
import Clock from 'components/Clock';

class About extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    store.dispatch(tickClock(isServer));

    return { isServer };
  }

  componentDidMount() {
    this.props.dispatch(startClock());
  }

  render() {
    const { lastUpdate, light } = this.props;

    return (
      <div>
        <p>Next with Redux-Saga</p>
        <Clock lastUpdate={lastUpdate} light={light} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lastUpdate: state.getIn(['clock', 'lastUpdate']),
    light: state.getIn(['clock', 'light'])
  }
}

export default connect(mapStateToProps)(About);
