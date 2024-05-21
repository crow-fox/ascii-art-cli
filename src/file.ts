import { config } from "./config.ts";

export function filterImageFile(file: Deno.DirEntry): boolean {
  if (!file.isFile) return false;

  return config.allowFileTypes.some((type) => file.name.endsWith(type));
}

export type FileData = {
  name: string;
  data: Uint8Array;
};

export async function readFileData(
  inputDir: string,
  entry: Deno.DirEntry
): Promise<FileData> {
  const filePath = `${inputDir}/${entry.name}`;
  return {
    name: entry.name,
    data: await Deno.readFile(filePath),
  };
}

export async function writeTextFile(
  outputDir: string,
  filename: string,
  text: string
): Promise<void> {
  const outputAsciiPath = `${outputDir}/${filename}.txt`;
  await Deno.writeTextFile(outputAsciiPath, text);
}
