import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: '笔记',
    items: [
      { text: 'Feynman III 札记', link: '/notes/Feynman-III/README.md' },
      { text: '高等微积分 (1)', link: '/notes/integral/README.md' },
    ]
  },
  { text: '博客', link: '/blog/' },
  { 
    text: '关于',
    items: [
      { text: '关于我', link: '/about/' },
      { text: '时间线', link: '/timeline/' },
    ]
  },
  { text: '友链', link: '/links/' },
])
