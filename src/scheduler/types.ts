import { Process } from "../entities/process.js";

export type Algorithm = "FCFS" | "SJF" | "RR";

export interface Scheduler {
  readonly name: Algorithm | string;
  add(processo: Process): void;
  hasProcesses(): boolean;
  execute(): string;
}
