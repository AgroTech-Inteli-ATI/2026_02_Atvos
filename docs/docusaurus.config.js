// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AgroTech Inteli + Atvos',
  tagline: 'Viabilidade de um centro de distribuição de materiais MRO',
  favicon: 'img/favicon.ico',
  url: 'https://agrotech-inteli-ati.github.io',
  baseUrl: '/2026_02_Atvos/',
  trailingSlash: true,
  organizationName: 'AgroTech-Inteli-ATI',
  projectName: '2026_02_Atvos',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      navbar: {
        title: 'AgroTech Inteli',
        logo: {
          alt: 'AgroTech Inteli',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://atvos.com/',
            label: 'Atvos',
            position: 'right',
            className: 'navbar-atvos',
          },
          {type: 'docSidebar', sidebarId: 'caseSidebar', position: 'left', label: 'Entregas'},
          {
            href: 'https://github.com/AgroTech-Inteli-ATI/2026_02_Atvos',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [{label: 'Início', to: '/'}],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AgroTech Inteli + Atvos. Desenvolvido no Programa de Trainees.`,
      },
      prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
    }),
};

export default config;
