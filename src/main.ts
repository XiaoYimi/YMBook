import { createApp } from 'vue';
import App from '@/App.vue';
import Program from '@/cores/program';
import router from '@/router/index';
import pinia from '@/store/index';
import 'normalize.css';
import '@/assets/style/common.css';
import '@/router/permission';

const program = new Program(createApp(App));
program.addModule(router);
program.addModule(pinia);
program.startup();
