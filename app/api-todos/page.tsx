import ApiTodoList from './components/ApiTodoList';
import { getTasks } from '@/lib/tasks';

export default async function ApiTodosPage() {
    const data = await getTasks();

    return (
        <main className="container mx-auto p-6">
            <ApiTodoList initialTasks={data.tasks} />
        </main>
    );
}