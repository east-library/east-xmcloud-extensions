# East XMCloud Extensions

![components image](/docs//images/Top_image.gif)

## 概要

このリポジトリでは、Sitecore XM Cloud の JSS を利用して独自に作成したコンポーネントを提供します。\
そのままお使いいただくことも、ご自身のプロジェクトに合わせて修正していただくことも可能です。

## 使用上の注意

このリポジトリ内のコンポーネントは、JSS の特定のバージョンでのみ動作確認を行っています。\
動作確認をしていないバージョンで使用する場合、Sitecore 公式の changelog やドキュメントに従って必要な修正を行ってください。\
なお、**コードや Sitecore のアイテムを修正した場合、動作の保証はいたしません。**

### 動作確認表

以下の表の左側は、このリポジトリのコンポーネントのバージョンです。\
右側は、そのコンポーネントで動作確認をした JSS のバージョンです。

| コンポーネントのバージョン | JSS のバージョン |
| -------------------------- | ---------------- |
| 1.0.0 - 1.2.0              | 22.0.0           |
| 2.0.0                      | 22.1.3           |

## コンポーネント概要

現在、このリポジトリには以下のコンポーネントがあります。

- [Breadcumb](docs/Breadcrumb_component_ja-JP.md)
  - 現在のページから Home までの階層を表示します
- [Hero](docs/Hero_component_ja-JP.md)
  - 横幅いっぱいに画像を表示し、その上にリッチテキストとリンクを被せて配置します
- [PickUp](docs/PickUp_component_ja-JP.md)
  - サイトのページを 1 つ以上選択して、それらのサムネイルや概要を並べて表示します
- [Expand](docs/Expand_component_ja-JP.md)
  - リッチテキストを展開/格納します
- [LanguageSwitch](docs/LanguageSwitch_component_ja-JP.md)
  - ページの別言語バージョンのリンクを表示します

## 導入方法(各コンポーネント共通)

各コンポーネントの詳しい使い方は [**docs**](docs) にあるドキュメントをご参照ください。

1. **/src/frontend/src/components** ディレクトリから、使用するコンポーネントの tsx ファイルをダウンロードし、ご自身のプロジェクトの **components** ディレクトリに配置します
   - 改行コードが LF になっている場合は CRLF に修正します
1. **/src/frontend/src/assets** ディレクトリから、以下のファイルをダウンロードし、ご自身のプロジェクトの **assets** ディレクトリの同じ階層に配置します
   - **main.scss**
     - 既に変更が加えられている場合は `@import 'eastExtensions'` を追加します
   - **eastExtensions/index.scss**
     - 使用しないコンポーネントの `@import` は削除するかコメントアウトします
   - **eastExtensions/\_{使用するコンポーネント}.scss**
1. **/src/items** ディレクトリから、使用するコンポーネントの zip ファイルをダウンロードし、Sitecore のデスクトップでパッケージとしてインストールします
   - インストール時に上書きの確認(**Item being installed already exists in database.**)があった場合は、全て **Merge->Merge** を選択します
1. サイトの **Presentation** でコンポーネントを利用できるようにします
   1. **/sitecore/content/{your tenant}/{your site}/Presentation/Available Renderings** に任意の名前で **Available Renderings** を追加します(EastExtensions 等)
   1. **Rendrings** フィールドにコンポーネントを追加します
   1. **/sitecore/content/{your tenant}/{your site}/Presentation/Headless Variants** にコンポーネントの Variants を追加します
   1. 上記の子アイテムに **Default** バリアントを作成します
1. 各コンポーネント固有の設定をします
1. (オプション)tsx ファイルや scss ファイル、Sitecore のテンプレート等をお好みの構造に編集します

## 問題発生時

このリポジトリのコンポーネントを使用している際に問題が発生した場合やバグを発見した場合は、ぜひ GitHub の Issue を作成してください。

1. [Issues タブ](https://github.com/east-library/XM-Cloud-Components/issues)をクリックします
2. "New Issue" ボタンをクリックします
3. 問題の詳細を記入します
   - **バグ報告の場合:** 問題の詳細な説明、再現手順、期待される結果、実際の結果などを記入してください
   - **機能リクエストの場合:** 提案する機能の詳細な説明、理由、期待される利点などを記入してください
4. 可能であれば、スクリーンショットやログファイルなど、問題の特定に役立つ追加情報を添付してください

皆様からのフィードバックをお待ちしています。\
コンポーネントをより良くするために、ぜひご協力をお願いします。

[Issue を作成する](https://github.com/east-library/XM-Cloud-Components/issues/new)

## 管理者

- Nagata(永田)
  - 所属：イースト株式会社

## ライセンス

このリポジトリは MIT ライセンスの下で公開されています。詳細については、[LICENSE ファイル](LICENSE)を参照してください。

Thank you!
