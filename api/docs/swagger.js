"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Documentacion de mi API",
        version: "1.0.0",
    },
    servers: [
        {
            url: "http://localhost:4000",
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
            },
        },
        schemas: {
            audit: {
                type: "object",
                required: ["method", "status", "type", "response"],
                properties: {
                    method: {
                        type: "string",
                    },
                    status: {
                        type: "number",
                    },
                    type: {
                        type: "string",
                    },
                    response: {
                        type: "string",
                    },
                },
            },
        },
    },
};
const swaggerOptions = {
    swaggerDefinition,
    apis: ["./src/routes/api/*"],
};
exports.default = (0, swagger_jsdoc_1.default)(swaggerOptions);
