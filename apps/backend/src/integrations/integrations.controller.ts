import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Req } from '@nestjs/common';
import { IntegrationsService } from './integrations.service';
import { CreateIntegrationDto, UpdateIntegrationDto } from '../shared/dto/integration.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('integrations')
@UseGuards(AuthGuard('jwt')) // All integration routes require authentication
export class IntegrationsController {
  constructor(private readonly integrationsService: IntegrationsService) {}

  @Post()
  create(@Body() createIntegrationDto: CreateIntegrationDto, @Req() req) {
    // Assign the user ID from the authenticated request
    return this.integrationsService.create(req.user.sub, createIntegrationDto);
  }

  @Get()
  findAll(@Req() req) {
    // Find all integrations for the authenticated user
    return this.integrationsService.findAllByUserId(req.user.sub);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req) {
    // Find a specific integration for the authenticated user
    return this.integrationsService.findOneForUser(id, req.user.sub);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateIntegrationDto: UpdateIntegrationDto, @Req() req) {
    return this.integrationsService.updateForUser(id, req.user.sub, updateIntegrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req) {
    return this.integrationsService.removeForUser(id, req.user.sub);
  }
}