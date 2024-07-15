import app from './app.mjs';

const port = process.env.PORT || 3000;


// app.js veya server.js dosyasının başına ekleyin

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express'

const swaggerOptions = {
  definition: {
    openapi: '3.0.0', // OpenAPI sürümü
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


app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
