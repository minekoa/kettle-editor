# Kettle Editor - Sorce Code Editor for Kettle Lang

## これは何？

Electron の練習用に既存にない特定言語向けのテキストエディタを作るプロジェクト。
あくまでElectronの練習用。

## 環境の構築

### 開発環境

Node.js と NPM は入っているものとする

まずはデバッグ環境

```
$ sudo npm install electron-prebuilt -g
```

### ライブラリ

```
$ cd kettle_editor
$ npm install ace-min-noconflict --save
```

## デバッグ実行

```
$ cd kettle_editor
$ electron .
```



