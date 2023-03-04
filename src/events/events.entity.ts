import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  userId: string;
  
  @Column()
  location: string;
  
  @Column()
  latitude: number;
  
  @Column()
  longitude: number;

  @CreateDateColumn()
  created_at: Date;
}