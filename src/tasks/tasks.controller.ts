import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

//Comunicacion entre el cliente y el servicio
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  //Traer todas las tareas
  //GET: /tasks
  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  //Creacion de una nueva tarea
  //POST: /tasks
  @Post()
  create(@Body() body: CreateTaskDto) {
    return this.tasksService.create(body);
  }

  //Actualizacion
  //PUT: /tasks/:id
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateTaskDto) {
    return this.tasksService.update(id, body);
  }

  //Elimacion
  //DELETE: /tasks/:id
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.delete(id);
  }
}
