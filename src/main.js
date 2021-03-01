import { createApp } from "vue";
import App from "./App.vue";
import { initFakeServer } from "./fakeapi/server";

initFakeServer();

createApp(App).mount("#app");
