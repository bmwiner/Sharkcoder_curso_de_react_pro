import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import BasicCard from '../components/BasicCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Meu primeiro  projecto react!
          </p>
        </div>
        <BasicCard></BasicCard>
      </main>
  )
}
