# ASCII-ART-GENERATOR

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
