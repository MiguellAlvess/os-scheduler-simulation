import { Process } from "../entities/process.js";
import { Scheduler } from "./types.js";

export class FCFSScheduler implements Scheduler {
  readonly name = "FCFS";
  private readyQueue: Process[] = [];

  add(processo: Process): void {
    console.log(
      `[First Come, First Served] Adicionando processo ${processo.getId()} à fila de prontos.`,
    );
    this.readyQueue.push(processo);
  }

  hasProcesses(): boolean {
    return this.readyQueue.length > 0;
  }

  execute(): string {
    console.log("Executando First Come, First Served");
    if (!this.readyQueue.length) return "Nenhum processo na fila.";
    const processo = this.readyQueue[0];
    const result = processo.clockCycle();
    if (processo.getInstructionCount() === 0) {
      this.readyQueue.shift();
      return `${result}\nProcesso ${processo.getId()} finalizado e removido da fila de prontos.`;
    }
    return result;
  }
}
