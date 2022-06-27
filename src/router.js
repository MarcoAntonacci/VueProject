import { createRouter, createWebHistory } from 'vue-router';

import DoveSiamo from './pages/DoveSiamo.vue';
import ChiSiamo from './pages/ChiSiamo.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', redirect:'/chisiamo'},
        {path: '/chisiamo', component: ChiSiamo},
        {path: '/dovesiamo', component: DoveSiamo},
    ],
});



export default router;