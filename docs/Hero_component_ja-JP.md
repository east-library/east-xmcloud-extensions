# Hero component

## 概要

このコンポーネントは、横幅いっぱいに画像を表示します。\
また、画像の上にリッチテキストとリンクを被せて配置します。\
リッチテキストとリンクはそれぞれ％単位で位置を調節します。\

## 導入方法

1. [README の導入方法(各コンポーネント共通)](../README_ja-JP.md#導入方法各コンポーネント共通)を実施します
1. サイトの Data フォルダに Hero Folder(テンプレート:**/sitecore/templates/Project/East Extensions/Components/Hero Folder**)を作成します

## 使い方

### 基本

1. Pages で Hero コンポーネントをドラッグアンドドロップして配置します
1. 画像、リッチテキスト、リンクを設定します
1. 右ペインでリッチテキストとリンクの位置を調節します

### リッチテキストとリンクの位置調整

- Pages の右ペインの Advanced styling から、リッチテキストとリンクの位置を個別に調整することができます
- 左上を基準として 0~100%で調節します
- パラメータは以下の通りです
  - Text Vertical Position:リッチテキストの上下の位置を調節します
  - Text Horizontal Position:リッチテキストの左右の位置を調節します
  - Link Vertical Position:リンクの上下の位置を調節します
  - Link Horizontal Position:リンクの左右の位置を調節します
