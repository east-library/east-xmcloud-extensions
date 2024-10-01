# Breadcrumb component

## 概要

このコンポーネントは、現在のページから Home までの階層を表示します。

## 導入方法

1. [README の導入方法(各コンポーネント共通)](../README_ja-JP.md#導入方法各コンポーネント共通)を実施します
   - 個別の手順はありません。

## 使い方

### 基本

1. Pages で Breadcrumb コンポーネントをドラッグアンドドロップして配置します

### 表示されるページの名前について

- Breadcrumb コンポーネントでは、以下の優先順位でページの名前が表示されます
  1. NavigationTitle フィールド
  1. Title フィールド
  1. アイテムの DisplayName
  1. アイテムの Name
