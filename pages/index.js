import React from 'react';
import { connect } from 'react-redux';

import { loadData } from 'actions/nextActions';
import Count from 'components/Count';
import styles from 'styles/pages/index.scss';

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store } = props.ctx;

    if (!store.getState().placeholderData) {
      store.dispatch(loadData());
    }
  }

  render() {
    const { placeholderData } = this.props;

    return (
      <div>
        <Count />

        <div className={styles.next_container}>
          <h1 className={styles.title}>Hey hey</h1>
          <a href={placeholderData.get('html_url')} target="_blank">
            <h3>Next's github</h3>
          </a>
          <img src={placeholderData.get('owner').get('avatar_url')} style={{ width: '60px' }} />
          <p>componay: {placeholderData.get('organization').get('login')}</p>
          <p>{placeholderData.get('description')}</p>
          <p>Next.js has <mark>{placeholderData.get('stargazers_count')}</mark> ⭐️</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    placeholderData: state.getIn(['next', 'placeholderData'])
  }
}

export default connect(mapStateToProps)(Index);
