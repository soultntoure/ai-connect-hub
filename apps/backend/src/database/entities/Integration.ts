import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } => './User';
import { Solution } => './Solution';

@Entity()
export class Integration {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  solutionId: string;

  @Column()
  solutionName: string; // Denormalized for easier querying

  @Column({
    type: 'enum',
    enum: ['Active', 'Inactive', 'Pending'],
    default: 'Pending',
  })
  status: 'Active' | 'Inactive' | 'Pending';

  @Column({
    type: 'jsonb', // PostgreSQL specific JSON type
    nullable: true,
  })
  configuration: Record<string, any>; // Flexible JSON field for AI solution specific config

  @CreateDateColumn()
  activatedAt: Date;

  @UpdateDateColumn({ nullable: true })
  lastUsedAt: Date;

  @ManyToOne(() => User, user => user.integrations)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Solution)
  @JoinColumn({ name: 'solutionId' })
  solution: Solution;
}