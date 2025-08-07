import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Esta entidad representa como se veria una tarea en la base de datos
@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: '' })
  description: string;

  @Column({
    type: 'enum',
    enum: ['pending', 'in_progress', 'completed'],
    default: 'pending',
  })
  status: 'pending' | 'in_progress' | 'completed';
}
