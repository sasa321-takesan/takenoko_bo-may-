import { ndnDice } from "../commands/dice.js";

export default async (message) => {
  if (message.content.match(/^\d+d\d+$/)) {
    await message.reply(ndnDice(message.content));
  }

  if (message.content.match(/Villager/)) {
    await message.reply(`1
役職名：村人
属性：なし
行動時間：パッシブ

特殊な能力を持たない。`);
  }

  if (message.content.match(/Chief/)) {
    await message.reply(`2
役職名：村長
属性：CO必須・行動公開必須
行動時間：ゲーム開始時・パッシブ

ゲーム開始時に任意のプレイヤー一人に職業「従者」を強制配布し公表する。
選択したプレイヤーの陣営が狼の場合死亡する。
自身の投票権＋１。（パッシブ）`);
  }

  if (message.content.match(/Necromancer/)) {
    await message.reply(`3
役職名：霊媒師
属性：行動公開可能
行動時間：夜開始時

毎日夜に、当日の昼までに死亡したプレイヤーから任意で一人を選び、対象の陣営を占う。`);
  }

  if (message.content.match(/Hunter/)) {
    await message.reply(`4
役職名：猟師
属性：行動公開可能
行動時間：夜開始時

毎夜初めに任意のプレイヤー一人を選び、猟を開始する。
対象の陣営が
「第三」陣営だった場合、対象を殺害するか選択する。
「人狼」陣営だった場合、その日の襲撃先が自分に変更される。
「村人」陣営だった場合、次の日の投票権を失う。
猟を開始をするかは自由。`);
  }

  if (message.content.match(/Apprentice-hunter/)) {
    await message.reply(`5
役職名：見習い猟師
属性：行動公開可能
行動時間：夜開始時

毎夜初めに任意のプレイヤー一人を選び、1d2でサイコロを振る。
1が出た時、猟を開始する。
対象の陣営が
「第三」陣営だった場合、対象を殺害するか選択する。
「人狼」陣営だった場合、その日の襲撃先が自分に変更される。
「村人」陣営だった場合、次の日の投票権を失う。
猟を開始をするかは自由。`);
  }

  if (message.content.match(/Grandma/)) {
    await message.reply(`6
役職名：老婆
属性：公開必須可能
行動時間：夜開始時

毎夜初めに任意のプレイヤー一人の役職を知る。`);
  }

  if (message.content.match(/Black-cat/)) {
    await message.reply(`7
役職名：黒猫
属性：行動公開不可
行動時間：夜開始時

毎夜初めに任意のプレイヤー1人の属性を知る。`);
  }

  if (message.content.match(/Soldier/)) {
    await message.reply(`8
役職名：村の傭兵
属性：行動公開必須・CO必須
行動時間：会議経過

人狼の脅威から任意のプレイヤーを守る。
護衛対象が襲撃された際、100％で守るが同じプレイヤーを二度以上守ることは出来ない。
ただし、生存者が既に護衛されたことのあるプレイヤーのみになった場合、この制約は撤廃される。`);
  }

  if (message.content.match(/Traveler/)) {
    await message.reply(`9
役職名：旅人
属性：CO必須・行動公開必須
行動時間：会議終了時

1日目の投票権なし。`);
  }

  if (message.content.match(/Muscular/)) {
    await message.reply(`10
役職名：筋肉（マッスル）
属性：行動公開なし
行動時間：ゲーム開始時

HP初期値＋１。`);
  }

  if (message.content.match(/Polis/)) {
    await message.reply(`11
役職名：警察（無能）
属性：行動公開必須
行動時間：会議終了時

会議終了時、サイコロを振る。
5の時、その日の夜、全員に「行動不能」を付与する。`);
  }

  if (message.content.match(/Apprentice-police/)) {
    await message.reply(`12
役職名：見習い警察
属性：行動公開必須
行動時間：会議終了時

会議終了時、サイコロを振る。
2または4が出た場合、プレイヤー全員に「行動不能」を付与する。`);
  }

  if (message.content.match(/Illusionist/)) {
    await message.reply(`13
役職名：奇術師
属性：行動公開可能
行動時間：会議経過時

ゲーム中、会議中に行動。
一度だけ人狼の襲撃先を決めることができる。`);
  }

  if (message.content.match(/Millionaire/)) {
    await message.reply(`14
役職名：大金持ち
属性：行動公開可能
行動時間：ゲーム開始時・パッシブ

ゲーム開始時に任意のプレイヤー一人に役職「従属」を配布する。
対象となったプレイヤーのHPは大金持ちのものとなり、大金持ちのHPが減少する場合、対象のHPから優先して消費される。
また、処刑される場合は、対象のプレイヤーが代わりに処刑され、死亡する。`);
  }

  if (message.content.match(/Paramedic/)) {
    await message.reply(`15
役職名：救命士
属性：行動公開必須
行動時間：パッシブ

自由なタイミングで、死亡してから１フェーズ以内のプレイヤーを蘇生する。
最大2回まで。`);
  }

  if (message.content.match(/General-worker/)) {
    await message.reply(`16
役職名：町の便利屋
属性：行動公開可能
行動時間：会議開始時

毎日会議の始めにサイコロを振る。
1の時、いなくなった猫を探し、会議に参加しない。
2の時、依頼人と意気投合、依頼人の投票先へ自分も投票する。依頼人はサイコロで選出されたランダムなプレイヤー。
3の時、今日は仕事がない。効果なし。
4の時、仕事がなくなりこの職業カードを失う。
5の時、さらにサイコロを振る。もう一度５が出た時、人狼を一匹殺害する。
6の時、汚れ仕事を引き受けてしまう。サイコロでランダムな相手がターゲットとなり、対象を殺すか選択できる。`);
  }

  if (message.content.match(/Doyen/)) {
    await message.reply(`17
役職名：長老
属性：行動公開可能
行動時間：会議終了時

１日目の自身の投票権＋１。
２日目の自身の投票権＋２。
３日目以降自身の投票権＋３。`);
  }

  if (message.content.match(/Green-NEET/)) {
    await message.reply(`18
役職名：無職ニート
属性：なし
行動時間：会議開始時

会議の始めに1d6でサイコロを振る。
１の時、投票権を失う。
存在感の薄いため、狼に襲撃された時、1d2でサイコロを振り、２が出た時生き残る。（パッシブ）`);
  }

  if (message.content.match(/Suspense-bookworm/)) {
    await message.reply(`19
役職名：読書家ーサスペンス好きー
属性：死亡時、行動公開必須
行動時間：パッシブ

自身が死亡した際、1d2でサイコロを振る。
1が出た場合、誰がどう殺したのかを正しく言い残す。`);
  }

  if (message.content.match(/Cowherd/)) {
    await message.reply(`20
役職名：牛飼い
属性：行動公開なし
行動時間：パッシブ

人狼に襲われた際サイコロを振る。
２の時、牛が身代わりになる。
また身代わりになった際、もう一度サイコロ(1d24=4)を振る。
牛が本気を出して人狼を返り討ちにし、殺害する。
この効果は１度まで発動可能。`);
  }

  if (message.content.match(/Shepherd/)) {
    await message.reply(`21
役職名：羊飼い
属性：行動公開なし
行動時間：パッシブ

人狼に襲われた際サイコロを振る。
２または３の時、でヒツジが身代わりになる。
また身代わりになった際、ヒツジが本気を出して1d12(=4)で人狼を返り討ちにし、殺害する。
この効果は１度まで発動可能。`);
  }

  if (message.content.match(/Parrothead/)) {
    await message.reply(`22
役職名：オウム飼い
属性：行動公開なし
行動時間：パッシブ・死亡後会議経過

自身が襲撃で死亡した際、そこから毎昼サイコロを振る。
3の時、オウムが啼き、自身を殺した人狼を言い当てる。`);
  }

  if (message.content.match(/Doctor/)) {
    await message.reply(`23
役職名：医者
属性：行動公開必須
行動時間：会議経過

毎日昼にランダムな誰かのHPを１回復する。
この試行は自分を含める。`);
  }

  if (message.content.match(/Almighty-doctor/)) {
    await message.reply(`24
役職名：万能医
属性：CO必須・行動公開必須
行動時間：会議経過

毎日昼にランダムな誰かのHPを１増やす。
この試行は自分を含めない。`);
  }

  if (message.content.match(/Quack-doctor/)) {
    await message.reply(`25
役職名：ヤブ医者
属性：CO必須・行動公開必須
行動時間：会議経過

毎日昼にサイコロを振る。4の時、ランダムな誰かのHPを１減らす。
この試行は自分を含める。`);
  }

  if (message.content.match(/Dancer/)) {
    await message.reply(`26
役職名：おどりこ
属性：CO必須・行動公開必須
行動時間：会議開始時

毎日会議の始めにサイコロを振る。
サイコロの示したプレイヤーは当日、「おどりこ」の投票したプレイヤーへ強制的に投票させられる。`);
  }

  if (message.content.match(/Observer/)) {
    await message.reply(`27
役職名：監視者
属性：特定日時まで行動公開禁止
行動時間：ゲーム開始時・パッシブ

ゲーム開始時、任意のプレイヤー一人を「ターゲット」にし、「ターゲット」の行動をおおよそ把握できる。
その日得た情報は翌々日まで開示できない。`);
  }

  if (message.content.match(/Revenger/)) {
    await message.reply(`28
役職名：復讐者
属性：行動公開可能
行動時間：ゲーム開始時・パッシブ

ゲーム開始時、任意のプレイヤー一人を選択する。
対象が死亡した際、その死に関わったプレイヤーすべてを殺害する。`);
  }

  if (message.content.match(/Dictator/)) {
    await message.reply(`29
役職名：独裁者
属性：CO必須
行動時間：パッシブ

この職業はほかの票数増加効果を持つカードの効果を受けない。
自身の投票権が固定で５票になる。
自身へ入る票が確定で＋３される。この効果は自身へ一票も票が入っていないときでも発動する。`);
  }

  if (message.content.match(/Adventurer/)) {
    await message.reply(`30
役職名：冒険者
属性：行動公開可能
行動時間：会議開始時

毎日会議の最初に投票に参加するか選択する。
参加しなかった場合「冒険」に半日出かけ、サイコロを振る。
1、2、6が出た時、ランダムなアイテムを１つ獲得する。
この時、他人の職業効果を受けず、イベントが日中に発生した際も影響を受けない。`);
  }

  if (message.content.match(/Empathizer/)) {
    await message.reply(`31
役職名：共感覚者
属性：行動公開可能
行動時間：ゲーム開始時・パッシブ

自身と同じ陣営のプレイヤーを把握する。`);
  }

  if (message.content.match(/Gambler/)) {
    await message.reply(`32
役職名：ギャンブラー
陣営：行動公開可能
行動時間：会議開始時

自身の投票権を1日分スタックする。
翌日、サイコロを振って奇数が出た場合、投票権が1.5倍になる。
スタック・ギャンブルは2日連続では行えない。
なおギャンブルに失敗した場合、その日の投票権を失う。`);
  }

  if (message.content.match(/Nelumbist/)) {
    await message.reply(`33
役職名：レンコン術師
属性：行動公開必須
行動時間：会議経過

毎日昼にサイコロを振る。
１の時ランダムにアイテムを一つ入手する。
２の時職業を追加で一枚引く。
３・５の時レンコン術は失敗する。
４の時爆発が起き死亡する。
６の時受け渡し可能なHPを一つ入手する。`);
  }

  if (message.content.match(/Liar/)) {
    await message.reply(`34
役職名：欺き人
属性：CO禁止
行動時間：パッシブ

占いによって正しい結果を得られなくなる。（パッシブ）
このことは本人とGM以外わからず、占いが行われた場合GMは嘘の結果を伝える。`);
  }

  if (message.content.match(/Lively-guy/)) {
    await message.reply(`35
役職名：陽気なおっさん
陣営：CO必須
行動時間：パッシブ

プレイヤー全員へ投票される数ー１。（パッシブ）
職業「大酒呑み」がいるとき、１日目はなにがあっても死者が出ない。`);
  }

  if (message.content.match(/Good-intuition-brat/)) {
    await message.reply(`36
役職名：勘のいいガキ
属性：行動公開可能
行動時間：会議開始時

毎日会議の初めに1d12でサイコロを振る。
8の時、人狼が誰かがわかる。`);
  }

  if (message.content.match(/Werewolf‐boy/)) {
    await message.reply(`37
役職名：狼少年
属性：2日目までCO禁止・行動公開必須
行動時間：会議開始時

2日目の会議の始まりでCO。
生存しているプレイヤーの中から一人を選び、人狼と決めつける。
当たっていた場合狼は強制的に処刑され、当たっていなかった場合は処刑とは別で会議の終了時に自身が殺害される。`);
  }

  if (message.content.match(/Little-red-riding-hood/)) {
    await message.reply(`38
役職名：赤ずきん
属性：行動公開なし
行動時間：パッシブ

襲われて死亡しても、翌日に人狼が死亡した場合何事もなかったかのように復活する。これは蘇生阻害の効果を受けない、というか蘇生ではない。`);
  }

  if (message.content.match(/Sickly‐girl/)) {
    await message.reply(`39
役職名：体の弱い女の子
属性：行動公開なし
行動時間：会議開始時

毎日昼に1d2でサイコロを振る。
１が出た時、異常状態「行動不能」になる。
また、この役職を持つプレイヤーは「行動不能」状態の時、他の役職の効果を一切受けない。（パッシブ）`);
  }

  if (message.content.match(/Somnambulism/)) {
    await message.reply(`40
役職名：夢遊病
属性：行動公開なし
行動時間：夜開始時

毎日夜に行動する。
このとき、人狼の数×1/6で人狼に遭遇し、襲撃先が自分になる。
自身が襲撃先に指定された場合、家はもぬけの殻であり、殺害されない。
医者系職によってこの病は治療可能。`);
  }

  if (message.content.match(/Jade-eyed-cat/)) {
    await message.reply(`41
役職名：翡翠の目を持つ黒猫
属性：行動公開可能サイコロ5、6時公開必須
行動時間：ゲーム開始時

ゲーム開始時にサイコロを振る。
１のとき自身の投票権＋１（永続）
２のとき自身のHP＋１
３のとき自身が初日夜が終了するまでに絶対に死亡しなくなる。
４のときもう一度サイコロを振り４が出た場合人狼のHPをー１する。
５のとき処刑フェーズを任意で１度スキップできる権利を得る。
６のときもう一度サイコロを振り、もう一度６が出た場合プレイヤー全員の役職を開示する。`);
  }

  if (message.content.match(/Knight-soldier/)) {
    await message.reply(`42
役職名：騎士団兵
属性：行動公開必須
行動時間：会議開始時・パッシブ

自身が襲撃されたとき、サイコロを振る。
1の時、襲撃から生き残る。
毎日会議の始めにサイコロを３度振る。
サイコロが「最初に出た目と同じまたは前後の目」であれば昇格し、騎士団長になる。
騎士団長が既にいる場合は「昇格決闘」を行う。
昇格決闘はじゃんけんで負けたほうが運以外の要素が絡まない無条件で死亡する。`);
  }

  if (message.content.match(/Knight-captain/)) {
    await message.reply(`43
役職名：騎士団長
属性：CO必須
行動時間：会議経過・パッシブ

自身が襲撃されたとき、サイコロを振る。
1または3の時、襲撃から生き残る。
また、毎昼誰かを指定し、人狼の脅威から守る。
この時護衛している人物は人狼による襲撃で死ぬことはない。
同じプレイヤーを連続で護衛することはできない。`);
  }

  if (message.content.match(/Landlord/)) {
    await message.reply(`44
役職名：宿屋
属性：CO必須・行動公開必須
行動時間：会議経過

任意のプレイヤーを一夜につき一人、宿泊させるか決めることができる。
宿泊させる客は昼に決め、会議中に公開する。
宿泊客が村人または第三陣営だった場合、宿泊客のHP＋１、次の日の投票権＋１。
宿泊客が人狼陣営だった場合、確定で宿屋が襲撃される。
同じプレイヤーを二度泊めることは出来ない。`);
  }

  if (message.content.match(/Baker/)) {
    await message.reply(`45
役職名：パン屋
属性：行動公開必須
行動時間：会議終了時

会議終了時にアイテム「不思議なパン」を一つ焼き、任意のプレイヤー一人に配布する。`);
  }

  if (message.content.match(/Ricecaker/)) {
    await message.reply(`46
役職名：餅屋
属性：行動公開必須
行動時間：パッシブ

自信が生存している間役職譲渡・窃盗・入手の効果を封印する。`);
  }

  if (message.content.match(/Clock-crafter/)) {
    await message.reply(`47
役職名：時計職人
属性：CO禁止
行動時間：会議経過

毎日昼に任意でサイコロを振る。
3、6が出た場合当日の夜フェーズをスキップする。
それ以外の場合、以前に夜をスキップしていた場合はこの職業を強制でCOする。
また、時計職人が死亡した場合、スキップした夜の回数×0.5回だけ人狼の殺害数が永続的に増加する。`);
  }

  if (message.content.match(/Doller/)) {
    await message.reply(`48
役職名：人形屋
属性：３日目までCO禁止・行動公開禁止
行動時間：会議経過

1日目、昼に任意のプレイヤーの「人形」を作る。
「人形」を作られたプレイヤーは、死亡しても3日目の昼に蘇生する。`);
  }

  if (message.content.match(/Bell-craftsman/)) {
    await message.reply(`49
役職名：鈴職人
属性：行動公開可能
行動時間：会議開始時

毎日昼にサイコロを振る。
2の時、「鈴」を鋳造する。
「鈴」は作成された当日に効果を発揮し、強制的に当日の夜をスキップする。
「鈴」は効果を発揮したのち壊れる。`);
  }

  if (message.content.match(/Court-painter/)) {
    await message.reply(`50
役職名：宮廷画家
属性：行動公開可能
行動時間：会議経過・パッシブ

風景を記憶する絵を描く。
描いた「絵」は「初日昼」が１、「初日夜」が２、とスタックされる。
毎日昼に1d10でサイコロを振り、３が出た場合、描いた「絵」が１枚、「不思議な絵」に変化する。
変化する絵はランダムであり、「1/それまでの描いた絵の数」で抽選を行う。

「不思議な絵」を使用するとその日に戻ることができる。
なお、「不思議な絵」は使用期限内に使用しないと色褪せ、２フェーズ後には普通の「絵」へと戻ってしまう。`);
  }

  if (message.content.match(/Composer/)) {
    await message.reply(`51
役職名：音楽家
属性：行動公開なし
行動時間：パッシブ

自身が襲撃された際サイコロを振る。
出目が
1の時、狼の陣営が白になる。
3の時、襲撃から生き延びる。
4の時、狼を殺す。
6の時、狼の襲撃先を強制的に変更する。`);
  }

  if (message.content.match(/Apprentice-musician/)) {
    await message.reply(`52
役職名：見習い音楽家
属性：行動公開なし
行動時間：パッシブ

自身が襲撃された際サイコロを振る。
6の時人狼の襲撃先を強制的に変更する。`);
  }

  if (message.content.match(/Wander‐knight/)) {
    await message.reply(`53
役職名：さすらいの剣士
属性：行動公開なし
行動時間：パッシブ

人狼からの脅威から自己防衛が可能。
襲撃された際1d3でサイコロを振る。
２が出た時、襲撃から生き残る。`);
  }

  if (message.content.match(/Wizard/)) {
    await message.reply(`54
役職名：魔導士
属性：行動公開可能
行動時間：会議経過

毎日会議中に、自身のHPを0.5消費し、任意のプレイヤー一人の陣営を占う。回数無制限。`);
  }

  if (message.content.match(/Apprentice-mage/)) {
    await message.reply(`55
役職名：見習い魔導士
属性：行動公開可能
行動時間：会議経過

毎昼、自身のHPを１消費し、任意のプレイヤー一人の陣営を占う。
2日に1回まで。`);
  }

  if (message.content.match(/Witch/)) {
    await message.reply(`56
役職名：魔女
属性：行動公開可能
行動時間：夜終了直前

二日目以降、毎晩サイコロを振る。
4が出た場合、自分を含む全員の陣営を混ぜる。
GMは過労死する。`);
  }

  if (message.content.match(/Wander/)) {
    await message.reply(`57
役職名：流れ者
属性：行動公開禁止
行動時間：会議開始時

毎日昼の始めにサイコロを振る。
全ての役職からサイコロの出目＊１の数だけ、当日限定でその役職を獲得する。`);
  }

  if (message.content.match(/Unfazed/)) {
    await message.reply(`58
役職名：飄々とした人
属性：CO必須
行動時間：パッシブ

生存していれば陣営関係なく追加で勝利する。`);
  }

  if (message.content.match(/Hawker-and-Llama/)) {
    await message.reply(`59
役職名：行商人とラマ
属性：行動公開なし
行動時間：パッシブ

自身が死亡した際、ラマに憑依し、翌日の会議に参加する。
なお、ラマは会議終了時に死亡する。`);
  }

  if (message.content.match(/Fighter/)) {
    await message.reply(`60
役職名：格闘家
属性：行動公開必須
行動時間：パッシブ

自身に票が最多で入った時、自身に票を入れたプレイヤー全員とじゃんけん。
勝ったら自身に票を入れたものを殴り殺し、そのプレイヤーから入れられた票をなかったことにする。`);
  }

  if (message.content.match(/Pyrotechnician/)) {
    await message.reply(`61
役職名：花火師
属性：行動公開なし
行動時間：パッシブ

人狼に襲われた際、サイコロを振る。
サイコロの出目が１または４の時人狼を巻き添えにして死亡する。`);
  }

  if (message.content.match(/Saint/)) {
    await message.reply(`62
役職名：聖女
属性：行動公開なし
行動時間：パッシブ

自陣営が勝利するかつ、自身が生存していた場合、自陣営の味方全員を蘇生する。
灰色陣営の場合無効。`);
  }

  if (message.content.match(/Holy-knight/)) {
    await message.reply(`63
役職名：聖騎士
属性：行動公開必須
行動時間：会議経過

毎晩、任意のプレイヤー一人を護衛する。
護衛対象は会議中に決める。
対象が「聖職者」に該当する場合確定で護衛する。
また、そうでない場合サイコロを振り、1または6の時対象を守り切る。
同じプレイヤーを二回連続で護衛することは出来ない。`);
  }

  if (message.content.match(/Lady/)) {
    await message.reply(`64
役職名：お嬢様
属性：CO禁止
行動時間：パッシブ

自身の陣営が村人へ強制的に変更される。
ゲーム開始時、「執事」がいない場合、任意の一人に職業「ボディーガード」を配布する。
ボディーガードが生存している間、自身が襲撃されても絶対に死亡しない。

「極秘任務」
ゲーム開始から３日後の会議にCOし、結論を出す。
人狼が誰かを見極め、指摘し、当たっていた場合人狼が無条件で死亡する。`);
  }

  if (message.content.match(/Butler/)) {
    await message.reply(`65
役職名：執事
属性：CO必須
行動時間：会議経過

初日に仕える対象を決める。
毎日サイコロを振る。
１の時もう一度サイコロを振り、さらに１が出た場合極上のお茶を入れる。仕える対象のHP＋１。
２の時お茶菓子を用意し仕える対象のHPを１回復する。
３の時コーヒーを飲み、徹夜で対象を襲撃から6/6で守る。この効果を使用した際次の日の会議に参加できない。

お嬢様がいるとき使える対象は強制的にお嬢様となり上記の効果に加え、襲撃された際無条件で6/6でお嬢様を守り、死亡する。`);
  }

  if (message.content.match(/Sacrifice/)) {
    await message.reply(`66
役職名：影武者
属性：行動公開可能
行動時間：ゲーム開始時

ゲーム開始時に任意のプレイヤー一人を自身の主人として選択する。
主人が死亡した際、自分が「身代わり」になる。
なお身代わりになるとき、自身の死亡確率を下げる職業効果は発動しない。`);
  }

  if (message.content.match(/Notifier/)) {
    await message.reply(`67
役職名：お告げをする人
属性：行動公開必須・CO必須
行動時間：会議終了時

会議の終わりに任意のプレイヤー一人を指定し、追加で一つ職業を引かせる。
引いた職業は翌日の昼から効果を発動できる。`);
  }

  if (message.content.match(/Monk/)) {
    await message.reply(`68
役職名：僧侶
属性：行動公開可能
行動時間：会議開始時・夜開始時

昼の始めと夜の始めに１度ずつ「次に処刑されるプレイヤー」と「次に襲撃されるプレイヤー」を予想する。
予想が２度的中した場合、アイテム「御守」を手に入れる。`);
  }

  if (message.content.match(/Priest/)) {
    await message.reply(`69
役職名：牧師
属性：行動公開可能
行動時間：会議終了時

３日目に生存していたら、３日目の会議の始めに任意のプレイヤー一人を蘇生する。`);
  }

  if (message.content.match(/Dead‐spirit/)) {
    await message.reply(`70
役職名：死霊
属性：行動公開可能
行動時間：ゲーム開始時

ゲーム開始時に任意のプレイヤー一人にとり憑く。
対象が死亡した際、そのプレイヤーの職業をランダムに一つ引き継ぐ。`);
  }

  if (message.content.match(/Undead/)) {
    await message.reply(`71
役職名：死体（ゾンビ）
属性：CO禁止
行動時間：パッシブ

自身が死亡したとき陣営が人狼陣営、人狼に強制的に変化する。
このカードだけでは蘇生はできない。`);
  }

  if (message.content.match(/Werewolf-disease/)) {
    await message.reply(`72
役職名：人狼病
属性：CO禁止
行動時間：ゲーム開始時

自身の陣営カードが強制的に「人狼」となる。`);
  }

  if (message.content.match(/Immortal-curse/)) {
    await message.reply(`73
役職名：不死の呪い
属性：行動公開禁止
行動時間：パッシブ

人狼に襲撃された場合確定で死亡する。
また死亡した場合１度だけ、人狼陣営として復活する。`);
  }

  if (message.content.match(/Strange-ghost/)) {
    await message.reply(`74
役職名：奇怪な幽霊
属性：行動公開禁止
行動時間：ゲーム開始時

ゲーム開始時、任意のプレイヤー一人の役職をすべて把握する。他言無用。`);
  }

  if (message.content.match(/Haunted-cat/)) {
    await message.reply(`75
役職名：猫又
属性：行動公開なし
行動時間：パッシブ

死亡時、ランダムなプレイヤーの役職をコピーし蘇生する。`);
  }

  if (message.content.match(/Unlucky/)) {
    await message.reply(`76
役職名：不運な人
属性：CO必須
行動時間：会議経過・パッシブ

毎昼サイコロを振り、4が出た時、次の襲撃の対象が自身に強制的に変更される。
この効果は自身だけが人狼の時には発動せず、COもしなくて良い。
また、HPが1を超えることがない。（パッシブ）`);
  }

  if (message.content.match(/Insensitive/)) {
    await message.reply(`77
役職名：鈍感
属性：CO禁止
行動時間：パッシブ

狼に襲われて死んだとき誰も気が付かない。
GMは「本日の死者は出ませんでした」と発言。
ので翌日からも普通に職業効果を発動したり投票したりするが、投票以外の行動はGMによって抹消されている。`);
  }

  if (message.content.match(/W-dodgy-slit-eyed/)) {
    await message.reply(`78
役職名：胡散臭い糸目
属性：行動公開可能
行動時間：会議経過

毎日昼にサイコロを振る。
１、２の時一人の陣営を占う。
３、４の時一人の役職を占う。
5の時、もう一度サイコロを振る。6が出た時一人の陣営と役職をすべて占う。

また、この役職に就いたものは強制的に白陣営となる。

このカードは他プレイヤーからこのカードの片割れとの区別はつかない。
また、COでは「どちらの」胡散臭い糸目かの発言はできない。`);
  }

  if (message.content.match(/B-dodgy-slit-eyed/)) {
    await message.reply(`79
役職名：胡散臭い糸目
属性：行動公開可能
行動時間：会議経過

毎日昼にサイコロを振る。
１、２の時一人の陣営を占う。
３、４の時一人の役職を占う。
5の時、もう一度サイコロを振る。6が出た時一人の陣営と役職をすべて占う。

また、この役職に就いたものは強制的に黒陣営となる。

このカードは他プレイヤーからこのカードの片割れとの区別はつかない。
また、COでは「どちらの」胡散臭い糸目かの発言はできない。`);
  }

  if (message.content.match(/Tanuséne-lupin/)) {
    await message.reply(`80
役職名：怪盗タヌセーヌ・ルパン
属性：行動公開可能
行動時間：パッシブ

任意のタイミングで一度だけ任意のプレイヤー一人の役職をすべて奪い、自分のものにする。奪われたプレイヤーは１つだけ役職を引く。`);
  }

  if (message.content.match(/Raccoon-king/)) {
    await message.reply(`81
役職名：イタズラ王たぬきんぐ
属性：行動公開必須
行動時間：会議開始時

会議始めにサイコロを振り、出目の数÷２の投票権を任意のプレイヤー一人から1日間失効させる。`);
  }

  if (message.content.match(/Antique-pottery/)) {
    await message.reply(`82
役職名：古びた信楽焼
属性：行動公開なし
行動時間：ゲーム開始時

ゲーム開始時、追加で余っている職業を２つ引き、このカードを廃棄する。`);
  }

  if (message.content.match(/Homemade-soba/)) {
    await message.reply(`83
役職名：手打ち蕎麦
属性：行動公開必須
行動時間：会議終了時

一度だけ会議の終了時に処刑フェーズをスキップするか選択できる。`);
  }

  if (message.content.match(/Bamb/)) {
    await message.reply(`84
役職名：竹
属性：行動公開なし
行動時間：ゲーム開始時

何れかをゲーム開始時に選択する。

「賭けに出て大逆転を狙う！！」
職業を任意の３つ失い、新たにランダムな職業を２つ引く。

「安定が一番！」
なにもしない。`);
  }

  if (message.content.match(/Greedy-pot/)) {
    await message.reply(`85
役職名：強欲な壺
属性：行動公開可能
行動時間：パッシブ

HPの数×１＝投票権。`);
  }

  if (message.content.match(/Medusa/)) {
    await message.reply(`86
役職名：メデューサ
属性：行動公開必須
行動時間：パッシブ

人狼に襲われた際、人狼を石化する。
石化状態の人狼は次の日村の中心へ置かれ、全員が正体を知る。
石化状態のプレイヤーを処刑することはできない。
メデューサが死亡した際石化状態は解け、石化は解除される。`);
  }

  if (message.content.match(/Unstable-creature/)) {
    await message.reply(`87
役職名：不安定な生命体
属性：行動公開可能
行動時間：会議経過

毎日昼にサイコロを振る。
1の時HP-0.5。
2の時HP-1。
3の時HP+1。
4の時HP+2。
自身のHPが5以上になった際爆裂し、ランダムなプレイヤー2人を巻き込んで死亡する。
`);
  }

  if (message.content.match(/Evil/)) {
    await message.reply(`88
役職名：悪魔（みたいな人）
属性：行動公開必須・CO必須
行動時間：会議開始時

毎日会議の始めにサイコロを振る。
１の時、プレイヤー全員が役職を放棄し引き直す。
２の時、プレイヤー全員の役職をランダムに一つ追加する。
３の時、プレイヤー全員の役職をランダムに一つ削除する。

なお、効果を発動した場合このカードは消失する。
`);
  }

  if (message.content.match(/Visitor/)) {
    await message.reply(`
89
役職名：異世界人
属性：CO必須・行動（入手アイテム）公開必須
行動時間：会議経過・パッシブ

投票権が存在しない。
毎日会議中にサイコロの出目×0.5個アイテムを入手。
値は切り捨てる。
`);
  }

  if (message.content.match(/Nico-Robin/)) {
    await message.reply(`90
役職名：生ぎだい゛って人
属性：行動公開なし
行動時間：パッシブ

自身が死亡した際、一度だけ蘇生する。
`);
  }

  if (message.content.match(/Refuser/)) {
    await message.reply(`91
役職名：拒絶者
属性：行動公開必須
行動時間：パッシブ

ゲーム中一度だけどんな事象でも拒否できる。
この効果はゲーム中でもっとも強い権限を持ち、打ち消すには同効果が必要。
`);
  }

  if (message.content.match(/Sanitizer-addict/)) {
    await message.reply(`92
役職名：アルコール消毒中毒
属性：CO必須・行動公開必須
行動時間：ゲーム開始時

災厄強制発生。
`);
  }

  if (message.content.match(/Master/)) {
    await message.reply(`93
役職名：老師
属性：CO禁止
行動時間：パッシブ

襲撃された際、狼を殺害し生き残る。
異常状態になった場合、即死する。
`);
  }

  if (message.content.match(/Lucky/)) {
    await message.reply(`94
役職名：強運な人
属性：行動公開なし
行動時間：パッシブ

自身が死亡する場合、サイコロを振る。
4以外の時、死亡を回避する。
`);
  }

  if (message.content.match(/ForGod/)) {
    await message.reply(`95
役職名：貧望神
属性：行動公開なし
行動時間：会議終了時・パッシブ

自身が人狼に投票をしたとき、他プレイヤーに入った票数に拘わらず、人狼が確定で処刑される。
また、自身への投票が２倍。（パッシブ）
`);
  }

  if (message.content.match(/Soul-eater/)) {
    await message.reply(`96
役職名：死神
属性：CO必須・行動公開必須
行動時間：パッシブ

「生き残る」系の効果を抹消する。（パッシブ）
（「殺す」などの効果は消えない）
`);
  }

  if (message.content.match(/Grave-keeper/)) {
    await message.reply(`97
役職名：墓守
属性：行動公開必須
行動時間：パッシブ

自身が生きているとき、蘇生効果を無効化する。
`);
  }

  if (message.content.match(/Astronomist/)) {
    await message.reply(`98
役職名：天文学者
属性：行動公開可能
行動時間：夜開始時

「星は見ている」
毎晩サイコロを振り、「観測」を開始する。

３・６の時、「観測」に成功する。夜、外に出行動したプレイヤーすべてがわかる。（結果がわかるのはその晩の終わり）
１の時、望遠鏡が割れ、次の夜から観測ができない。
２の時、星が落ち、太陽が昇る。この日の夜フェーズはなかったことになる。
４の時、人狼もこちらを「観測」している。人狼の殺害先が自分に強制的になる
５の時、宇宙人と目が合う。宇宙に連れていかれ翌々日の昼までゲームに戻ってこれない。
`);
  }

  if (message.content.match(/Heavy-drinker/)) {
    await message.reply(`99
役職名：大酒呑み
陣営：CO必須・行動公開必須
行動時間：会議終了時

毎日会議の終わりに誰かを指定し、次の日の会議が終わるまで「酩酊」状態にする。
`);
  }

  if (message.content.match(/Fox/)) {
    await message.reply(`100
役職名：狐
属性：行動公開なし
行動時間：パッシブ

勝利条件に「ゲーム終了時に自身が生き残っていた場合」が追加。
襲撃されても死なないが、自身が狐だと言われた場合、死んでしまう。
`);
  }
};
