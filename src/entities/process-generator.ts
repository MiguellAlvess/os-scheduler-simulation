import { Process } from "./process.js";

export class ProcessGenerator {
  private static nextId = 1;

  constructor(
    private readonly minInstructions = 10,
    private readonly maxInstructions = 50,
  ) {}

  generate(): Process {
    const id = ProcessGenerator.nextId++;
    const count = this.randomInRange(
      this.minInstructions,
      this.maxInstructions,
    );
    console.log(`Criado processo ${id} com ${count} instruções.`);
    return new Process(id, count);
  }

  private randomInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
