import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import { MotionPlugin } from "@vueuse/motion";

import mitt from "mitt";
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

// app.use(router).mount("#app");
app.use(router);
app.use(MotionPlugin);

app.mount("#app");
