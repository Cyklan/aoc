import { join } from "path";
import {
  INPUT_DIR,
  INPUT_FILE,
  SOLUTION_DIR,
  SOLUTION_FILE,
} from "./constants";
import { mkdir } from "fs/promises";
import { $ } from "bun";
import { directoryExists } from "./directoryExists";

export type Day = {
  silver: DayFunction;
  gold: DayFunction;
};

export type DayFunction = (input: string) => Promise<string>;

export async function prepareDay(day: string, year: string): Promise<boolean> {
  const baseDir = join(year, day);
  const inputDir = join(process.cwd(), INPUT_DIR, baseDir);
  if (!(await directoryExists(inputDir))) {
    mkdir(inputDir, { recursive: true });
    await Bun.file(join(inputDir, INPUT_FILE)).write("");
  }

  const solutionsDir = join(process.cwd(), SOLUTION_DIR, baseDir);
  if (!(await directoryExists(solutionsDir))) {
    mkdir(solutionsDir, { recursive: true });
    await $`cp lib/internal/template.ts ${join(solutionsDir, SOLUTION_FILE)}`.quiet();
    return true;
  }

  return false;
}
