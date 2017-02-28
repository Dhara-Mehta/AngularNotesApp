export class ToDo{
    id: number;
    title: string;
    tasks: Task[];
}

export class Task{
    taskId: number;
    taskName: string;
    complete: boolean;
}