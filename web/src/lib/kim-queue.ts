import { getAllDocs } from "./docs";
import type { KimJob } from "./kim-queue-shared";

export type { KimJob } from "./kim-queue-shared";
export { OWNER_GROUPS, JOB_CATEGORIES } from "./kim-queue-shared";

const KIM_QUEUE_SLUG = "05-clarifications/kim-secretary-queue";

/** Parse bảng hàng chờ từ kim-secretary-queue.md */
export function parseKimQueueTable(content: string): KimJob[] {
  const jobs: KimJob[] = [];
  let inTable = false;

  for (const line of content.split("\n")) {
    if (line.includes("| P | ID | Việc |")) {
      inTable = true;
      continue;
    }
    if (!inTable) continue;
    if (!line.startsWith("| P")) break;
    if (line.includes("|---|")) continue;

    const cells = line.split("|").map((s) => s.trim());
    if (cells.length < 9) continue;
    const priority = cells[1];
    if (!/^P\d$/.test(priority)) continue;

    jobs.push({
      priority,
      id: cells[2],
      task: cells[3].replace(/\*\*/g, ""),
      owner: cells[4],
      status: cells[5],
      deadline: cells[6],
      docLink: cells[7],
    });
  }

  return jobs;
}

export function getKimQueue(): KimJob[] {
  const doc = getAllDocs().find((d) => d.meta.slug.join("/") === KIM_QUEUE_SLUG);
  if (!doc) return [];
  return parseKimQueueTable(doc.content);
}

export function countKimByStatus(jobs: KimJob[]) {
  const counts = { todo: 0, doing: 0, done: 0, blocked: 0, other: 0 };
  for (const j of jobs) {
    const s = j.status.toLowerCase();
    if (s in counts) counts[s as keyof typeof counts]++;
    else counts.other++;
  }
  return counts;
}
