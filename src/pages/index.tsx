import Link from 'next/link';

import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Next.js
      </h1>

      <Link href='/estatico'>
        <a>Estático</a>
      </Link>
    </div>
  )
}
