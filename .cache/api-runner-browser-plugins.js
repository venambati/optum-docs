module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-tinacms/gatsby-browser.js'),
      options: {"plugins":[{"resolve":"/Users/vambati1/Projects/GITHUB-CONFLUENCE/optum-docs/node_modules/gatsby-tinacms-git","id":"d7121087-7503-572b-8305-88031c66f5a2","name":"gatsby-tinacms-git","version":"0.32.0","pluginOptions":{"plugins":[],"pathToRepo":"/Users/vambati1/Projects/GITHUB-CONFLUENCE/optum-docs","pathToContent":"/optum-docs","gitRemote":"https://github.com/venambati/optum-docs.git","sshKey":"-----BEGIN OPENSSH PRIVATE KEY----- b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZWQyNTUxOQAAACAhWa0+ZiAd0B3t/Hw2wTx8YN1eKveM98SO1t8NxBCIIQAAAJho/hvqaP4b6gAAAAtzc2gtZWQyNTUxOQAAACAhWa0+ZiAd0B3t/Hw2wTx8YN1eKveM98SO1t8NxBCIIQAAAEBgxfa4ofAMYIpomN0Lh3itAV1pJDsSrSH8zJ77KINE4CFZrT5mIB3QHe38fDbBPHxg3V4q94z3xI7W3w3EEIghAAAAEnZfYW1iYXRpQHlhaG9vLmNvbQECAw==-----END OPENSSH PRIVATE KEY-----","defaultCommitMessage":"My default commit message","defaultCommitName":"My default commit name","defaultCommitEmail":"my@default-commit.email","pushOnCommit":true},"nodeAPIs":["onCreateDevServer"],"browserAPIs":["onClientEntry"],"ssrAPIs":[]},{"resolve":"/Users/vambati1/Projects/GITHUB-CONFLUENCE/optum-docs/node_modules/gatsby-tinacms-remark","id":"5df20784-2a6f-5d83-a3bb-e31e9e5a5d06","name":"gatsby-tinacms-remark","version":"0.32.1","pluginOptions":{"plugins":[]},"nodeAPIs":["setFieldsOnGraphQLNodeType"],"browserAPIs":["onClientEntry"],"ssrAPIs":[]}],"enabled":true,"sidebar":true},
    },{
      plugin: require('../node_modules/gatsby-tinacms-git/gatsby-browser.js'),
      options: {"plugins":[],"pathToRepo":"/Users/vambati1/Projects/GITHUB-CONFLUENCE/optum-docs","pathToContent":"/optum-docs","gitRemote":"https://github.com/venambati/optum-docs.git","sshKey":"-----BEGIN OPENSSH PRIVATE KEY----- b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZWQyNTUxOQAAACAhWa0+ZiAd0B3t/Hw2wTx8YN1eKveM98SO1t8NxBCIIQAAAJho/hvqaP4b6gAAAAtzc2gtZWQyNTUxOQAAACAhWa0+ZiAd0B3t/Hw2wTx8YN1eKveM98SO1t8NxBCIIQAAAEBgxfa4ofAMYIpomN0Lh3itAV1pJDsSrSH8zJ77KINE4CFZrT5mIB3QHe38fDbBPHxg3V4q94z3xI7W3w3EEIghAAAAEnZfYW1iYXRpQHlhaG9vLmNvbQECAw==-----END OPENSSH PRIVATE KEY-----","defaultCommitMessage":"My default commit message","defaultCommitName":"My default commit name","defaultCommitEmail":"my@default-commit.email","pushOnCommit":true},
    },{
      plugin: require('../node_modules/gatsby-tinacms-remark/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":630,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Gatsby Starter Blog","short_name":"GatsbyJS","start_url":"/","background_color":"#ffffff","theme_color":"#663399","display":"minimal-ui","icon":"content/assets/gatsby-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"4a9773549091c227cd2eb82ccd9c5e3a"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
