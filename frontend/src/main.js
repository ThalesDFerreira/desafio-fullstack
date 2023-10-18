import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import hljs from 'highlight.js';

hljs.initHighlightingOnLoad();

createApp(App).use(router).mount('#app');
