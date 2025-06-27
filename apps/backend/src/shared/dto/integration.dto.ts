import { IsString, IsNotEmpty, IsOptional, IsEnum, IsObject } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateIntegrationDto {
  @IsString()
  @IsNotEmpty()
  solutionId!: string;

  @IsString()
  @IsNotEmpty()
  solutionName!: string;

  @IsOptional()
  @IsEnum(['Active', 'Inactive', 'Pending'])
  status?: 'Active' | 'Inactive' | 'Pending';

  @IsOptional()
  @IsObject()
  @Type(() => Object) // Ensures that configuration is treated as a plain object
  configuration?: Record<string, any>;
}

export class UpdateIntegrationDto {
  @IsOptional()
  @IsEnum(['Active', 'Inactive', 'Pending'])
  status?: 'Active' | 'Inactive' | 'Pending';

  @IsOptional()
  @IsObject()
  @Type(() => Object)
  configuration?: Record<string, any>;
}
