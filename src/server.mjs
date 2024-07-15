import app from './app.mjs';
import swaggerUI from 'swagger-ui-express'
import swaggerSpec from './utils/swagger.mjs';

const port = process.env.PORT || 3000;





app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
