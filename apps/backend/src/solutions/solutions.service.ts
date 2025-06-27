import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Solution } from '../database/entities/Solution';
import { CreateSolutionDto, UpdateSolutionDto } from '../shared/dto/solution.dto';

@Injectable()
export class SolutionsService {
  constructor(
    @InjectRepository(Solution)
    private solutionsRepository: Repository<Solution>,
  ) {}

  async create(createSolutionDto: CreateSolutionDto): Promise<Solution> {
    const newSolution = this.solutionsRepository.create(createSolutionDto);
    return this.solutionsRepository.save(newSolution);
  }

  async findAll(): Promise<Solution[]> {
    return this.solutionsRepository.find();
  }

  async findOne(id: string): Promise<Solution> {
    const solution = await this.solutionsRepository.findOne({ where: { id } });
    if (!solution) {
      throw new NotFoundException(`Solution with ID "${id}" not found`);
    }
    return solution;
  }

  async update(id: string, updateSolutionDto: UpdateSolutionDto): Promise<Solution> {
    const solution = await this.findOne(id);
    Object.assign(solution, updateSolutionDto);
    return this.solutionsRepository.save(solution);
  }

  async remove(id: string): Promise<void> {
    const result = await this.solutionsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Solution with ID "${id}" not found`);
    }
  }
}