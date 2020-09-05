import Head from "next/head"
import Header from './header'
import Footer from './footer'

function Layout({ children }) {
  return (
    <div className="container max-w-screen-lg mx-auto">
      <Head>
        <meta name="og:title" content="Jeremy Puchta Personal Website" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout