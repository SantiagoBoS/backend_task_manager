import { IsIn, IsOptional, IsNotEmpty } from 'class-validator';

// Validación de cómo se actualiza una tarea
// Asegurarse de que el título y la descripción sean opcionales
export class UpdateTaskDto {
  @IsOptional()
  title?: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  @IsIn(['pending', 'in_progress', 'completed']) //Validacion del estado
  status?: 'pending' | 'in_progress' | 'completed';

  @IsNotEmpty({ message: 'El deviceId es obligatorio' })
  deviceId: string;
}
