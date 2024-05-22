# ascii-art-cli

## 事前準備

### Deno のインストール

[Deno](https://deno.land/)をインストールしてください。

### プロジェクトのクローン

```
git clone https://github.com/crow-fox/ascii-art-cli.git
```

## アスキーアート生成

### 画像ファイルの準備

`input` ディレクトリに変換したい画像ファイルを配置してください。

### 実行

```
deno run --allow-net --allow-read --allow-write run.ts
```

`output` ディレクトリにアスキーアートが生成されます。

### カスタム設定

`config.ts` でアスキーアートの生成に関する設定を変更できます。

```typescript
type Config = {
  // 入力画像ディレクトリ（デフォルト ./input）
  inputDir: string;
  // 出力画像ディレクトリ（デフォルト ./output）
  outputDir: string;
  // 入力画像の最大数（デフォルト10件）
  maxImageCount: number;
  // アスキーアートに使用する文字列
  // 配列の先頭が最も暗い文字、末尾が最も明るい文字
  charset: string[];
  // 生成するアスキーアートの幅
  maxImageSize: number;
  // 生成するアスキーアートのアスペクト比の調整用（デフォルト 2）
  // 1だと横長、3だと縦長になりやすい
  heightScale: 1 | 2 | 3;
};
```
