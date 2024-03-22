// // @ts-check
// import { defineConfig } from 'astro/config';
// import mdx from '@astrojs/mdx';
// import remarkUnwrapImages from 'remark-unwrap-images';
// import sitemap from '@astrojs/sitemap';
// import remarkAdmonitions from 'remark-admonitions';
// // https://astro.build/config
// export default defineConfig({
// 	site: 'https://example.com',
// 	integrations: [mdx(), sitemap()],
// 	markdown: {
// 		remarkPlugins: [
// 		  remarkAdmonitions,
// 		  // ...other plugins
// 		],
// 	  },
// });



import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkDirective from 'remark-directive';
import remarkCalloutDirectives from '@microflash/remark-callout-directives';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(), sitemap()],
    markdown: {
        remarkPlugins: [
            remarkDirective,
            remarkCalloutDirectives,
            // ...other plugins
        ],
    },
});