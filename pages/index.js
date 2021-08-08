import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <h2>Castle Craft Upholstery</h2>
        <a href="https://app.netlify.com/sites/castlecraft/deploys">
          <img src="https://api.netlify.com/api/v1/badges/8d1fc77c-309b-44cd-9157-517f1dd73110/deploy-status"></img>
        </a>
      </main>

      <Footer />
    </div>
  )
}
