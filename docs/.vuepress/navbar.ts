import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: '笔记',
    items: [
      { text: 'Feynman III 札记', link: '/notes/Feynman-III/README.md' }
    ]
  },
])
