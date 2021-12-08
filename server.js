const fastify = require("fastify")({
  logger: true,
});
fastify.register(require("./config/connection"));

fastify.register(require("./routes"));

// fastify.get('/', function (request, response) {
//     response.send({ hello: 'world' })
//   })

fastify.listen(3000, function (err, response) {
  if (response) {
    fastify.log.info("Server is started at 3000");
  } else {
    fastify.log.error(err);
  }
});
