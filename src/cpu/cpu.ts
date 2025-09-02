import { Scheduler } from "../scheduler/types.js";
import { sleep } from "../utils/sleep.js";

export class CPU {
  private cycleCount = 0;

  constructor(
    private scheduler: Scheduler,
    private interruptLimit: number,
    private cycleSleepMs = 300,
  ) {
    if (!Number.isInteger(interruptLimit) || interruptLimit < 1) {
      console.log("Limite de interrupção inválido. Usando 5 por padrão.");
      this.interruptLimit = 5;
    }
  }

  async run(): Promise<void> {
    while (this.scheduler.hasProcesses()) {
      const result = this.scheduler.execute();
      console.log(`Ciclo ${this.cycleCount}: ${result}`);
      this.cycleCount++;
      await sleep(this.cycleSleepMs);
      if (this.cycleCount % this.interruptLimit === 0) {
        console.log("Clock interrompido");
      }
    }
    console.log("Todos os processos foram finalizados!");
  }
}
