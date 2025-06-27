import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for frontend to communicate with backend
  app.enableCors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000', // Adjust in production
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Enable global validation pipe for DTOs
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove properties not defined in DTOs
    forbidNonWhitelisted: true, // Throw error if non-whitelisted properties are sent
    transform: true, // Automatically transform payloads to DTO instances
  }));

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3001;
  await app.listen(port);
  console.log(`Backend Application is running on: ${await app.getUrl()}`);
}
bootstrap();
