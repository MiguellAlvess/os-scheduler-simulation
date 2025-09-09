import { Process } from "./process.js";

describe("Process", () => {
  test("Deve garantir que o clockCycle decremente a quantidade de instruções", () => {
    const processo = new Process(1, 3);

    expect(processo.clockCycle()).toBe(
      "Processo 1 executando. Restam 2 instruções.",
    );
    expect(processo.getInstructionCount()).toBe(2);

    processo.clockCycle();
    processo.clockCycle();
    expect(processo.getInstructionCount()).toBe(0);
    expect(processo.clockCycle()).toBe("Processo 1 já finalizado.");
  });
});
