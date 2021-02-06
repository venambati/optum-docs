module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Blog`,
    author: {
      name: `Kyle Mathews`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    'gatsby-transformer-remark',
    {
        resolve: 'gatsby-plugin-tinacms',
        options: {
            enabled: true,
            sidebar: true,
            plugins: [
                {
                    resolve: 'gatsby-tinacms-git',
                    options: {
                        pathToRepo: __dirname,
                        pathToContent: '/',
                        gitRemote: 'https://github.com/venambati/optum-docs.git',
                        sshKey: '-----BEGIN OPENSSH PRIVATE KEY----- b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZWQyNTUxOQAAACAhWa0+ZiAd0B3t/Hw2wTx8YN1eKveM98SO1t8NxBCIIQAAAJho/hvqaP4b6gAAAAtzc2gtZWQyNTUxOQAAACAhWa0+ZiAd0B3t/Hw2wTx8YN1eKveM98SO1t8NxBCIIQAAAEBgxfa4ofAMYIpomN0Lh3itAV1pJDsSrSH8zJ77KINE4CFZrT5mIB3QHe38fDbBPHxg3V4q94z3xI7W3w3EEIghAAAAEnZfYW1iYXRpQHlhaG9vLmNvbQECAw==-----END OPENSSH PRIVATE KEY-----',
                        defaultCommitMessage: 'My default commit message',
                        defaultCommitName: 'My default commit name',
                        defaultCommitEmail: 'my@default-commit.email',
                        pushOnCommit: true,
                    },
                },
                'gatsby-tinacms-remark',
            ],
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
