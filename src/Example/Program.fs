﻿open YuGiOh

module Cards =
    open Monster
    open Spell
    open Trap

    let ``ドロール ＆ ロックバード`` =
        Card.モンスターカード ("ドロール ＆ ロックバード", "ドロール アンド ロックバード", 風属性, 魔法使い族, 1, 0, 0)

    let ``ドットスケーパー`` = Card.モンスターカード ("ドットスケーパー", "ドットスケーパー", 地属性, サイバース族, 1, 0, 2100)

    let ``マイクロ・コーダー`` = Card.モンスターカード ("マイクロ・コーダー", "マイクロ コーダー", 闇属性, サイバース族, 1, 300, 0)

    let ``増殖するG`` = Card.モンスターカード ("増殖するG", "ぞうしょくするジー", 地属性, 昆虫族, 1, 500, 200)

    let ``幽鬼うさぎ`` = Card.モンスターカード ("幽鬼うさぎ", "ゆきうさぎ", 光属性, サイキック族, 3, 0, 1800) |> _.チューナー

    let ``灰流うらら`` = Card.モンスターカード ("灰流うらら", "はるうらら", 炎属性, アンデット族, 3, 0, 1800) |> _.チューナー

    let ``ファイアウォール・ガーディアン`` =
        Card.モンスターカード ("ファイアウォール・ガーディアン", "ファイアウォール ガーディアン", 闇属性, サイバース族, 4, 100, 2000)

    let ``斬機シグマ`` =
        Card.モンスターカード ("斬機シグマ", "ザンキ シグマ", 光属性, サイバース族, 4, 1000, 1500) |> _.チューナー

    let ``斬機アディオン`` = Card.モンスターカード ("斬機アディオン", "ザンキ アディオン", 炎属性, サイバース族, 4, 1000, 1000)

    let ``斬機サブトラ`` = Card.モンスターカード ("斬機サブトラ", "ザンキ サブトラ", 炎属性, サイバース族, 4, 1000, 1000)

    let ``斬機マルチプライヤー`` =
        Card.モンスターカード ("斬機マルチプライヤー", "ザンキ マルチプライヤー", 地属性, サイバース族, 4, 500, 2000)

    let ``斬機ダイア`` =
        Card.モンスターカード ("斬機ダイア", "ザンキ ダイア", 光属性, サイバース族, 4, 1000, 1500) |> _.チューナー

    let ``斬機サーキュラー`` =
        Card.モンスターカード ("斬機サーキュラー", "ザンキ サーキュラー", 光属性, サイバース族, 4, 1500, 1500)

    let ``ファイアウォール・ディフェンサー`` =
        Card.モンスターカード ("ファイアウォール・ディフェンサー", "ファイアウォール ディフェンサー", 闇属性, サイバース族, 4, 1200, 1500)

    let ``パラレルエクシード`` =
        Card.モンスターカード ("パラレルエクシード", "パラレルエクシード", 風属性, サイバース族, 8, 2000, 2000)

    let ``原始生命態ニビル`` =
        Card.モンスターカード ("原始生命態ニビル", "げんしせいめいたいニビル", 光属性, 岩石族, 11, 3000, 600)

    let ``サイバネット・マイニング`` = Card.魔法カード ("サイバネット・マイニング", "サイバネット マイニング", Spell.通常)

    let ``斬機方程式`` = Card.魔法カード ("斬機方程式", "ザンキホウテイシキ", Spell.通常)

    let ``墓穴の指名者`` = Card.魔法カード ("墓穴の指名者", "はかあなのしめいしゃ", Spell.速攻)

    let ``抹殺の指名者`` = Card.魔法カード ("抹殺の指名者", "まっさつのしめいしゃ", Spell.速攻)

    let ``無限泡影`` = Card.罠カード ("無限泡影", "むげんほうよう", Trap.通常)

    let ``斬機超階乗`` = Card.罠カード ("斬機超階乗", "ザンキ チョウカイジョウ", Trap.通常)

    let ``サイバネット・コンフリクト`` = Card.罠カード ("サイバネット・コンフリクト", "サイバネット コンフリクト", Trap.カウンター)

    let ``サイバース・ディセーブルム`` =
        Card.モンスターカード ("サイバース・ディセーブルム", "サイバース ディセーブルム", 闇属性, サイバース族, 6, 2300, 150)
        |> _.融合

    let ``塊斬機ラプラシアン`` =
        Card.Xモンスターカード("塊斬機ラプラシアン", "カイザンキ ラプラシアン", 地属性, サイバース族, 4, 2000, 0)

    let ``塊斬機ダランベルシアン`` =
        Card.Xモンスターカード("塊斬機ダランベルシアン", "カイザンキ ダランベルシアン", 地属性, サイバース族, 4, 2000, 0)

    let ``転生炎獣アルミラージ`` =
        Card.Lモンスターカード("転生炎獣アルミラージ", "サラマングレイト アルミラージ", 炎属性, サイバース族, [ DR ], 0)

    let ``リングリボー`` = Card.Lモンスターカード("リングリボー", "リングリボー", 闇属性, サイバース族, [ DL ], 300)

    let ``リンク・デコーダー`` =
        Card.Lモンスターカード("リンク・デコーダー", "リンク デコーダー", 闇属性, サイバース族, [ D ], 300)

    let ``コード・トーカー`` =
        Card.Lモンスターカード("コード・トーカー", "コード トーカー", 闇属性, サイバース族, [ U; D ], 1300)

    let ``スプラッシュ・メイジ`` =
        Card.Lモンスターカード("スプラッシュ・メイジ", "スプラッシュ メイジ", 水属性, サイバース族, [ UR; DR ], 1100)

    let ``ピットナイト・アーリィ`` =
        Card.Lモンスターカード("ピットナイト・アーリィ", "ピットナイト アーリィ", 炎属性, サイバース族, [ UR; R ], 1500)

    let ``トランスコード・トーカー`` =
        Card.Lモンスターカード("トランスコード・トーカー", "トランスコード トーカー", 地属性, サイバース族, [ U; R; D ], 2300)

    let ``デコード・トーカー・ヒートソウル`` =
        Card.Lモンスターカード("デコード・トーカー・ヒートソウル", "デコード トーカー ヒートソウル", 炎属性, サイバース族, [ U; DL; DR ], 2300)

    let ``アクセスコード・トーカー`` =
        Card.Lモンスターカード("アクセスコード・トーカー", "アクセスコード トーカー", 闇属性, サイバース族, [ U; L; R; D ], 2300)

    let ``ファイアウォール・ドラゴン・ダークフルード - ネオテンペスト`` =
        Card.Lモンスターカード(
            "ファイアウォール・ドラゴン・ダークフルード - ネオテンペスト",
            "ファイアウォール ドラゴン ダークフルード ネオテンペスト",
            闇属性,
            サイバース族,
            [ U; L; R; DL; DR ],
            3000
        )

//

open Cards

let recipe: DeckRecipe =
    { Main =
        [ ``ドロール ＆ ロックバード``, 3
          ``ドットスケーパー``, 1
          ``マイクロ・コーダー``, 3
          ``増殖するG``, 3
          ``幽鬼うさぎ``, 1
          ``灰流うらら``, 3
          ``ファイアウォール・ガーディアン``, 1
          ``斬機シグマ``, 1
          ``斬機アディオン``, 1
          ``斬機サブトラ``, 1
          ``斬機マルチプライヤー``, 1
          ``斬機ダイア``, 1
          ``斬機サーキュラー``, 3
          ``ファイアウォール・ディフェンサー``, 3
          ``パラレルエクシード``, 3
          ``原始生命態ニビル``, 2
          ``サイバネット・マイニング``, 2
          ``斬機方程式``, 1
          ``墓穴の指名者``, 2
          ``抹殺の指名者``, 1
          ``無限泡影``, 1
          ``斬機超階乗``, 1
          ``サイバネット・コンフリクト``, 1 ]
      Extra =
        [ ``サイバース・ディセーブルム``, 1
          ``塊斬機ラプラシアン``, 1
          ``塊斬機ダランベルシアン``, 1
          ``転生炎獣アルミラージ``, 1
          ``リングリボー``, 1
          ``リンク・デコーダー``, 1
          ``コード・トーカー``, 1
          ``スプラッシュ・メイジ``, 2
          ``ピットナイト・アーリィ``, 1
          ``トランスコード・トーカー``, 2
          ``デコード・トーカー・ヒートソウル``, 1
          ``アクセスコード・トーカー``, 1
          ``ファイアウォール・ドラゴン・ダークフルード - ネオテンペスト``, 1 ]
      Side = [] }

assert (recipe.MainCount = 40)
assert (recipe.ExtraCount = 15)

//

let 初動手札 (state: State) : bool =
    let is自力特殊召喚可能斬機 = [ "斬機アディオン"; "斬機サブトラ"; "斬機シグマ" ] |> Card.isNameIn

    let isパラエク = Card.isNameOf "パラレルエクシード"

    let is通常召喚可能 = Card.isLevelIn 1 4

    let isサーキュラー初動 = state.CondInHand(Card.isNameIn [ "斬機サーキュラー"; "サイバネット・マイニング" ])

    let is斬機初動 = state.CondInHand2 is自力特殊召喚可能斬機 (Card.isLevel 4)

    let isパラエク初動 = state.CondInHand2 isパラエク is通常召喚可能 && state.CondInDeck isパラエク

    isサーキュラー初動 || is斬機初動 || isパラエク初動

let is誘発札 =
    [ "ドロール ＆ ロックバード"; "増殖するG"; "幽鬼うさぎ"; "灰流うらら"; "原始生命態ニビル"; "無限泡影" ]
    |> Card.isNameIn

//

let mutable 初動回数 = 0
let 誘発枚数回数 = [| for _ in 0..6 -> 0 |]

let random = System.Random 0xbeef

let 試行回数 = 1000000

for trial in 1..試行回数 do
    let state = State(recipe, random)

    if trial % 100000 = 0 then
        printfn "Trial: %d" trial
        printfn "%s" (state.Hand |> List.map _.Name |> List.reduce (fun a b -> a + " | " + b))

    if 初動手札 state then
        初動回数 <- 初動回数 + 1

    let 誘発枚数 = state.CountCondInHand is誘発札
    誘発枚数回数.[誘発枚数] <- 誘発枚数回数.[誘発枚数] + 1

let 誘発合計 = [ 0..6 ] |> Seq.sumBy (fun i -> i * 誘発枚数回数.[i])
let 誘発期待値 = float 誘発合計 / float 試行回数

let 誘発標準偏差 =
    ([ 0..6 ] |> Seq.sumBy (fun i -> (float i - 誘発期待値) ** 2.0 * float 誘発枚数回数.[i]))
    / float (試行回数 - 1)
    |> sqrt

printfn "初動率: %f %%" (float 初動回数 / float 試行回数 * 100.0)
printfn "誘発期待値: %f ± %f 枚" 誘発期待値 誘発標準偏差
