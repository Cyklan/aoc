import { INPUT_DIR, SOLUTION_DIR } from "./constants";
import { mkdir } from "node:fs/promises";
import { join } from "path";
import { directoryExists } from "./directoryExists";

export async function setup() {
  await Promise.all([
    createDirIfNotExists(INPUT_DIR),
    createDirIfNotExists(SOLUTION_DIR),
  ]);
}

async function createDirIfNotExists(dir: string) {
  const checkDir = join(process.cwd(), dir);
  if (!(await directoryExists(checkDir))) {
    await mkdir(checkDir, { recursive: true });
  }
}
