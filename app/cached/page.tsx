import React from 'react';
import TodoCachedApp from './components/TodoCachedApp';
import { getTodos } from '@/lib/todos';

export default async function CachedTodoPage() {
  // Mengambil data awal di Server Component
  const initialTodos = await getTodos();

  return (
    <main className="min-h-screen p-6 md:p-10 bg-white text-dark-70">
        <div className="max-w-2x1 mx-auto space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2x1 shadow-x1 border border-gray-100">
                <header className="mb-6 border-b border-gray-100 pb-4">
                    <h1 className="text-2x1 md:text-3x1 font-bold text-dark-70 text-center">
                        daftar Tugas (Todo List)
                    </h1>
                </header>

                {/* halaman Caching: Menggunakan TodoCachedApp dari folder cached/components */}
                <TodoCachedApp initialTodos={initialTodos} />
            </div>
        </div>
    </main>
  );
}