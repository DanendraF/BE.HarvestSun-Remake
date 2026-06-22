import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Agrilink REST API Documentation',
      version: '1.0.0',
      description: 'API Documentation for Agrilink application using Express and Prisma ORM',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            email: { type: 'string', format: 'email' },
            fullName: { type: 'string' },
            role: { type: 'string', enum: ['farmer', 'officer', 'dinas', 'admin'] },
            avatarUrl: { type: 'string', nullable: true },
            createdAt: { type: 'string', format: 'date-time' },
          },
        },
        FarmerProfile: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            userId: { type: 'string', format: 'uuid' },
            phone: { type: 'string', nullable: true },
            location: { type: 'string', nullable: true },
            performanceScore: { type: 'number' },
            status: { type: 'string', enum: ['active', 'inactive'] },
          },
        },
        OfficerProfile: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            userId: { type: 'string', format: 'uuid' },
            region: { type: 'string', nullable: true },
            performanceScore: { type: 'number' },
            status: { type: 'string', enum: ['active', 'inactive'] },
          },
        },
        Farm: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            userId: { type: 'string', format: 'uuid' },
            name: { type: 'string' },
            location: { type: 'string', nullable: true },
            size: { type: 'number', description: 'Size in Hectares' },
            cropType: { type: 'string', nullable: true },
            status: { type: 'string', enum: ['active', 'inactive', 'harvesting'] },
            healthScore: { type: 'integer' },
            createdAt: { type: 'string', format: 'date-time' },
          },
        },
        Crop: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            farmId: { type: 'string', format: 'uuid' },
            name: { type: 'string' },
            variety: { type: 'string', nullable: true },
            plantingDate: { type: 'string', format: 'date' },
            expectedHarvest: { type: 'string', format: 'date', nullable: true },
            growthStage: { type: 'string' },
            healthStatus: { type: 'string', enum: ['healthy', 'warning', 'critical'] },
            progress: { type: 'integer' },
          },
        },
        Activity: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            farmId: { type: 'string', format: 'uuid' },
            type: { type: 'string', enum: ['irrigation', 'fertilizing', 'harvesting', 'pest_control', 'monitoring'] },
            description: { type: 'string', nullable: true },
            date: { type: 'string', format: 'date' },
            status: { type: 'string', enum: ['completed', 'scheduled', 'in_progress'] },
            cost: { type: 'number' },
          },
        },
        DiseaseAlert: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            farmId: { type: 'string', format: 'uuid' },
            diseaseName: { type: 'string' },
            severity: { type: 'string', enum: ['low', 'medium', 'high', 'critical'] },
            detectedAt: { type: 'string', format: 'date-time' },
            imageUrl: { type: 'string', nullable: true },
            status: { type: 'string', enum: ['active', 'resolved'] },
            recommendation: { type: 'string', nullable: true },
          },
        },
        Recommendation: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            officerId: { type: 'string', format: 'uuid' },
            farmerId: { type: 'string', format: 'uuid' },
            message: { type: 'string' },
            sent: { type: 'boolean' },
            createdAt: { type: 'string', format: 'date-time' },
          },
        },
        OfficerFarmerAssignment: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            officerId: { type: 'string', format: 'uuid' },
            farmerId: { type: 'string', format: 'uuid' },
            assignedAt: { type: 'string', format: 'date-time' },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts', './src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
