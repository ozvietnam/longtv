import { getAllDocs } from "./docs";
import { DEPARTMENTS } from "./departments";

export type TodoTask = {
  priority: string;
  id: string;
  task: string;
  vLayer: string;
  assignee: string;
  status: string;
  deadline: string;
  evidence: string;
};

export type DepartmentTasks = {
  deptId: string;
  deptName: string;
  todoSlug: string;
  tasks: TodoTask[];
};

export function parseTodoTable(content: string): TodoTask[] {
  const tasks: TodoTask[] = [];

  for (const line of content.split("\n")) {
    if (!line.startsWith("| P")) continue;
    const cells = line.split("|").map((s) => s.trim());
    if (cells.length < 10) continue;
    const priority = cells[1];
    if (!/^P\d$/.test(priority)) continue;

    tasks.push({
      priority,
      id: cells[2],
      task: cells[3],
      vLayer: cells[4],
      assignee: cells[5],
      status: cells[6],
      deadline: cells[7],
      evidence: cells[8],
    });
  }

  return tasks;
}

export function getAllDepartmentTasks(): DepartmentTasks[] {
  const docs = getAllDocs();

  return DEPARTMENTS.map((dept) => {
    const todoDoc = docs.find((d) => d.meta.slug.join("/") === dept.todoSlug);
    return {
      deptId: dept.id,
      deptName: dept.name,
      todoSlug: dept.todoSlug,
      tasks: todoDoc ? parseTodoTable(todoDoc.content) : [],
    };
  });
}

export function countTasksByStatus(tasks: TodoTask[]) {
  const counts = { todo: 0, doing: 0, done: 0, blocked: 0, other: 0 };
  for (const t of tasks) {
    const s = t.status.toLowerCase();
    if (s in counts) counts[s as keyof typeof counts]++;
    else counts.other++;
  }
  return counts;
}

export function countTasksByPriority(tasks: TodoTask[]) {
  const counts = { P0: 0, P1: 0, P2: 0 };
  for (const t of tasks) {
    if (t.priority in counts) counts[t.priority as keyof typeof counts]++;
  }
  return counts;
}
