import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.to';
import { Task } from './task.entity';
export declare class TasksRepository extends Repository<Task> {
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    getTask(filterDto: GetTasksFilterDto): Promise<Task[]>;
}
