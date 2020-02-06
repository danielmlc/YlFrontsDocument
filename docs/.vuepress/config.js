/*
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2020-02-03 17:47:35
 * @LastEditTime : 2020-02-06 17:28:39
 */

module.exports = {
  title: '易龙软件开发文档',
  description: 'YLSoft Work Document',
  port: 8066, 
  base: '/YlDocument/',
  head: [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  themeConfig: {
    logo: '/img/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    displayAllHeaders: true,
    nav: [
      { text: '首页', link: '/' },
      {
        text: '开发规范',
        items: [
          { text: '基础规范', link: '/base/base-rules/' },
          { text: '前端规范', link: '/front/front-rules/' },
          // { text: '移动端规范', link: '/webapp/webapp-rules/' },
          { text: '服务端规范', link: '/service/service-rules/' }
        ]
      },
      { text: '日常工作', link: '/daily/editor'},
      { text: '技术扩展', link: '/extend/markdown'},
      { text: 'github', link: 'https://github.com/YLSoftWorkGroup'  },
    ],
    sidebarDepth: 4,
    sidebar: {
      '/base/': [ 
        'base-rules',
      ],
      '/front/': [ 
        'front-rules',
      ],
      '/webapp/': [ 
        'webapp-rules',
      ],
      '/service/': [ 
        'service-rules',
      ],
      '/daily/': [ 
        'editor',
        'npm-use',
      ],
      '/extend/': [
        'markdown',
        'git'
      ],
    },
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom'
  ]
  }