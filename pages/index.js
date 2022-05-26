import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quia earum quam, commodi non voluptatibus minus temporibus possimus est magnam minima. Iure doloribus explicabo eveniet?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quia earum quam, commodi non voluptatibus minus temporibus possimus est magnam minima. Iure doloribus explicabo eveniet?</p>
      <Footer />
    </div>
  )
}
