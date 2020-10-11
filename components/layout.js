import Head from "next/head"
import Footer from './footer'
import Header from "./header";

function Layout({ children }) {
  return (
    <div className="container max-w-screen-md mx-auto pt-12 px-8">
      <Head>
        <meta name="og:title" content="Jeremy Puchta Personal Website" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}/>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}>
        </script>
      </Head>
      <Header />
      <main className="min-h-screen mb-8">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout