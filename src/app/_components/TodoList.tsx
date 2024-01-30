"use client";

import { trpc } from "../_trpc/client";

export default function TodoList() {
  const getTodods = trpc.getTodos.useQuery();

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {getTodods.data?.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
