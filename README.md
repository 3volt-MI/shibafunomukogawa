# 映画『芝生の向こうがわ』公式サイト

短編映画『芝生の向こうがわ』（監督・脚本：福田達男／監修：落合賢）の公式サイトです。
ビルド不要の静的サイト（HTML / CSS / JavaScript）です。

## ファイル構成

```
index.html          ページ本体（1ページ構成）
assets/css/style.css
assets/js/main.js   ヘッダー・スマホメニュー・スクロール表示
assets/img/         企画書・ルックブックから書き出した画像
```

## ページ構成

HERO（キービジュアル）→ NEWS → TRAILER → イントロダクション → あらすじ → CHARACTER → 監督・監修 → FESTIVAL（出品予定映画祭）→ SUPPORT（スタッフ・協賛募集）→ フッター

## 更新のしかた

- **ニュース**：`index.html` の `.news__list` に `<li>` を追加
- **予告編**：`.trailer__placeholder` の `div` を YouTube などの `<iframe>` に差し替え（`.trailer__frame` 内に置けば16:9で表示されます）
- **キャスト決定時**：CHARACTER の各人物に俳優名を追記し、画像を差し替え

## 公開

GitHub Pages の場合は、リポジトリの Settings → Pages で公開ブランチとルート（`/`）を指定してください。
