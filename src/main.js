import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faServer,
  faDisplay,
  faCode,
  faDatabase,
  faEnvelope,
  faGears
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import './assets/main.css';

library.add(faServer, faDisplay, faCode, faDatabase, faGithub, faLinkedin, faEnvelope, faGears);

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.mount('#app');
