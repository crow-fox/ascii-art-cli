import {
  GIF,
  Image,
  decode,
} from "https://deno.land/x/imagescript@1.3.0/mod.ts";
import { FileData } from "./file.ts";

type ImageData = {
  name: string;
  data: Image;
};

export async function readImageData(file: FileData): Promise<ImageData> {
  const image = await decode(file.data);
  if (image instanceof GIF) {
    throw new Error("GIF形式のファイルは対応していません");
  }
  return {
    name: file.name,
    data: image,
  };
}

export function getImageScale(image: Image, maxSize: number): number {
  const widthScale = maxSize / image.width;
  const heightScale = maxSize / image.height;
  return Math.min(widthScale, heightScale);
}
