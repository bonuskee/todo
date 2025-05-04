import React from 'react'
import { Button } from '../ui/button';

interface TodoFilterProps { 
    filter: string;
    changeFilterTo: (filter: string) => void;
}

const TodoFilter = ({filter, changeFilterTo}: TodoFilterProps) => {
  return (
    <div className="gap-4 flex">
      <div>
        <Button
          onClick={() => changeFilterTo("all")}
          className={`${
            filter == "all"
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          All
        </Button>
      </div>
      <div>
        <Button
          onClick={() => changeFilterTo("completed")}
          className={`${
            filter == "completed"
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          completed
        </Button>
      </div>
      <div>
        <Button
          onClick={() => changeFilterTo("uncompleted")}
          className={`${
            filter == "uncompleted"
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          uncompleted
        </Button>
      </div>
    </div>
  );
}

export default TodoFilter