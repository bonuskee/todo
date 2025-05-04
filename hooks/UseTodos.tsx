"use client";
import { Todo } from "@prisma/client";
import { use, useCallback, useEffect, useState } from "react";


interface TodoForm {
  text: string;
  imageUrl: string;
}
interface toggling {
  id: string;
  loading: boolean;
}
interface FilterOptions {
  filter: "All" | "COMPLETED" | "UNCOMPLETED";
}
export interface LoadingStates {
  todos: boolean;
  add: boolean;
  edit: boolean;
  delete: boolean;
  uploadPhoto: boolean;
}

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loadingStates, setLoadingStates] = useState<LoadingStates>({
    todos: false,
    add: false,
    edit: false,
    delete: false,
    uploadPhoto: false,
  });

  const setLoading = (key: keyof LoadingStates, value: boolean) => {
    setLoadingStates((prev) => ({ ...prev, [key]: value }));
  };

  const [filter, setFilter] = useState<string>("ALL");

  
  const fetchTodos = useCallback(async () => {
    setLoading("todos", true);
    try {
      const response = await fetch("/api/todos");
      const data = await response.json();
      setTodos(data);
      setLoading("todos", false);

      console.log("Fetch todos success", data);
    } catch (error) {
      setLoading("todos", false);

      console.log("Fetch todos failed", error);
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const addTodo = async (todo: TodoForm) => {
    setLoading("add", true);

    const { text, imageUrl } = todo;
    try {
      await fetch("/api/addTodo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          imageUrl,
        }),
      });
      setLoading("add", true);
      await fetchTodos();
    } catch (error) {
      setLoading("add", true);
    }
  };

  const deleteTodo = async (id: string) => {
    setLoading("delete", true);

    try {
      await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      });
      await fetchTodos();
    } catch (error) {
      setLoading("delete", true);
    }
    setLoading("delete", true);
  };
  const editTodo = async (todo: Todo) => {
    setLoading("edit", true);

    const { id } = todo;
    try {
      await fetch(`/api/todos/${id}`, {
        method: "PUT",
        body: JSON.stringify({ todo }),
      });
      setLoading("edit", true);
    } catch (error) {
      setLoading("edit", true);
    }
  };

  const changeFilterTo = (filter: string) => {
    setFilter(filter);
  };
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "uncompleted") return !todo.completed;
    return true;
  });

  
  return {
    todos: filteredTodos,
    loadingStates,
    setLoading,
    filter,
    addTodo,
    editTodo,
    deleteTodo,
    changeFilterTo,
  };
};
