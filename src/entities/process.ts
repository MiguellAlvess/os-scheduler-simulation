export class Process {
  constructor(
    private readonly id: number,
    private instructionCount: number,
  ) {}

  getId(): number {
    return this.id;
  }

  getInstructionCount(): number {
    return this.instructionCount;
  }

  clockCycle(): string {
    if (this.instructionCount > 0) {
      this.instructionCount--;
      return `Processo ${this.id} executando. Restam ${this.instructionCount} instruções.`;
    } else {
      return `Processo ${this.id} já finalizado.`;
    }
  }
}
