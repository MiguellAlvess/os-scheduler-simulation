import { CPU } from "./cpu/cpu.js";
import { ProcessGenerator } from "./process/process-generator.js";
import { FCFSScheduler } from "./scheduler/fcfs.js";
import { RoundRobinScheduler } from "./scheduler/round-robin.js";
import { SJFScheduler } from "./scheduler/sjf.js";

async function runRR() {
  const generator = new ProcessGenerator();
  const rr = new RoundRobinScheduler(3);

  rr.add(generator.generate());
  rr.add(generator.generate());
  rr.add(generator.generate());

  const cpu = new CPU(rr, 5, 300);
  console.log("=== Executando Round Robin ===");
  await cpu.run();
}

async function runFCFS() {
  const generator = new ProcessGenerator();
  const fcfs = new FCFSScheduler();

  fcfs.add(generator.generate());
  fcfs.add(generator.generate());
  fcfs.add(generator.generate());

  const cpu = new CPU(fcfs, 5, 300);
  console.log("=== Executando First Come, First Served ===");
  await cpu.run();
}

async function runSJF() {
  const generator = new ProcessGenerator();
  const sjf = new SJFScheduler();

  sjf.add(generator.generate());
  sjf.add(generator.generate());
  sjf.add(generator.generate());

  const cpu = new CPU(sjf, 5, 300);
  console.log("=== Executando Shortest Job First ===");
  await cpu.run();
}

await runRR();
await runFCFS();
await runSJF();
