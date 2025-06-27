import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } => './users/users.module';
import { AuthModule } => './auth/auth.module';
import { SolutionsModule } => './solutions/solutions.module';
import { IntegrationsModule } => './integrations/integrations.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Loads .env files and makes them available globally
    DatabaseModule,
    UsersModule,
    AuthModule,
    SolutionsModule,
    IntegrationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}