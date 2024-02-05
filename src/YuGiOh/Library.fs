namespace YuGiOh

open FSharp.Collections
open FSharpx.Collections

type LinkMarker =
    | L
    | UL
    | DL
    | U
    | D
    | UR
    | DR
    | R

    override this.ToString() =
        match this with
        | L -> "←"
        | UL -> "↖"
        | DL -> "↙"
        | U -> "↑"
        | D -> "↓"
        | UR -> "↗"
        | DR -> "↘"
        | R -> "→"

type LevelPlace =
    | Level of int
    | Rank of int
    | Link of LinkMarker Set

type ICard =
    abstract member Name: string
    abstract member ReadName: string
    abstract member AttributeString: string option
    abstract member TypeString: string option
    abstract member LevelPlaceString: string option
    abstract member MonsterTypeString: string option
    abstract member MonsterSubtypeStrings: string list option
    abstract member AbilityStrings: string list option
    abstract member AttackString: string option
    abstract member DefenseString: string option

module Monster =
    /// <summary>
    /// モンスターカードの属性．
    /// </summary>
    type Attribute =
        | 闇属性
        | 地属性
        | 炎属性
        | 光属性
        | 水属性
        | 風属性
        | 神属性

    /// <summary>
    /// モンスターカードの種族．
    /// </summary>
    type Type =
        | 魔法使い族
        | ドラゴン族
        | アンデット族
        | 戦士族
        | 獣戦士族
        | 獣族
        | 鳥獣族
        | 悪魔族
        | 天使族
        | 昆虫族
        | 恐竜族
        | 爬虫類族
        | 魚族
        | 海竜族
        | 水族
        | 炎族
        | 雷族
        | 岩石族
        | 植物族
        | 機械族
        | サイキック族
        | 幻神獣族
        | 創造神族
        | 幻竜族
        | サイバース族
        | 幻想魔族

    type MonsterType =
        | 通常
        | 効果
        | 儀式
        | 融合
        | シンクロ
        | エクシーズ
        | ペンデュラム
        | リンク
        | トークン
        | 罠

    type MonsterSubtype =
        | チューナー
        | 特殊召喚

    type Ability =
        | リバース
        | トゥーン
        | スピリット
        | ユニオン
        | デュアル


    type StatusValue =
        | StatusValue of int
        | Unknown

    type Card =
        { Name: string
          ReadName: string
          Attribute: Attribute
          Type: Type
          LevelPlace: LevelPlace
          MonsterType: MonsterType
          MonsterSubtypes: MonsterSubtype list
          Abilities: Ability list
          Attack: StatusValue
          Defense: StatusValue option
          PendulumScale: int option }

        interface ICard with
            member this.Name = this.Name
            member this.ReadName = this.ReadName
            member this.AttributeString = Some(this.Attribute.ToString())
            member this.TypeString = Some(this.Type.ToString())

            member this.LevelPlaceString =
                Some
                <| match this.LevelPlace with
                   | Level level -> "☆" |> String.replicate level
                   | Rank rank -> "★" |> String.replicate rank
                   | Link markers -> markers |> Seq.map (fun marker -> marker.ToString()) |> String.concat ""

            member this.MonsterTypeString = Some(this.MonsterType.ToString())

            member this.MonsterSubtypeStrings =
                match this.MonsterSubtypes with
                | [] -> None
                | subtypes -> Some(subtypes |> List.map (fun subtype -> subtype.ToString()))

            member this.AbilityStrings =
                match this.Abilities with
                | [] -> None
                | abilities -> Some(abilities |> List.map (fun ability -> ability.ToString()))

            member this.AttackString =
                match this.Attack with
                | StatusValue value -> Some(sprintf "%d" value)
                | Unknown -> None

            member this.DefenseString =
                match this.Defense with
                | Some(StatusValue value) -> Some(sprintf "%d" value)
                | Some Unknown -> None
                | None -> None

        member this.ToNormal = { this with MonsterType = 通常 }
        member this.通常 = this.ToNormal

        member this.ToFusion = { this with MonsterType = 融合 }

        member this.融合 = this.ToFusion

        member this.ToRitual = { this with MonsterType = 儀式 }
        member this.儀式 = this.ToRitual

        member this.ToSynchro = { this with MonsterType = シンクロ }
        member this.シンクロ = this.ToSynchro

        member this.ToTuner =
            { this with
                MonsterSubtypes = チューナー :: this.MonsterSubtypes }

        member this.チューナー = this.ToTuner

        static member createMonster(name, readName, attribute, type_, level, ?attack, ?defense) =
            { Name = name
              ReadName = readName
              Attribute = attribute
              Type = type_
              LevelPlace = Level level
              MonsterType = 効果
              MonsterSubtypes = []
              Abilities = []
              Attack = attack |> Option.map StatusValue |> Option.defaultValue Unknown
              Defense = Some(defense |> Option.map StatusValue |> Option.defaultValue Unknown)
              PendulumScale = None }

        static member モンスターカード(name, readName, attribute, type_, level, ?attack, ?defense) =
            Card.createMonster (name, readName, attribute, type_, level, ?attack = attack, ?defense = defense)

        static member createXyzMonster(name, readName, attribute, type_, rank, ?attack, ?defense) =
            { Name = name
              ReadName = readName
              Attribute = attribute
              Type = type_
              LevelPlace = Rank rank
              MonsterType = 効果
              MonsterSubtypes = []
              Abilities = []
              Attack = attack |> Option.map StatusValue |> Option.defaultValue Unknown
              Defense = Some(defense |> Option.map StatusValue |> Option.defaultValue Unknown)
              PendulumScale = None }

        static member Xモンスターカード(name, readName, attribute, type_, rank, ?attack, ?defense) =
            Card.createXyzMonster (name, readName, attribute, type_, rank, ?attack = attack, ?defense = defense)

        static member createPendulumMonster(name, readName, attribute, type_, level, pendulumScale, ?attack, ?defense) =
            { Name = name
              ReadName = readName
              Attribute = attribute
              Type = type_
              LevelPlace = Level level
              MonsterType = 効果
              MonsterSubtypes = []
              Abilities = []
              Attack = attack |> Option.map StatusValue |> Option.defaultValue Unknown
              Defense = Some(defense |> Option.map StatusValue |> Option.defaultValue Unknown)
              PendulumScale = Some pendulumScale }

        static member Pモンスターカード(name, readName, attribute, type_, level, pendulumScale, ?attack, ?defense) =
            Card.createPendulumMonster (
                name,
                readName,
                attribute,
                type_,
                level,
                pendulumScale,
                ?attack = attack,
                ?defense = defense
            )

        static member createLinkMonster(name, readName, attribute, type_, linkMarkers, ?attack) =
            { Name = name
              ReadName = readName
              Attribute = attribute
              Type = type_
              LevelPlace = Link linkMarkers
              MonsterType = 効果
              MonsterSubtypes = []
              Abilities = []
              Attack = attack |> Option.map StatusValue |> Option.defaultValue Unknown
              Defense = None
              PendulumScale = None }

        static member Lモンスターカード(name, readName, attribute, type_, linkMarkers, ?attack) =
            Card.createLinkMonster (name, readName, attribute, type_, linkMarkers |> Set.ofSeq, ?attack = attack)


module Spell =
    /// <summary>
    /// 魔法カードの種類．
    /// </summary>
    type Type =
        | 通常
        | 永続
        | 装備
        | 儀式
        | フィールド
        | 速攻

    type Card =
        { Name: string
          ReadName: string
          Type: Type }

        interface ICard with
            member this.Name = this.Name
            member this.ReadName = this.ReadName
            member __.AttributeString = None
            member this.TypeString = Some(this.Type.ToString())
            member __.LevelPlaceString = None
            member __.MonsterTypeString = None
            member __.MonsterSubtypeStrings = None
            member __.AbilityStrings = None
            member __.AttackString = None
            member __.DefenseString = None

        static member createSpell(name, readName, type_) =
            { Name = name
              ReadName = readName
              Type = type_ }

        static member 魔法カード(name, readName, type_) =
            Card.createSpell (name, readName, type_)


module Trap =
    /// <summary>
    /// 罠カードの種類．
    /// </summary>
    type Type =
        | 通常
        | 永続
        | カウンター

    type Card =
        { Name: string
          ReadName: string
          Type: Type }

        interface ICard with
            member this.Name = this.Name
            member this.ReadName = this.ReadName
            member __.AttributeString = None
            member this.TypeString = Some(this.Type.ToString())
            member __.LevelPlaceString = None
            member __.MonsterTypeString = None
            member __.MonsterSubtypeStrings = None
            member __.AbilityStrings = None
            member __.AttackString = None
            member __.DefenseString = None

        static member createTrap(name, readName, type_) =
            { Name = name
              ReadName = readName
              Type = type_ }

        static member 罠カード(name, readName, type_) = Card.createTrap (name, readName, type_)

type DeckRecipe =
    { Main: (ICard * int) list
      Extra: (ICard * int) list
      Side: (ICard * int) list }

    member this.MainCount = this.Main |> List.sumBy snd

    member this.ExtraCount = this.Extra |> List.sumBy snd

    member this.SideCount = this.Side |> List.sumBy snd

//

type CardStack(cardsRecipe: (ICard * int) list) =
    let cards =
        [ for card, count in cardsRecipe do
              for _ in 1..count -> card ]

    member val Cards = cards with get, set

    member val Length = cards.Length with get

    member this.Shuffle(random: System.Random) =
        let indices' = [ for i in 0 .. this.Length - 1 -> random.Next(this.Length - i) ]

        let mutable indices = [| for _ in 0 .. this.Cards.Length - 1 -> -1 |]

        for k, ind' in indices' |> Seq.indexed do
            let mutable ind = ind'

            let mutable k' = 0

            while k' <= ind do
                if indices.[k'] <> -1 then
                    ind <- ind + 1

                k' <- k' + 1

            indices[ind] <- k

        let cards' = indices |> Array.map (fun i -> this.Cards.[i]) |> List.ofArray

        this.Cards <- cards'

    member this.Draw() =
        match this.Cards with
        | [] -> None
        | card :: rest ->
            this.Cards <- rest
            Some card

module Card =
    let isNameOf name (card: ICard) = card.Name = name

    let isNameIn names (card: ICard) =
        names |> List.exists (fun name -> card.Name = name)

    let isLevel level (card: ICard) =
        card :? Monster.Card && card :?> Monster.Card |> _.LevelPlace = Level level

    let isLevelIn min max (card: ICard) =
        card :? Monster.Card
        && match card :?> Monster.Card |> _.LevelPlace with
           | Level level -> level >= min && level <= max
           | _ -> false

type State(recipe, random) =
    let mutable main = CardStack recipe.Main
    do main.Shuffle random
    let extra = CardStack recipe.Extra
    let mutable hand = []

    do
        for _ in 1..5 do
            match main.Draw() with
            | Some card -> hand <- card :: hand
            | None -> ()

    member val Main = main with get, set
    member val Extra = extra with get, set

    member val Hand = hand with get, set
    member val Field = [] with get, set
    member val Graveyard = [] with get, set
    member val Banished = [] with get, set

    member this.Draw() =
        match this.Main.Draw() with
        | Some card ->
            this.Hand <- card :: this.Hand
            true
        | None -> false

    member this.CondInHand predicate = this.Hand |> List.exists predicate

    member this.CondInHand2 predicate1 predicate2 =
        let length = this.Hand.Length

        [ 0 .. length - 1 ]
        |> Seq.allPairs [ 0 .. length - 1 ]
        |> Seq.filter (fun (i, j) -> i <> j)
        |> Seq.exists (fun (i, j) -> predicate1 this.Hand.[i] && predicate2 this.Hand.[j])

    member this.CondInHand3 predicate1 predicate2 predicate3 =
        let length = this.Hand.Length

        [ 0 .. length - 1 ]
        |> Seq.allPairs [ 0 .. length - 1 ]
        |> Seq.allPairs [ 0 .. length - 1 ]
        |> Seq.filter (fun (i, (j, k)) -> i <> j && i <> k && j <> k)
        |> Seq.exists (fun (i, (j, k)) ->
            predicate1 this.Hand.[i] && predicate2 this.Hand.[j] && predicate3 this.Hand.[k])

    member this.CondInHand4 predicate1 predicate2 predicate3 predicate4 =
        let length = this.Hand.Length

        [ 0 .. length - 1 ]
        |> Seq.allPairs [ 0 .. length - 1 ]
        |> Seq.allPairs [ 0 .. length - 1 ]
        |> Seq.allPairs [ 0 .. length - 1 ]
        |> Seq.filter (fun (i, (j, (k, l))) -> i <> j && i <> k && i <> l && j <> k && j <> l && k <> l)
        |> Seq.exists (fun (i, (j, (k, l))) ->
            predicate1 this.Hand.[i]
            && predicate2 this.Hand.[j]
            && predicate3 this.Hand.[k]
            && predicate4 this.Hand.[l])

    member this.CondInHand5 predicate1 predicate2 predicate3 predicate4 predicate5 =
        let length = this.Hand.Length

        [ 0 .. length - 1 ]
        |> Seq.allPairs [ 0 .. length - 1 ]
        |> Seq.allPairs [ 0 .. length - 1 ]
        |> Seq.allPairs [ 0 .. length - 1 ]
        |> Seq.allPairs [ 0 .. length - 1 ]
        |> Seq.filter (fun (i, (j, (k, (l, m)))) ->
            i <> j
            && i <> k
            && i <> l
            && i <> m
            && j <> k
            && j <> l
            && j <> m
            && k <> l
            && k <> m
            && l <> m)
        |> Seq.exists (fun (i, (j, (k, (l, m)))) ->
            predicate1 this.Hand.[i]
            && predicate2 this.Hand.[j]
            && predicate3 this.Hand.[k]
            && predicate4 this.Hand.[l]
            && predicate5 this.Hand.[m])

    member this.CondInDeck predicate =
        this.Main.Cards |> List.exists predicate

    member this.CountCondInHand predicate =
        this.Hand |> List.filter predicate |> List.length
