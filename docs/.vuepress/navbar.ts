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
  { 
    text: '归档',
    items: [
      { text: '标签', link: '/blog/tags/'},
      { text: '文章归档', link: '/blog/archives/'},
      { text: '分类', link: '/blog/categories/'},
    ]
  }
])
