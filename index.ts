import { prepareDay } from "./lib/internal/day";
import { execute, type ExecutionLevel } from "./lib/internal/execute";
import { setup } from "./lib/internal/setup";
import { parseArgs } from "util";

await setup();

const {
  values: { day, year, level },
} = parseArgs({
  args: Bun.argv,
  options: {
    day: {
      type: "string",
      short: "d",
      default: new Date().getDate().toString(),
    },
    year: {
      type: "string",
      short: "y",
      default: new Date().getFullYear().toString().replace(/^20/, ""),
    },
    level: {
      type: "string",
      short: "l",
      default: "silver",
    },
  },
  strict: true,
  allowPositionals: true,
});

if (await prepareDay(day, year)) {
  console.log(`Solution file: solutions/${year}/${day}/day.ts`);
  console.log(`Input file: inputs/${year}/${day}/input.txt`);
  process.exit(0);
}

await execute(day, year, level as ExecutionLevel);
