import { Image } from "https://deno.land/x/imagescript@1.3.0/mod.ts";

// モノクロ画像を作成
export function monochrome(image: Image): Image {
  const monochromeImage = image.clone();

  const bitmap = monochromeImage.bitmap;

  for (let i = 0; i < bitmap.length; i += 4) {
    const r = bitmap[i];
    const g = bitmap[i + 1];
    const b = bitmap[i + 2];
    const average = averageRGB(r, g, b);
    bitmap[i] = average;
    bitmap[i + 1] = average;
    bitmap[i + 2] = average;
  }

  return monochromeImage;
}

function averageRGB(r: number, g: number, b: number): number {
  return Math.round((30 * r + 59 * g + 11 * b) / 100);
}
