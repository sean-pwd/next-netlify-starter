import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import sites from '../data/sites.js'


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
          description
        </p>
        <div className="sites">
        {sites.map((acc, index) => (
          <div key={index} className="card">
            <h2>{acc.accName}</h2>
            <div>{acc.accLogin}</div>
            {acc.sites.map((site, index) => (
              <div key={index} className="card">
                <a href={site.url}><h3>{site.name}</h3></a>
                <a href={site.netlifyUrl}>
                  <img src={site.netlifyBadge} />
                </a>
                <br /> 
                <a href={site.githubUrl}>Github Repository</a>
              </div>
            ))}
          </div>
        ))}
        </div>
   
      </main>

      <Footer />
    </div>
  )
}
