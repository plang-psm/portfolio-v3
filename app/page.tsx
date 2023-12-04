import Footer from '@components/Footer'
import Nav from '@components/Nav'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Nav />
      <section>
        Hello, I am the body
      </section>
      <Footer />
    </div>
  )
}
