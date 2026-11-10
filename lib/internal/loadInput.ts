import { join } from "path";
import { INPUT_DIR, INPUT_FILE } from "./constants";

export function loadInput(day: string, year: string) {
  const inputFile = join(process.cwd(), INPUT_DIR, year, day, INPUT_FILE);
  return Bun.file(inputFile).text();
}
