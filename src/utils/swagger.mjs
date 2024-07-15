import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express MongoDB API',
      version: '1.0.0',
      description: 'Express ve MongoDB kullanılarak oluşturulmuş basit bir API',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.mjs'], 
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;