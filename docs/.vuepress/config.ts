import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
import { description } from '../../package.json';
// import { path } from '@vuepress/utils';

export default defineUserConfig<DefaultThemeOptions>({
  title: 'Qaraqalpaq tili grammatikası',
  description,

  // theme: path.resolve(__dirname, './theme'),

  themeConfig: {
    logo: '/logo.png',
    logoDark: '/logo.png',
    repo: 'https://github.com/dauletbaev/qaraqalpaq-tili-grammatikasi',
    docsRepo: 'https://github.com/dauletbaev/qaraqalpaq-tili-grammatikasi-qollaniliwi',
    
    editLinkText: 'Bul betti redaktorlaw',
    lastUpdatedText: 'Aqırǵı jańalanǵan sáne',
    contributorsText: 'Contributors',
    warning: 'ESKERTIW',
    danger: 'QÁWIP',
    notFound: ['Bul bet tabılmadı'],
    backToHome: 'Bas betke qaytıw',
    openInNewWindow: 'Taza aynada ashıw',
    toggleDarkMode: 'toggle dark mode',
    toggleSidebar: 'toggle sidebar',

    navbar: [
      { text: 'Qollanba', link: '/guide/' },
      { text: 'Config', link: '/config/' },
    ],

    sidebar: [
      {
        text: 'Qollanba',
        link: '/guide/',
        children: [
          {
            text: 'Kirisiw',
            link: '/guide/getting-started',
            children: [],
          },
          {
            text: 'Ornatıw',
            link: '/guide/installation',
            children: [],
          },
        ],
      },
      {
        text: 'API',
        link: '/api/',
        children: [
          {
            text: 'Buwınǵa ból',
            link: '/api/test',
            children: [],
          },
        ],
      },
      {
        text: 'Grammatika',
        link: '/grammar/',
        children: [
          {
            text: 'Únleslik nızamı',
            link: '/grammar/synharmonism',
            children: [],
          },
        ],
      },
    ],
  },
});
