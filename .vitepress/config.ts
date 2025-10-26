import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Smith au Lait",
  description: 'Chúng tôi chỉ biết dịch game. [[Number 1 Rated BOFU2015]]',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
    ],

    search: {
      provider: 'local'
    },

    sidebar: [

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/smithaulait' }
    ]
  }
})
