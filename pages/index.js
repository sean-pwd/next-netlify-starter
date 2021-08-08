import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import sites from '../data/sites.js'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export default function Home() {
  return (
    <Container>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Header title="Welcome to my app!" subtitle="" />
        <p className="description">
          description
        </p>

        {sites.map((acc, index) => (
          <div key={index}>
            <Row>
              <Col>
                <h2>{acc.accName}</h2>
                <div>{acc.accLogin}</div>
              </Col>
            </Row>

            <Row>
              {acc.sites.map((site, index) => (
                <Col md={4} key={index}>
                  <Card className="my-3">
                    <Card.Body>
                      <Card.Title>
                        {site.name}
                      </Card.Title>
                      <Card.Subtitle className="mb-3">
                        <a href={site.url}>{site.url}</a>
                      </Card.Subtitle>
                      <a href={site.netlifyUrl}>
                        <img src={site.netlifyBadge} />
                      </a>
                      <br />
                      <Button variant="primary" className="my-3" href={site.githubUrl}>Github Repository</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}

            </Row>
          </div>
        ))}


      </main>

      <Footer />
    </Container>
  )
}
