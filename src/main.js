import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faServer,
  faDisplay,
  faCode,
  faDatabase,
  faEnvelope,
  faGears,
  faRoadBridge,
  faLaptopCode,
  faInfinity,
  faCloud
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faJava,
  faJs,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faVuejs,
  faAngular,
  faReact,
  faGoogle,
  faGit,
  faDocker,
  faJenkins
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import './assets/main.css';

config.autoReplaceSvg = true;

library.add(
  faServer,
  faDisplay,
  faCode,
  faDatabase,
  faGithub,
  faLinkedin,
  faEnvelope,
  faGears,
  faJava,
  faJs,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faVuejs,
  faReact,
  faAngular,
  faGoogle,
  faGit,
  faDocker,
  faRoadBridge,
  faLaptopCode,
  faInfinity,
  faJenkins,
  faCloud
);

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.mount('#app');
