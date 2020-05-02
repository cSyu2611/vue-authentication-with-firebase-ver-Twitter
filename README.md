# vue-authentication-with-firebase-ver-Twitter

# 概要

- BaaS の firebase を利用したログイン認証システムを Vue.js で実装(Twitter連携版)

# TODO

1. firebase
  - 発行される firebaseConfig を[config/env.js](https://github.com/cSyu2611/vue-authentication-with-firebase-ver-Twitter/blob/master/config/env_tmp.js)に貼り付け（env_tmp.js をコピー＆リネーム）
  - firebaseにデプロイ
  - Twitter認証を有効にする(APIキーとシークレットの登録）
  - WebサイトURLとコールバックURLをコピーしておく
  
2. Twitter App
  - WebサイトURLとコールバックURLを設定
  - Keys and TokensからAPIキーとシークレットをコピーしておく
  


* 1の作業に2の情報が、2の作業に1の情報が必要でめんどくさかった

# サンプル
* サンプルは[こちらから](https://animal-crossing-3aeb7.firebaseapp.com/)

# 今後の予定

- これをベースにオンライン掲示板のプロトタイプを作成する

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
