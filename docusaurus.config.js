// If you are using dotenv (https://www.npmjs.com/package/dotenv)
require('dotenv').config();

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ChecklistApp',
  tagline: 'Quickly generate and share checklists',
  url: 'https://github.com/',
  baseUrl: '/checklist-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/checklist.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nikolai4D', // Usually your GitHub org/user name.
  projectName: 'checklist-doc', // Usually your repo name.
  trailingSlash: false,
  customFields: {
    // Put your custom environment here
    'GIT_USER': process.env.GIT_USER,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Checklist App',
        logo: {
          alt: 'Checklist App Logo',
          src: 'img/checklist.png',
        },
        items: [
          {
            to: 'docs/introduction',
            position: 'left',
            label: 'Introduction',
          },
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://www.google.com',
            position: 'left',
            label: 'Demo',
          }
          ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/introduction',
              },
            ],
          },
          {
            title: 'Us',
            items: [
              {
                label: 'Nikdev',
                href: 'https://nikdev.io/',
              },
              {
                label: 'ContechOS',
                href: 'https://github.com/nikolai4D/ContechOS',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
