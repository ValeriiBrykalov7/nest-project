import { Controller, Get, Param, Post, Body, Patch, Put, Delete } from '@nestjs/common';
import { TaskService } from './task.service.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task-dto.js';
import { PatchTaskDto } from './dto/patch-task-dto.js';


@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('all')
  findAll() {
    return this.taskService.findAll();
  }

  @Get('by-id/:id')
  findById(@Param('id') id:string) {
    return this.taskService.findById(Number(id))
  }

  @Post()
  create(@Body() dto: CreateTaskDto) {
return this.taskService.create(dto)
  }

  @Put('update/:id')
  updateTask(@Param('id') id:string, @Body() dto:UpdateTaskDto) {
    return this.taskService.updateTask(Number(id), dto)
  }

  @Patch('patch/:id')
  patchTask(@Param('id') id:string, @Body() dto:PatchTaskDto) {
    return this.taskService.patchTask(Number(id), dto)
  }

  @Delete('delete/:id')
  deleteTask(@Param('id') id:string) {
    return this.taskService.deleteTask(Number(id))
  }
}

