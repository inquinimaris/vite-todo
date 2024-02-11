import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import TheTask from './components/TheTask.vue';

const app = createApp(App);

app.component('TheHeader', TheHeader);
app.component('TheFooter', TheFooter);
app.component('TheTask', TheTask);

app.mount('#app');
