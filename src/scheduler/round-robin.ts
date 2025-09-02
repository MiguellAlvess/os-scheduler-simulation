import { Process } from "../entities/process.js";
import { Scheduler } from "./types.js";

export class RoundRobinScheduler implements Scheduler {
  readonly name = "RR";
  private readyQueue: Process[] = [];

  constructor(private quantum: number) {
    if (!Number.isInteger(quantum) || quantum <= 0) {
      console.log("Quantum inválido. Deve ser inteiro > 0.");
      this.quantum = 1;
    }
  }

  add(processo: Process): void {
    console.log(
      `[ROUND ROBIN] Adicionando processo ${processo.getId()} à fila de prontos.`,
    );
    this.readyQueue.push(processo);
  }

  hasProcesses(): boolean {
    return this.readyQueue.length > 0;
  }

  execute(): string {
    console.log("Executando ROUND ROBIN");
    if (!this.readyQueue.length) return "Nenhum processo na fila.";

    const processo = this.readyQueue.shift()!;
    const logs: string[] = [];

    for (
      let i = 0;
      i < this.quantum && processo.getInstructionCount() > 0;
      i++
    ) {
      logs.push(processo.clockCycle());
    }

    if (processo.getInstructionCount() > 0) {
      this.readyQueue.push(processo);
    } else {
      logs.push(
        `Processo ${processo.getId()} finalizado e removido da fila de prontos.`,
      );
    }

    return logs.join("\n");
  }
}
