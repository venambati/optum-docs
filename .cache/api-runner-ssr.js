var plugins = [{
      plugin: require('/Users/vambati1/Projects/GITHUB-CONFLUENCE/optum-docs/node_modules/gatsby-plugin-tinacms/gatsby-ssr'),
      options: {"plugins":[{"resolve":"/Users/vambati1/Projects/GITHUB-CONFLUENCE/optum-docs/node_modules/gatsby-tinacms-git","id":"fb1ee21d-08e4-5008-aff0-4517b221db1f","name":"gatsby-tinacms-git","version":"0.32.0","pluginOptions":{"plugins":[],"pathToRepo":"/Users/vambati1/Projects/GITHUB-CONFLUENCE/optum-docs","pathToContent":"","gitRemote":"https://github.com/venambati/optum-docs.git","sshKey":"-----BEGIN OPENSSH PRIVATE KEY----- b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZWQyNTUxOQAAACAhWa0+ZiAd0B3t/Hw2wTx8YN1eKveM98SO1t8NxBCIIQAAAJho/hvqaP4b6gAAAAtzc2gtZWQyNTUxOQAAACAhWa0+ZiAd0B3t/Hw2wTx8YN1eKveM98SO1t8NxBCIIQAAAEBgxfa4ofAMYIpomN0Lh3itAV1pJDsSrSH8zJ77KINE4CFZrT5mIB3QHe38fDbBPHxg3V4q94z3xI7W3w3EEIghAAAAEnZfYW1iYXRpQHlhaG9vLmNvbQECAw==-----END OPENSSH PRIVATE KEY-----","defaultCommitMessage":"My default commit message","defaultCommitName":"My default commit name","defaultCommitEmail":"my@default-commit.email","pushOnCommit":true},"nodeAPIs":["onCreateDevServer"],"browserAPIs":["onClientEntry"],"ssrAPIs":[]},{"resolve":"/Users/vambati1/Projects/GITHUB-CONFLUENCE/optum-docs/node_modules/gatsby-tinacms-remark","id":"5df20784-2a6f-5d83-a3bb-e31e9e5a5d06","name":"gatsby-tinacms-remark","version":"0.32.1","pluginOptions":{"plugins":[]},"nodeAPIs":["setFieldsOnGraphQLNodeType"],"browserAPIs":["onClientEntry"],"ssrAPIs":[]}],"enabled":true,"sidebar":true},
    },{
      plugin: require('/Users/vambati1/Projects/GITHUB-CONFLUENCE/optum-docs/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('/Users/vambati1/Projects/GITHUB-CONFLUENCE/optum-docs/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/vambati1/Projects/GITHUB-CONFLUENCE/optum-docs/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Gatsby Starter Blog","short_name":"GatsbyJS","start_url":"/","background_color":"#ffffff","theme_color":"#663399","display":"minimal-ui","icon":"content/assets/gatsby-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"4a9773549091c227cd2eb82ccd9c5e3a"},
    },{
      plugin: require('/Users/vambati1/Projects/GITHUB-CONFLUENCE/optum-docs/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
