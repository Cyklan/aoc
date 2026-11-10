import { join } from "path";
import { SOLUTION_DIR, SOLUTION_FILE } from "./constants";
import type { Day } from "@day";
import { loadInput } from "./loadInput";

export type ExecutionLevel = "silver" | "gold" | "all";

export async function execute(
  day: string,
  year: string,
  executionLevel: ExecutionLevel,
) {
  const file = join(process.cwd(), SOLUTION_DIR, year, day, SOLUTION_FILE);
  const solution = (await import(file)).default as Day;
  const input = await loadInput(day, year);
  if (["silver", "all"].includes(executionLevel)) {
    await solution
      .silver(input)
      .then(result => console.log("\x1b[1mSilver\x1b[0m\n" + result))
      .catch((e) => console.error("Silver: Error / Not implemented\n", e));
  }

  if (["gold", "all"].includes(executionLevel)) {
    await solution
      .gold(input)
      .then(result => console.log("\x1b[1mGold\x1b[0m\n" + result))
      .catch((e) => console.error("Gold: Error / Not implemented\n", e));
  }
}
