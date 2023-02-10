import { App } from 'vue';
import { createPinia } from 'pinia';
import { PiniaPlugin } from '@/store/plugin';

const pinia = createPinia();
pinia.use(PiniaPlugin({ key: 'pinia' }));

export default pinia;
