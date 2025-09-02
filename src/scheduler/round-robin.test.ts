import { Process } from "../entities/process.js";
import { RoundRobinScheduler } from "./round-robin.js";

describe("Algoritmo Round Robin", () => {
  test("Deve rodar até o quantum e reencaminhar processo se não terminar", () => {
    const rr = new RoundRobinScheduler(2);
    const process = new Process(1, 3);

    rr.add(process);

    const out1 = rr.execute().split("\n");
    expect(out1.length).toBe(2);
    expect(out1[0]).toMatch(/Restam 2/);
    expect(out1[1]).toMatch(/Restam 1/);
    expect(rr.hasProcesses()).toBe(true);

    const out2 = rr.execute();
    expect(out2).toMatch(/Restam 0/);
    expect(out2).toMatch(/finalizado e removido/);
    expect(rr.hasProcesses()).toBe(false);
  });
});
