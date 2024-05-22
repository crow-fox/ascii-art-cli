import { toAscii } from "./ascii.ts";
import { config } from "./config.ts";
import { createDirIfNotExists, readEntries } from "./dir.ts";
import { filterImageFile, readFileData, writeTextFile } from "./file.ts";
import { getImageScale, readImageData } from "./image.ts";
import { toMonochrome } from "./monochrome.ts";

export async function main() {
  const inputEntries = await readEntries(config.inputDir, config.maxImageCount);
  const inputImageFiles = await Promise.all(
    inputEntries
      .filter(filterImageFile)
      .map((entry) => readFileData(config.inputDir, entry))
  );
  const inputImageDatas = await Promise.all(inputImageFiles.map(readImageData));

  const asciiDatas = inputImageDatas.map((imageData) => {
    const asciiString = toAscii(
      toMonochrome(
        imageData.data.scale(getImageScale(imageData.data, config.maxImageSize))
      )
    );
    return {
      name: imageData.name,
      data: asciiString,
    };
  });

  await createDirIfNotExists(config.outputDir);

  await Promise.all(
    asciiDatas.map(async ({ name, data }) => {
      await writeTextFile(config.outputDir, name, data);
    })
  );

  console.log(
    "アスキーアートを作成しました",
    asciiDatas.map((asciiArt) => asciiArt.name)
  );
}
