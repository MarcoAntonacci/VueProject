import { createApp } from 'vue'
import router from './router.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'

import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
library.add(faSpinner);



app.mount('#app')
