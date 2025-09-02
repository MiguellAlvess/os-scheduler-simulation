import { Process } from "../entities/process.js";
import { FCFSScheduler } from "../scheduler/fcfs.js";
import { CPU } from "./cpu.js";

describe("CPU", () => {
  test("Deve executar até todos os processos terminarem", async () => {
    const fcfs = new FCFSScheduler();
    fcfs.add(new Process(1, 1));
    fcfs.add(new Process(2, 1));

    const cpu = new CPU(fcfs, 2, 0);
    await cpu.run();

    expect(fcfs.hasProcesses()).toBe(false);
  });
});
