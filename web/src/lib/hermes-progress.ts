import { getKimQueue } from "./kim-queue";
import {
  HERMES_WAVE1_DONE,
  type HermesProgressSummary,
} from "./hermes-progress-shared";
import { getAllDepartmentTasks } from "./tasks";

export type { HermesProgressSummary, Wave1Deliverable } from "./hermes-progress-shared";
export { HERMES_WAVE1_DONE, HERMES_DOC_LINKS } from "./hermes-progress-shared";

export function getHermesKimJobs() {
  return getKimQueue().filter((j) => j.owner === "Hermes");
}

export function getHermesClTasks() {
  const strategy = getAllDepartmentTasks().find((d) => d.deptId === "chien-luoc");
  if (!strategy) return [];
  return strategy.tasks.filter((t) => t.assignee.toLowerCase().includes("hermes"));
}

export function summarizeHermesProgress(): HermesProgressSummary {
  const kimJobs = getHermesKimJobs();
  const clTasks = getHermesClTasks();

  const kimDone = kimJobs.filter((j) => j.status === "done").length;
  const kimDoing = kimJobs.filter((j) => j.status === "doing").length;
  const kimTodo = kimJobs.filter((j) => j.status === "todo").length;
  const kimOverdue = kimJobs.filter((j) => {
    if (!j.deadline || j.status === "done") return false;
    const d = new Date(j.deadline);
    return !Number.isNaN(d.getTime()) && d < new Date("2026-07-09");
  });

  const clDone = clTasks.filter((t) => t.status === "done").length;
  const clDoing = clTasks.filter((t) => t.status === "doing").length;
  const clTodo = clTasks.filter((t) => t.status === "todo").length;

  return {
    wave1Count: HERMES_WAVE1_DONE.length,
    kimJobs,
    kimDone,
    kimDoing,
    kimTodo,
    kimOverdue,
    clTasks,
    clDone,
    clDoing,
    clTodo,
  };
}
