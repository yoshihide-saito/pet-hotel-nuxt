// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },

  css: ['~/assets/css/site.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'ja' },
      title: 'XXX動物病院 ペットホテル｜動物病院の中にある、ちいさなホテル。',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'XXX動物病院が運営するペットホテル。獣医師とスタッフが見守る完全個室で、犬と猫をお預かりします。持病やお薬のある子、シニアや子犬・子猫もご相談ください。'
        },
        { name: 'theme-color', content: '#faf9f7' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'XXX動物病院 ペットホテル' },
        {
          property: 'og:description',
          content: '動物病院の中にある、ちいさなホテル。獣医師とスタッフが見守る、完全個室のお預かり。'
        },
        { property: 'og:image', content: '/img/hero-1.jpg' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&family=Zen+Kaku+Gothic+New:wght@300;400;500;700&family=Zen+Old+Mincho:wght@400;500;600&display=swap'
        }
      ]
    }
  }
})
