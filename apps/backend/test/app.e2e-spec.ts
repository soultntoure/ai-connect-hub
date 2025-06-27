import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { getConnection } from 'typeorm';
import { User } from '../src/database/entities/User';
import { RegisterDto } from '../src/shared/dto/auth.dto';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let connection;
  let accessToken: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true, 
      forbidNonWhitelisted: true,
      transform: true,
    }));
    await app.init();

    connection = getConnection();
    await connection.synchronize(true); // Drop and recreate schema for tests

    // Register a test user for subsequent authenticated tests
    const registerDto: RegisterDto = {
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User',
    };

    const registerRes = await request(app.getHttpServer())
      .post('/auth/register')
      .send(registerDto)
      .expect(201);
    
    accessToken = registerRes.body.access_token;
  });

  afterAll(async () => {
    await connection.close();
    await app.close();
  });

  it('/ (GET) should return 404 for non-existent root path', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(404);
  });

  it('/auth/register (POST) should register a new user', () => {
    return request(app.getHttpServer())
      .post('/auth/register')
      .send({
        email: 'newuser@example.com',
        password: 'newpassword123',
        name: 'New User'
      })
      .expect(201)
      .expect((res) => {
        expect(res.body).toHaveProperty('access_token');
        expect(res.body.user).toHaveProperty('email', 'newuser@example.com');
      });
  });

  it('/auth/login (POST) should log in an existing user', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'test@example.com',
        password: 'password123',
      })
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('access_token');
        expect(res.body.user).toHaveProperty('email', 'test@example.com');
      });
  });

  it('/auth/profile (POST) should return user profile for authenticated request', () => {
    return request(app.getHttpServer())
      .post('/auth/profile')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(201) // Assuming Post here is just a test for protected route
      .expect((res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('email', 'test@example.com');
      });
  });

  it('/users (GET) should return all users (protected)', () => {
    return request(app.getHttpServer())
      .get('/users')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200)
      .expect((res) => {
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThanOrEqual(1);
        expect(res.body[0]).not.toHaveProperty('password'); // Password should be excluded
      });
  });

  // Add more tests for solutions and integrations endpoints
});
