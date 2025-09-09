import { ProcessGenerator } from "./process-generator.js";

describe("ProcessGenerator", () => {
  test("Deve criar processos com ids sequenciais corretamente", () => {
    const processGenerator = new ProcessGenerator(10, 50);

    const p1 = processGenerator.generate();
    const p2 = processGenerator.generate();
    const p3 = processGenerator.generate();

    expect(p2.getId()).toBe(p1.getId() + 1);
    expect(p3.getId()).toBe(p2.getId() + 1);
  });
});
