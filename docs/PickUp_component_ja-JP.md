# PickUp component

## 概要

このコンポーネントは、サイトのページを 1 つ以上選択して、それらを並べて表示します。\
おすすめの記事ページや関連する記事ページを並べて表示するのに向いています。

## 導入方法

1. [README の導入方法(各コンポーネント共通)](../README_ja-JP.md#導入方法各コンポーネント共通)を実施します
1. サイトの Data フォルダに PickUp Folder(テンプレート:**/sitecore/templates/Project/East Extensions/Components/Pick Up Folder**)を作成します
1. PickUp テンプレート(**/sitecore/templates/Project/East Extensions/Components/Pick Up**)の **PickUpItem** フィールドの Source に、選択したいページを Sitecore クエリ等で指定します
   - デフォルト値として、サイト内の News Page テンプレートを利用したページを選択できるようにしてあります

## 使い方

### 基本

1. Pages で PickUp コンポーネントをドラッグアンドドロップして配置します
1. ページまたはサイトの Data フォルダに PickUp アイテムを作成します
1. 見出し、リンクを設定します
1. コンテンツ エディタで PickUp アイテムを開き、表示したいページを選択して保存します

### News Page テンプレートについて

- ページのデータ構造の見本として、**/sitecore/templates/Project/East Extensions/News Page** テンプレートを作成しています
  - サムネイル、概要、公開日を設定できます
  - そのまま利用する場合、**/sitecore/templates/Project/{your site}** フォルダに移動してください
  - **注意**:**/sitecore/templates/Project/{your site}/Page** テンプレートを継承し直してください\
    また、壊れたリンクは解除してください
