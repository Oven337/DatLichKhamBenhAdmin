import { createApp } from 'vue';
import App from './App.vue';

import 'primevue/resources/themes/lara-light-blue/theme.css';

import '/node_modules/primeflex/primeflex.css';

import PrimeVue from 'primevue/config';

import Button from "primevue/button";
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import ScrollPanel from 'primevue/scrollpanel';
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';

const app = createApp(App);

app.use(PrimeVue);

app.component('Button', Button);
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('ScrollPanel',ScrollPanel);
app.component('Carousel',Carousel);
app.component('Tag',Tag);

app.mount('#app');