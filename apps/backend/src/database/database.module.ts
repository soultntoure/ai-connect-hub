import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './entities/User';
import { Solution } from './entities/Solution';
import { Integration } from './entities/Integration';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),
        entities: [User, Solution, Integration],
        synchronize: false, // Set to false in production, use migrations
        migrationsRun: false, // Control migrations manually or via CI/CD
        logging: true,
        // Add TypeORM CLI specific configurations for migrations
        migrations: [
          'dist/apps/backend/src/database/migrations/*.js'
        ],
        cli: {
          migrationsDir: 'apps/backend/src/database/migrations',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}