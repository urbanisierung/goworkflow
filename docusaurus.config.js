module.exports = {
  title: "Go Workflow!",
  tagline: "your weekly news feed about all topics around workflows",
  url: "https://goworkflow.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "urbanisierung", // Usually your GitHub org/user name.
  projectName: "goworkflow", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Go Workflow!",
      logo: {
        alt: "Go Workflow!",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog/", label: "Blog", position: "left" },
        {
          href: "https://github.com/urbanisierung/goworkflow",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/urbanisierung",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/urbanisierung/goworkflow",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Go Workflow`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/urbanisierung/goworkflow/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/urbanisierung/goworkflow/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
