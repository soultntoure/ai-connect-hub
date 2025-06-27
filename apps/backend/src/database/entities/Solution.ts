import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Solution {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column('text')
  description: string;

  @Column()
  category: string;

  @Column('simple-array', { nullable: true }) // Store features as a comma-separated string
  features: string[];

  @Column()
  price: string; // e.g., '$99/month', 'Free', 'Custom'

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ nullable: true })
  developerInfo: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}