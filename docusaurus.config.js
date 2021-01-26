/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'Neumékca City',
  tagline: 'Build unique DeFi product',
  url: 'https://neumekca.city',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Neumekca City', // Usually your GitHub org/user name.
  projectName: 'neumekca-city-homepage', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Neumékca City Project',
      logo: {
        alt: 'Neumékca City Project Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://app.neumekca.city',
          label: 'App↗',
          position: 'left',
        },
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://t.me/neumekcagroup/',
          label: 'Telegram',
          position: 'right',
        },
        {
          href: 'https://github.com/Neumekca-City',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Feature',
              to: 'docs/02feature',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram Group',
              href: 'https://t.me/neumekcagroup/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/neumekca',
            },
            {
              label: 'Medium',
              href: 'https://neumekcacity.medium.com/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Huobi ECO Chain',
              href: 'https://www.hecochain.com/en-us/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Neumekca-City',
            },
          ],
        },
        {
          title: 'Legal',
          // Please do not remove the privacy and terms, it's a legal requirement.
          items: [
            {
              label: 'Privacy',
              href: 'https://opensource.facebook.com/legal/privacy/',
            },
            {
              label: 'Terms',
              href: 'https://opensource.facebook.com/legal/terms/',
            },
          ],
        },
      ],
      logo: {
        alt: 'Neumékca Open Source Logo',
        src: 'img/logo.png',
        href: 'https://app.neumekca.city/',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} Neumékca, city. Built with ❤ of ZERO.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Neumekca-City',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Neumekca-City',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
