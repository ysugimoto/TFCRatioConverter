TFCRatioConverter
=================

Toolkit for CreateJSでパブリッシュしたアニメーション実行ファイルのRatioを変換するコマンドラインツールです。 
スマフォ向けアニメーションの制作で、各解像度向けのアニメーションを個別に作成するのは工数が掛かり過ぎるので、 
パブリッシュ後のCanvas操作の座標を任意の倍率に静的に処理するようになっています。node.jsで動きます。

### 使い方
nodeで動くのでnodeのインストールが必要です。

リポジトリをcloneしてbin/以下にパスを通す

```
git clone https://github.com/ysugimoto/TFCRatioConverter.git

export PATH=$PATH:/path/to/TFCRatioConverter/bin
```

あとはコマンドラインで起動できます。
なお、画像は処理しませんので、自前で各倍率に合わせたファイルを用意してください（要望があれば作る）
実行形式は以下のとおりです。


```
$ TFCRatioConverter target_file [arguments]
```

##### target_file
変換対象のToolkit for CreateJSで書き出されたJSファイル。

##### [arguments]
出力ファイルや変換レートなどの実行時パラメータを渡せます。詳しくは`TFCRatioConverter -h`としてヘルプを見てください。

### TODO
Android4.1系では、画面サイズいっぱいのアニメーションの場合に、描画領域拡大と画像サイズ増加によりパフォーマンスが著しく落ちる現象を確認しています。
iOSでは問題なさそうなので、デバイスターゲットを考慮出来る場合、または簡単なアニメーションの場合には有用だと思います。


### LICENSE
MIT License.
