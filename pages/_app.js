import { Container } from 'next/app';
import { DefaultSeo } from 'next-seo';

import '../styles/globals.css'
import '../styles/new-moon.css'

import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Container>
)
}

export default MyApp