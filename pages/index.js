import React from 'react';
import 'isomorphic-unfetch';
import Count from 'components/Count';

class Index extends React.Component {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

  render() {
    return (
      <div>
        <Count />
        <p>Next.js has <mark>{this.props.stars}</mark> ⭐️</p>
      </div>
    )
  }
}

export default Index;
