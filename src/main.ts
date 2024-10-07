import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';
import VueEasyLightbox from 'vue-easy-lightbox';

import './assets/css/main.css';

import esMX from './assets/i18n/es-MX.json';
import enUS from './assets/i18n/en-US.json';
import ptBR from './assets/i18n/pt-BR.json';

type MessageSchema = typeof enUS;

const i18n = createI18n<[MessageSchema], 'es-MX' | 'en-US' | 'pt-BR'>({
  globalInjection: true,
  legacy: false,
  locale: 'en-US',
  fallbackLocale: 'en',
  messages: {
    'es-MX': esMX,
    'en-US': enUS,
    'pt-BR': ptBR,
  },
});

const app = createApp(App);

app.use(i18n);
app.use(VueEasyLightbox);
app.use(router);
app.use(createPinia());

app.mount('#app');
