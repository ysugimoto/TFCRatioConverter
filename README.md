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

あとはコマンドラインで起動できます。変換後の出力ファイルは実行ディレクトリです。
なお、画像は処理しませんので、自前で各倍率に合わせたファイルを用意してください（要望があれば作る）


```
$ TFCRatioConverter [targetFile] [convertRaatio=20]
```

##### targetFile(required)
変換対象のToolkit for CreateJSで書き出されたJSファイル。

##### convertRatio(optional=20)
変換rateを指定。デフォルトは20（devicePixelRatio=2）に変換します。devicePixelRatio = 1なら10を指定してください。


### TODO
Android4.1系では、描画領域拡大と画像サイズ増加によりパフォーマンスが実用レベルにならない可能性があります。
iOSでは問題なさそうなので、デバイスターゲットを考慮出来る場合には有用だと思います。


### LICENSE
MIT License.
