import { Process } from "../process/process.js";
import { SJFScheduler } from "./sjf.js";

describe("Algoritmo Shortest Job First", () => {
  test("Deve escolher sempre o processo com menos instruções restantes", () => {
    const sjf = new SJFScheduler();
    const processLong = new Process(1, 5);
    const processShort = new Process(2, 2);

    sjf.add(processLong);
    sjf.add(processShort);

    expect(sjf.execute()).toMatch(/Processo 2 executando/);
    expect(sjf.execute()).toMatch(/finalizado e removido/);
    expect(sjf.execute()).toMatch(/Processo 1 executando/);
  });
});
