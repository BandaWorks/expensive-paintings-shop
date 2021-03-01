import { createServer, Model, RestSerializer } from "miragejs";
import paintingsDatabase from "./db.json";

const DEFAULT_API_DELAY = 2000;

console.log(paintingsDatabase.items);

const initFakeServer = ({
  environment = "development",
  apiDelay = DEFAULT_API_DELAY,
} = {}) => {
  createServer({
    environment,

    models: {
      painting: Model,
    },

    serializers: {
      application: RestSerializer,
    },

    seeds(server) {
      server.db.loadData({
        paintings: paintingsDatabase.items,
      });
    },

    routes() {
      this.namespace = "api";
      this.timing = apiDelay;

      this.get("/paintings");
      this.patch("/paintings/:id");
    },
  });
};

export { initFakeServer };
