const unified = require('unified')
const markdown = require('remark-parse')
// require the plugin
const admonitions = require('remark-admonitions')
const remark2rehype = require('remark-rehype')
const doc = require('rehype-document')
const format = require('rehype-format')
const html = require('rehype-stringify')
const vfile = require('to-vfile')
const report = require('vfile-reporter')
 
const options = {}
 
unified()
  .use(markdown)
  // add it to unified
  .use(admonitions, options)
  .use(remark2rehype)
  .use(doc)
  .use(format)
  .use(html)
  .process(vfile.readSync('./note.md'), (error, result) => {
      console.error(report(error || result))
      if (result) {
        result.basename = "output.html"
        vfile.writeSync(result)
      }
  })