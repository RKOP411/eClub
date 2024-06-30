import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Oruga from '@oruga-ui/oruga-next';
import bottomNavigationVue from "bottom-navigation-vue";

import { bootstrapConfig } from '@oruga-ui/theme-bootstrap';

import '@oruga-ui/theme-bootstrap/dist/bootstrap.css';
import '@mdi/font/css/materialdesignicons.min.css';

import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap"

import "bottom-navigation-vue/dist/style.css";

const app = createApp(App)

app.use(router).use(Oruga, bootstrapConfig)
app.use(bottomNavigationVue);

app.mount('#app')