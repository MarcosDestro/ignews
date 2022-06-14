import Head from '../../node_modules/next/head'
import { SubcribeButton } from '../components/SubscribeButton/index';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
        
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          
          <h1>News about the <span>React</span> world.</h1>
          
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>

          <SubcribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}
