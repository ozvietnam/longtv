import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LONGTV',
  description: 'Công ty dịch vụ tư vấn đầu tư — FDI consulting planning',
  lang: 'vi-VN',
  srcExclude: ['README.md'],
  themeConfig: {
    nav: [
      { text: 'Trang chủ', link: '/' },
      { text: 'Cây vấn đề', link: '/01-project-structure/00-MACRO_PROBLEMS' },
    ],
    sidebar: [
      {
        text: 'Dự án',
        items: [
          { text: 'Cây vấn đề lớn (Macro)', link: '/01-project-structure/00-MACRO_PROBLEMS' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ozvietnam/longtv' },
    ],
  },
})
