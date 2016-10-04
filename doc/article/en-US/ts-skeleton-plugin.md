---
{
  "name": "ts-skeleton-plugin",
  "culture": "en-US",
  "description": "An overview of the ts-skeleton-plugin.",
  "engines" : { "aurelia-doc" : "^1.0.0" },
  "author": {
    "name": "Someone",
  	"url": "http://"
  },
  "contributors": [],
  "translators": [],
  "keywords": ["Plugin", "JavaScript", "TypeScript"]
}
---

## [Introduction](aurelia-doc://section/1/version/1.0.0)

This article covers the basic usage guidelines for `ts-skeleton-plugin`

To get started you'll need to install `ts-skeleton-plugin` using `jspm install ts-skeleton-plugin` or `npm install ts-skeleton-plugin --save`. Afterwards, add `.plugin('ts-skeleton-plugin')` to the configuration in your `main.js` to ensure the plugin is loaded at application startup.

If you're using the `aurelia-cli`, add the following configuration to your `aurelia.json` after you've installed the package with npm. 

<code-listing heading="aurelia.json">
  <source-code lang="ES 2015">
    {
      "name": "ts-skeleton-plugin",
      "path": "../node_modules/ts-skeleton-plugin/dist/amd",
      "main": "ts-skeleton-plugin"
    }
  </source-code>
</code-listing>

If you're not sure where to put this, search your `aurelia.json` for *aurelia-templating-resources* and put it underneath.

*todo: Add your documentation here*
