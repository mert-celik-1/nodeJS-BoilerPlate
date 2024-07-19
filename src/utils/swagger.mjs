import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API',
      version: '1.0.0',
      description: 'User management API documentation',
    },
    servers: [
      {
        url: 'http://webapi:3000'//'http://localhost:3000', // API URL
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./swagger/*.mjs'], 
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;