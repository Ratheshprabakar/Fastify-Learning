const fastifyPlugin = require("fastify-plugin");

async function connection(fastify, options) {
  require("dotenv").config();
  fastify.register(require("fastify-mongodb"), {
    url: "mongodb://127.0.0.1:27017/student_info",
  });
}

module.exports = fastifyPlugin(connection);
