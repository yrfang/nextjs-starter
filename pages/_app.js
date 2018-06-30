import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { initStore } from 'store/createStore';
import Layout from 'components/Layout';
import { fromJS } from 'immutable';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props
    return <Container>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Container>
  }
}

export default withRedux(initStore, {
  serializeState: state => state.toJS(),
  deserializeState: state => fromJS(state)
})(withReduxSaga({ async: true })(MyApp));
