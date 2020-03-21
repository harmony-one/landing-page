import React from 'react'
import Helmet from 'react-helmet'
import MainPage from './Main'

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, height=device-height"
          />
          <title>Harmony - Open consensus for 10B</title>
          <meta
            property="og:title"
            content="Harmony - Open consensus for 10B"
          />
          <meta
            property="og:site_name"
            content="Harmony - Open consensus for 10B"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://harmony.one/" />
          <meta
            name="description"
            content="Open Consensus for 10 Billion People. Harmony for One and All. Our open infrastructure is a revolutionary high-throughput, low-latency, and low-fee consensus platform designed to power decentralized economies of the future."
          />
          <meta
            property="og:description"
            content="Open Consensus for 10 Billion People. Harmony for One and All. Our open infrastructure is a revolutionary high-throughput, low-latency, and low-fee consensus platform designed to power decentralized economies of the future."
          />
          <link rel="shortcut icon" href="/images/favicon.png" />
        </Helmet>

        <MainPage />
      </div>
    )
  }
}

export default Homepage
