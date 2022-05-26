import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quia earum quam, commodi non voluptatibus minus temporibus possimus est magnam minima. Iure doloribus explicabo eveniet?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quia earum quam, commodi non voluptatibus minus temporibus possimus est magnam minima. Iure doloribus explicabo eveniet?</p>
      <Link href="/pandas">
        <a>See Panda Listing</a>
      </Link>
    </div>
  )
}
