import { Process } from "../process/process.js";
import { FCFSScheduler } from "./fcfs.js";

describe("Algoritmo First Come, First Served", () => {
  test("Deve manter o processo atual até ele finalizar", () => {
    const fcfs = new FCFSScheduler();
    const p1 = new Process(1, 2);
    const p2 = new Process(2, 2);

    fcfs.add(p1);
    fcfs.add(p2);

    expect(fcfs.execute()).toMatch(/Processo 1 executando/);
    expect(fcfs.execute()).toMatch(/finalizado e removido/);

    expect(fcfs.execute()).toMatch(/Processo 2 executando/);
    expect(fcfs.execute()).toMatch(/finalizado e removido/);

    expect(fcfs.hasProcesses()).toBe(false);
  });
});
