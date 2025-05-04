"use client";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { uploadToGoogleDrive } from "@/utils/uploadfile";
import { Description } from "@radix-ui/react-toast";
import { useTodos } from "@/hooks/UseTodos";
import TodoFilter from "@/components/todo/todo-filter";
import TodoForm from "@/components/todo/todo-form";
import TodoList from "@/components/todo/todo-list";
import ExportToExcel from "@/components/todo/export-to-excel";

interface saving {
  id: string;
  loading: boolean;
}
const Page: React.FC = () => {
  const {
    todos,
    loadingStates,
    filter,
    addTodo,
    editTodo,
    deleteTodo,
    changeFilterTo,
  } = useTodos();

  return (
    <div className="w-full  h-screen flex items-center justify-start flex-col gap-8 p-8 pt-24 pb-24">
      <div className="text-4xl">To Do</div>
      <TodoFilter filter={filter} changeFilterTo={changeFilterTo} />
      <TodoForm addTodo={addTodo} />
      <ExportToExcel todos={todos} />

      <TodoList
        todos={todos}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        loadingStates={loadingStates}
      />
    </div>
  );
};

export default Page;
