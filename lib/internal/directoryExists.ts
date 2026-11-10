import { stat } from "node:fs/promises";

export function directoryExists(dir: string) {
  return stat(dir)
    .then((stats) => stats.isDirectory())
    .catch(() => false);
}
