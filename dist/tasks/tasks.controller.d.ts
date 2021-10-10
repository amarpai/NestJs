import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.to';
import { UpdateTaskStatusDto } from './dto/update-task-staus.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTasks(filterDto: GetTasksFilterDto): Task[];
    createTask(createTaskDto: CreateTaskDto): Task;
    getTaskById(id: string): Task;
    deleteTaskById(id: string): void;
    updateTaskStatus(id: string, updateTaskStatusDto: UpdateTaskStatusDto): Task;
}
