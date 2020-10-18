const title = 'Jeremy Puchta'
const description = 'Software Engineering, and more.'

const SEO = {
  title,
  description,
  canonical: 'https://jeremypuchta.com',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.jeremypuchta.com',
    title,
    description,
    images: [
      {
        url: 'https://leerob.io/static/images/adrien-olichon-RCAhiGJsUUE-unsplash.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@jeremypuchta',
    site: '@jeremypuchta',
    cardType: 'summary_large_image'
  }
}

export default SEO;