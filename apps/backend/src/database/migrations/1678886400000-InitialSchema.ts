import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class InitialSchema1678886400000 implements MigrationInterface {
  name = 'InitialSchema1678886400000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Users Table
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true, default: 'uuid_generate_v4()' },
          { name: 'email', type: 'varchar', isUnique: true },
          { name: 'name', type: 'varchar', isNullable: true },
          { name: 'password', type: 'varchar' },
          { name: 'createdAt', type: 'timestamp', default: 'now()' },
          { name: 'updatedAt', type: 'timestamp', default: 'now()' },
        ],
      }),
      true,
    );

    // Solutions Table
    await queryRunner.createTable(
      new Table({
        name: 'solution',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true, default: 'uuid_generate_v4()' },
          { name: 'name', type: 'varchar', isUnique: true },
          { name: 'description', type: 'text' },
          { name: 'category', type: 'varchar' },
          { name: 'features', type: 'text', isNullable: true }, // Stored as comma-separated string
          { name: 'price', type: 'varchar'},
          { name: 'imageUrl', type: 'varchar', isNullable: true },
          { name: 'developerInfo', type: 'varchar', isNullable: true },
          { name: 'createdAt', type: 'timestamp', default: 'now()' },
          { name: 'updatedAt', type: 'timestamp', default: 'now()' },
        ],
      }),
      true,
    );

    // Integrations Table
    await queryRunner.createTable(
      new Table({
        name: 'integration',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true, default: 'uuid_generate_v4()' },
          { name: 'userId', type: 'uuid' },
          { name: 'solutionId', type: 'uuid' },
          { name: 'solutionName', type: 'varchar' },
          { name: 'status', type: 'enum', enum: ['Active', 'Inactive', 'Pending'], default: 'Pending' },
          { name: 'configuration', type: 'jsonb', isNullable: true },
          { name: 'activatedAt', type: 'timestamp', default: 'now()' },
          { name: 'lastUsedAt', type: 'timestamp', isNullable: true },
        ],
      }),
      true,
    );

    // Foreign Keys for Integrations Table
    await queryRunner.createForeignKey(
      'integration',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'integration',
      new TableForeignKey({
        columnNames: ['solutionId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'solution',
        onDelete: 'RESTRICT',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('integration', 'FK_integration_solutionId');
    await queryRunner.dropForeignKey('integration', 'FK_integration_userId');
    await queryRunner.dropTable('integration');
    await queryRunner.dropTable('solution');
    await queryRunner.dropTable('user');
  }
}