# Expand component

![Expand component](/docs/images/Expand.png)

## 概要

Expand コンポーネントは、常に表示される見出しのリッチテキストと、ボタンをクリックして展開/格納できるリッチテキストを 1 セットにして表示します。\
また、そのセットは Pages 上で複数作成して並べることができます。\
よくある質問のような、テキストが 2 つで 1 セットかつ片方を隠しておきたい、という場合に最適です。

## 導入方法

1. [README の導入方法(各コンポーネント共通)](../README_ja-JP.md#導入方法各コンポーネント共通)を実施します
1. サイトの Data フォルダに Expand Folder(テンプレート:**/sitecore/templates/Project/East Extensions/Components/Expand Folder**)を作成します

## 使い方

### 基本

1. Pages で Expand コンポーネントをドラッグアンドドロップして配置します
1. ページまたはサイトの Data フォルダに Expand アイテムを作成します
1. 見出しを設定します
1. 子アイテムのリッチテキストを編集します
   - 2 つ目のリッチテキストは格納されているので、右端の ∨ を押して展開してください
1. 必要に応じて、右ペインの Manage items から子アイテムを追加してください
   ![Expand component config](/docs/images/Expand_config.png)
