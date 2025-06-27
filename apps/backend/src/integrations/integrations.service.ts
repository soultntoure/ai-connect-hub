import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Integration } from '../database/entities/Integration';
import { CreateIntegrationDto, UpdateIntegrationDto } from '../shared/dto/integration.dto';

@Injectable()
export class IntegrationsService {
  constructor(
    @InjectRepository(Integration)
    private integrationsRepository: Repository<Integration>,
  ) {}

  async create(userId: string, createIntegrationDto: CreateIntegrationDto): Promise<Integration> {
    const newIntegration = this.integrationsRepository.create({
      ...createIntegrationDto,
      userId: userId, // Associate with the authenticated user
      activatedAt: new Date(),
    });
    return this.integrationsRepository.save(newIntegration);
  }

  async findAllByUserId(userId: string): Promise<Integration[]> {
    return this.integrationsRepository.find({ where: { userId } });
  }

  async findOneForUser(id: string, userId: string): Promise<Integration> {
    const integration = await this.integrationsRepository.findOne({ where: { id, userId } });
    if (!integration) {
      throw new NotFoundException(`Integration with ID "${id}" not found for this user`);
    }
    return integration;
  }

  async updateForUser(id: string, userId: string, updateIntegrationDto: UpdateIntegrationDto): Promise<Integration> {
    const integration = await this.findOneForUser(id, userId); // Ensures user owns this integration
    Object.assign(integration, updateIntegrationDto);
    return this.integrationsRepository.save(integration);
  }

  async removeForUser(id: string, userId: string): Promise<void> {
    const result = await this.integrationsRepository.delete({ id, userId });
    if (result.affected === 0) {
      throw new NotFoundException(`Integration with ID "${id}" not found for this user`);
    }
  }
}