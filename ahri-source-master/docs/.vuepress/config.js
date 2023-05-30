const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Архитектура систем искусственного интеллекта',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: "/ahri/",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: 'https://cdn-icons-png.flaticon.com/512/2083/2083213.png' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    variables: {
        nTasks: '6 + 1',
        tasks: [
            {
                minScore: 5,
                maxScore: 10
            },
            {
                minScore: 5,
                maxScore: 10
            },
            {
                minScore: 10,
                maxScore: 20
            },
            {
                minScore: 5,
                maxScore: 20
            },
            {
                minScore: 5,
                maxScore: 10
            },
            {
                minScore: 5,
                maxScore: 10
            },
            {
                minScore: 15,
                maxScore: 20
            }
        ]
    },
    repo: 'https://github.com/MANASLU8/ahri-source',
    editLinks: false,
    docsDir: '',
    editLinks: true,
    lastUpdated: true,
    docsDir: 'docs',
    nav: [
      {
        text: 'Задания',
        link: '/task/',
      },
      {
        text: 'Проекты',
        link: '/project/'
      }
    ],
    sidebar: {
      '/task/': [
        {
          title: 'Описание курса',
          collapsable: false,
          children: [
            '',
            'glossary',
            'objective',
            'structure'
          ]
        },
        {
          title: 'Лабораторные работы',
          collapsable: false,
          children: [
            'task/1',
            'task/2',
            'task/3',
            'task/4',
            'task/5',
            'task/6',
            'task/7'
          ]
        }
      ],
      '/project/': [
        {
          title: 'Проекты участников курса',
          collapsable: false,
          children: [
            '',
            {
                title: 'soy',
                children: [
                    'soy/',
                    'soy/task/1',
                ]
            }
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/plugin-nprogress',
    'vue-skeleton-loading',
    [
        '@adamdehaven/vuepress-plugin-custom-tooltip',
        {
            name: 'tt'
        }
    ]
  ]
}
