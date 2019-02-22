module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'KTM Welding & Fabrications',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Steel fabrication, welding, engineering and plasma cutting, Henstridge, Somerset' },
      { name: 'keywords', content: 'Steel fabrication,welding,engineering,plasma cutting,Henstridge,Somerset'},
      { name: 'author', content: 'Nick John - nickjohn.co.uk'},
      {
        hid: `og:title`,
        property: 'og:title',
        content: `KTM WELDING & FABRICATIONS`
      },
      {
        hid: `og:url`,
        property: 'og:url',
        content: 'https://ktmfabrications.co.uk/'
      },
      {
        hid: `og:image`,
        property: 'og:image',
        content: `https://res.cloudinary.com/nickjohn/image/upload/w_800/v1550849428/ktm/ktm-header.jpg`
      },
      {
        hid: `og:description`,
        property: 'og:description',
        content: 'Steel fabrication, welding, engineering and plasma cutting, Henstridge, Somerset'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    '@nuxtjs/sitemap'
   ],
   sitemap: {
    path: '/sitemap.xml',
     hostname: 'https://ktmfabrications.co.uk/',
    generate: true,
     exclude: ['/thanks'],
    routes: [
      '/'
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ffffff' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

