import './styles/vars.css';
import './styles/layout.css';
import './styles/code.css';
import './styles/custom-blocks.css';
import './styles/sidebar-links.css';
import Layout from './Layout.vue';
import NotFound from './NotFound.vue';
const theme = {
  Layout,
  NotFound: NotFound, // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
  }
};
export default theme;
