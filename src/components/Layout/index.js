import Head from 'next/head';
import 'styles/layout.scss';
import styles from './Layout.scss';

const Layout = (props) => {
  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' key='viewport' />
      </Head>
      <section className="page_container">
        <h1 className={styles.title}>Hi Next</h1>
        {props.children}
      </section>
    </div>
  );
}

export default Layout;
