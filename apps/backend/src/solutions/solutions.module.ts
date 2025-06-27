import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolutionsService } from './solutions.service';
import { SolutionsController } from './solutions.controller';
import { Solution } from '../database/entities/Solution';

@Module({
  imports: [
    TypeOrmModule.forFeature([Solution])
  ],
  providers: [SolutionsService],
  controllers: [SolutionsController],
  exports: [SolutionsService]
})
export class SolutionsModule {}