/**
 * @file swagger.js
 * @summary Configure and initialize swagger
 * @description This file contains swagger configuration and initiates swagger and
 * exposes swagger routes to be used by express app.
 * */
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'DormEase API documentation',
        version: '1.0.0',
    },
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
};

const options = {
    swaggerDefinition: swaggerDefinition,
    apis: ['./routes/*.js','./docs/api-docs.yml']
};

const swaggerSpec = swaggerJSDoc(options);

const initiateSwagger = router => {
    router.get('/api-docs.json', function (req, res) {
        res.send(swaggerSpec);
    });
    router.use('/api-docs', swaggerUi.serveFiles(swaggerSpec));
    router.get('/api-docs', (req, res) => {
        res.send(swaggerUi.generateHTML(swaggerSpec));
    });
};

module.exports = initiateSwagger;