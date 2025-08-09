import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    //Definimos del servicio para poder acceder a la base de datos
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  //Obtener el id del dispotivo y buscar las tareas segun el dispositivo
  async findAll(deviceId: string): Promise<Task[]> {
    return this.taskRepository.find({ where: { deviceId } });
  }

  //Crea
  create(data: CreateTaskDto): Promise<Task> {
    const newTask = this.taskRepository.create(data);
    return this.taskRepository.save(newTask);
  }

  //Actualiza una tarea existente y valida que no lo devuelva null
  async update(id: number, data: UpdateTaskDto): Promise<Task> {
    await this.taskRepository.update(id, data);
    const task = await this.taskRepository.findOne({ where: { id, deviceId: data.deviceId } });
    if (!task) {
      throw new Error(`La tarea con el ${id} no fué encontrada.`);
    }
    return task;
  }

  //Elimina
  async delete(id: number, deviceId: string): Promise<void> {
    await this.taskRepository.delete({ id, deviceId });
  }
}
