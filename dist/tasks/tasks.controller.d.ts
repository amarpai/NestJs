import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.to';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Task } from './task.entity';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTasks(filterDto: GetTasksFilterDto): Promise<Task[]>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    getTaskById(id: string): Promise<Task>;
    deleteTaskById(id: string): Promise<void>;
    updateTaskStatus(id: string, updateTaskStatusDto: UpdateTaskStatusDto): Promise<Task>;
}
