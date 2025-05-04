import { saveAs } from 'file-saver'
import * as XLSX from 'xlsx';
import { Todo } from '@prisma/client';


export const exportToExcel = (todos: Todo[]) => {
        const worksheet = XLSX.utils.json_to_sheet(todos);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Todos");
        const excelBuffer = XLSX.write(workbook, {
            bookType: "xlsx",
            type: "array"
        });
        const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        saveAs(blob,`todos.xlsx`);
    }