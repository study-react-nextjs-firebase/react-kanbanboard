import type { NextPage } from 'next'
import App from '../components/App'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.Home}>
      <App/>
    </div>
  )
}

export default Home
