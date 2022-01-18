import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello world</h1>

      <ul>
        <li>
          <Link href="/products/pants/redpants">
            <a>Red Pants</a>
          </Link>
        </li>

        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
