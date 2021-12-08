async function routes(fastify, options) {
  const collection = fastify.mongo.db.collection("student_details");

  fastify.get("/", async (request, reply) => {
    reply.send("Hello World");
  });

  //get All Students
  fastify.get("/students", async (request, reply) => {
    const result = await collection.find({}, { name: 1 });
    if (result.length === 0) {
      throw new Error("No documents found");
    }
    return result;
  });

  //get a particular student details
  fastify.get("/student/:id", async (request, reply) => {
    const result = await collection.findOne({ RollNo: Number(request.params.id) });
    console.log("result", result);
    if (!result) {
      throw new Error("Invalid value");
    }
    return result;
  });

  //delete a student
  fastify.get("/delete/:id",async(request,reply)=>{
    return await collection.remove({RollNo:Number(request.params.id)})
  })
}

module.exports = routes;
