## 構造
### Foundation サイト全体のデフォルトスタイルを管理。
├ reset.scss
├ base.scss
├ variable.scss　サイト全体で使える変数
├ mixin　サイト全体で使えるmixnを管理
### Layout　各ページを構成するサイト全体で共通したエリアを管理。
├ l-header.scss
├ l-main.scss
├ l-footer.scss
### Object　サイト全体で再利用できるパターンを持つモジュールを管理
├ Component　再利用可能な小さな単位のモジュールを管理（ボタンなど）
├ c-button.scss
├ c-grid.scss
├ …
├ Project　再利用予定のないプロジェクト固有のスタイルを管理
├ p-card.scss
├ p-profile.scss
├ ...
├ Utility ComponentとProjectのモディファイア（パターン）で解決することができないスタイル、また、調整のための便利クラスなどを管理。
├ u-utility.scss
├ u-color.scss
├ u-margin.scss
├ u-padding.scss
├ Theme テーマによる色の切り替えなど、ページ単位の色違いとか
├ t-blue.scss
├ ...

## BEMまとめ
BEMは、Block、Element、Modifierという3つの概念だけ理解してしまえば、あとはclass名の命名ルールに則って記述するだけの単純な方法です。

BEMによるフロントエンドの設計

### Block

一般的なWebページの場合、Blockは何度も繰り返し出現することが想定できます。そのためBlockを識別するためにはid属性を使わずclass属性を利用します。

Blockはどこにでも置くことができ、Blockの中にBlockを含めることも可能です。ただし、CSSではBlockを入れ子にしてスタイルを指定してはいけません。

### Element
ElementはBlockの構成要素で、そのElementが属するBlock内でのみ意味を成します。

### Modifier
既存のBlockやElementと似ているけれど、見た目や動きが少しだけ違うものを作りたい場合には、新規にそれらを作るのではなく、Modifierを使うことができます。

例えば、同じリストで、行頭記号が2種類以上存在する場合や、同じメニュー内の「タブ」であっても、現在ユーザーがいるタブだけ、見栄えを変える場合などです。

Modifierは、BlockやElementのバリエーションの軸（例：行頭記号）や、状態（例：現在地）を表すプロパティの役割をします。

Modifierは名前（key）と値（value）を持ち、複数のModifierを同時に使用することができます。 

この場合のclass名は「Block_key_value」で表します。

次のようなコードの場合、listというclass名のBlockに、typeのバリエーションがあり、それはdiscとcheckという2種類だ、ということがわかります。