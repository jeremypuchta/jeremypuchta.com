import Head from "next/head"
import Footer from './footer'

function Layout({ children }) {
  return (
    <div className="container max-w-screen-lg mx-auto">
      <Head>
        <meta name="og:title" content="Jeremy Puchta Personal Website" />
      </Head>
      <main className="min-h-screen pt-20 px-8">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout