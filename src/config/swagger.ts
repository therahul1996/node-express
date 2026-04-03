const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User API",
      version: "1.0.0",
      description: "API documentation for User service",
    },
    servers: [
      {
        url: "http://localhost:9000",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
  //   apis: ["./routes/*.ts"], // where your route files are
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
