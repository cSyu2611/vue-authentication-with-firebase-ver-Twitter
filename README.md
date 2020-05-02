# vue-authentication-with-firebase-ver-Twitter

# 概要

- BaaS の firebase を利用したログイン認証システムを Vue.js で実装(Twitter連携版)

# TODO

*1 firebase
  - 発行される firebaseConfig を[config/env.js](https://github.com/cSyu2611/vue-authentication-with-firebase-ver-Twitter/blob/master/config/env_tmp.js)に貼り付け（env_tmp.js をコピー＆リネーム）
  - Twitter認証を有効にする(APIキーとシークレットの登録）
  - コールバックURLをコピーしておく
  
*2 Twitter App
  - Webサイト

# 動作確認

- firebase との連携ができていれば、ログイン、アカウント登録ができるはずです。
- vue-router でアクセス制限がされているかの確認

  - ログインした状態で'''localhost:8080/'''にリダイレクトされるか=>[ログインページ](http://localhost:8080/signIn), [アカウント登録ページ](http://localhost:8080/signUp)
  - ログインしていない状態で'''localhost:8080/signIn'''にリダイレクトされるか=>[ホーム画面](http://localhost:8080/)

# 今後の予定

- これをベースにチャット機能のプロトタイプを作成する

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
