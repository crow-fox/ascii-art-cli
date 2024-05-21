export async function readEntries(
  inputDir: string,
  maxCount: number
): Promise<Deno.DirEntry[]> {
  let count = 0;
  const entries: Deno.DirEntry[] = [];
  for await (const dirEntry of Deno.readDir(inputDir)) {
    entries.push(dirEntry);
    count++;
    // 指定した数のファイルを読み込んだら終了(時間がかかりすぎるのを防ぐため)
    if (count >= maxCount) {
      break;
    }
  }
  return entries;
}

export function createDirIfNotExists(dirPath: string) {
  try {
    Deno.readDirSync(dirPath);
  } catch (_) {
    Deno.mkdirSync(dirPath);
  }
}
