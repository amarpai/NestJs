import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './tasks.staus.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.to';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepositort: TasksRepository
  ) {}

  async getTaskbyId(id: string): Promise<Task> {
    const found = await this.tasksRepositort.findOne(id);
    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return found;
  }

  async deleteTaskById(id: string): Promise<void> {
    const result = await this.tasksRepositort.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepositort.createTask(createTaskDto);
  }

  async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskbyId(id);
    task.status = status;
    await this.tasksRepositort.save(task);
    return task;
  }

  getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    return this.tasksRepositort.getTask(filterDto);
  }
}
