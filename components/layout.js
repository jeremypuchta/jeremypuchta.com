import Head from "next/head"
import Footer from './footer'
import Header from "./header";

function Layout({ children }) {
  return (
    <div className="container max-w-screen-lg mx-auto pt-12 px-8">
      <Head>
        <meta name="og:title" content="Jeremy Puchta Personal Website" />
      </Head>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout