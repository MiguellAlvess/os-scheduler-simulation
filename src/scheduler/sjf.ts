import { Process } from "../entities/process.js";
import { Scheduler } from "./types.js";

export class SJFScheduler implements Scheduler {
  readonly name = "SJF";
  private readyQueue: Process[] = [];

  add(processo: Process): void {
    console.log(
      `[Shortest Job First)] Adicionando processo ${processo.getId()} à fila de prontos.`,
    );
    this.readyQueue.push(processo);
  }

  hasProcesses(): boolean {
    return this.readyQueue.length > 0;
  }

  execute(): string {
    console.log("Executando Shortest Job First)");
    if (!this.readyQueue.length) return "Nenhum processo na fila.";

    this.readyQueue.sort(
      (a, b) => a.getInstructionCount() - b.getInstructionCount(),
    );

    const processo = this.readyQueue[0];
    const result = processo.clockCycle();
    if (processo.getInstructionCount() === 0) {
      this.readyQueue.shift();
      return `${result}\nProcesso ${processo.getId()} finalizado e removido da fila de prontos.`;
    }

    return result;
  }
}
