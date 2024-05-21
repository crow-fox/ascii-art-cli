import { Image } from "https://deno.land/x/imagescript@1.3.0/mod.ts";
import { config } from "./config.ts";

export function toAscii(monochromeImage: Image): string {
  // Todo: アスキーアートが作成できるかどうかのチェック
  let asciiArt = "";

  for (
    let y = 0;
    y < monochromeImage.height;
    y += config.heightScale // アスキーアートは縦長になるので複数行をまとめる
  ) {
    for (let x = 0; x < monochromeImage.width; x++) {
      const index = (y * monochromeImage.width + x) * 4; // rgbaの順に一次元の配列に入ってるので4倍する
      const gray = monochromeImage.bitmap[index]; // r,g,bは同じ値であることが前提
      const alpha = monochromeImage.bitmap[index + 3]; // aは4番目
      const asciiChar = selectAsciiChar(gray, alpha);
      asciiArt += asciiChar;
    }
    asciiArt += "\n";
  }

  return asciiArt;
}

function selectAsciiChar(gray: number, alpha: number): string {
  if (alpha < 255) return " ";
  // 0~255のグレースケール値を0~1に正規化
  const normalizedValue = gray / 255;
  // アスキー文字を満遍なく使用する
  const asciiIndex = Math.floor(normalizedValue * (config.charset.length - 1));

  const asciiChar = config.charset[asciiIndex];

  return asciiChar;
}
