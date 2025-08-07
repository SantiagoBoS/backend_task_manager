import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';

//Validacion de como se crear una tarea
//Asegurarse de que el título no esté vacío y la descripción sea opcional
export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  @IsIn(['pending', 'in_progress', 'completed']) //Validacion del estado
  status?: 'pending' | 'in_progress' | 'completed';
}
