import { Record, toString, Union } from "../App/src/fable_modules/fable-library.4.0.1/Types.js";
import { bool_type, record_type, option_type, list_type, string_type, class_type, int32_type, union_type } from "../App/src/fable_modules/fable-library.4.0.1/Reflection.js";
import { printf, toText, join, replicate } from "../App/src/fable_modules/fable-library.4.0.1/String.js";
import { map } from "../App/src/fable_modules/fable-library.4.0.1/Seq.js";
import { map as map_1, isEmpty } from "../App/src/fable_modules/fable-library.4.0.1/List.js";
import { PersistentVector$1$reflection } from "../App/src/fable_modules/FSharpx.Collections.3.1.0/PersistentVector.fs.js";

export class LinkMarker extends Union {
    "constructor"(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["L", "UL", "DL", "U", "D", "UR", "DR", "R"];
    }
    toString() {
        const this$ = this;
        switch (this$.tag) {
            case 1: {
                return "↖";
            }
            case 2: {
                return "↙";
            }
            case 3: {
                return "↑";
            }
            case 4: {
                return "↓";
            }
            case 5: {
                return "↗";
            }
            case 6: {
                return "↘";
            }
            case 7: {
                return "→";
            }
            default: {
                return "←";
            }
        }
    }
}

export function LinkMarker$reflection() {
    return union_type("YuGiOh.LinkMarker", [], LinkMarker, () => [[], [], [], [], [], [], [], []]);
}

export class LevelPlace extends Union {
    "constructor"(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["Level", "Rank", "Link"];
    }
}

export function LevelPlace$reflection() {
    return union_type("YuGiOh.LevelPlace", [], LevelPlace, () => [[["Item", int32_type]], [["Item", int32_type]], [["Item", class_type("Microsoft.FSharp.Collections.FSharpSet`1", [LinkMarker$reflection()])]]]);
}

export class Monster_Attribute extends Union {
    "constructor"(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["闇", "地", "炎", "光", "水", "風", "神"];
    }
}

export function Monster_Attribute$reflection() {
    return union_type("YuGiOh.Monster.Attribute", [], Monster_Attribute, () => [[], [], [], [], [], [], []]);
}

export class Monster_Type extends Union {
    "constructor"(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["魔法使い", "ドラゴン", "アンデッド", "戦士", "獣戦士", "獣", "鳥獣", "悪魔", "天使", "昆虫", "恐竜", "爬虫類", "魚", "海竜", "水", "炎", "雷", "岩石", "植物", "機械", "サイキック", "幻神獣", "創造神", "幻竜", "サイバース", "幻想魔"];
    }
}

export function Monster_Type$reflection() {
    return union_type("YuGiOh.Monster.Type", [], Monster_Type, () => [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]);
}

export class Monster_MonsterType extends Union {
    "constructor"(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["通常", "効果", "儀式", "融合", "シンクロ", "エクシーズ", "ペンデュラム", "リンク", "トークン", "罠"];
    }
}

export function Monster_MonsterType$reflection() {
    return union_type("YuGiOh.Monster.MonsterType", [], Monster_MonsterType, () => [[], [], [], [], [], [], [], [], [], []]);
}

export class Monster_MonsterSubtype extends Union {
    "constructor"(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["チューナー", "特殊召喚"];
    }
}

export function Monster_MonsterSubtype$reflection() {
    return union_type("YuGiOh.Monster.MonsterSubtype", [], Monster_MonsterSubtype, () => [[], []]);
}

export class Monster_Ability extends Union {
    "constructor"(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["リバース", "トゥーン", "スピリット", "ユニオン", "デュアル"];
    }
}

export function Monster_Ability$reflection() {
    return union_type("YuGiOh.Monster.Ability", [], Monster_Ability, () => [[], [], [], [], []]);
}

export class Monster_StatusValue extends Union {
    "constructor"(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["StatusValue", "Unknown"];
    }
}

export function Monster_StatusValue$reflection() {
    return union_type("YuGiOh.Monster.StatusValue", [], Monster_StatusValue, () => [[["Item", int32_type]], []]);
}

export class Monster_Card extends Record {
    "constructor"(Name, Attribute, Type, LevelPlace, MonsterType, MonsterSubtypes, Abilities, Attack, Defense, PendulumScale) {
        super();
        this.Name = Name;
        this.Attribute = Attribute;
        this.Type = Type;
        this.LevelPlace = LevelPlace;
        this.MonsterType = MonsterType;
        this.MonsterSubtypes = MonsterSubtypes;
        this.Abilities = Abilities;
        this.Attack = Attack;
        this.Defense = Defense;
        this.PendulumScale = PendulumScale;
    }
    get NameString() {
        const this$ = this;
        return this$.Name;
    }
    get AttributeString() {
        const this$ = this;
        return toString(this$.Attribute);
    }
    get TypeString() {
        const this$ = this;
        return toString(this$.Type);
    }
    get LevelPlaceString() {
        let matchValue, rank, markers, level;
        const this$ = this;
        return (matchValue = this$.LevelPlace, (matchValue.tag === 1) ? ((rank = (matchValue.fields[0] | 0), replicate(rank, "★"))) : ((matchValue.tag === 2) ? ((markers = matchValue.fields[0], join("", map(toString, markers)))) : ((level = (matchValue.fields[0] | 0), replicate(level, "☆")))));
    }
    get MonsterTypeString() {
        const this$ = this;
        return toString(this$.MonsterType);
    }
    get MonsterSubtypeStrings() {
        const this$ = this;
        const matchValue = this$.MonsterSubtypes;
        if (isEmpty(matchValue)) {
            return void 0;
        }
        else {
            const subtypes = matchValue;
            return map_1(toString, subtypes);
        }
    }
    get AbilityStrings() {
        const this$ = this;
        const matchValue = this$.Abilities;
        if (isEmpty(matchValue)) {
            return void 0;
        }
        else {
            const abilities = matchValue;
            return map_1(toString, abilities);
        }
    }
    get AttackString() {
        let clo;
        const this$ = this;
        const matchValue = this$.Attack;
        if (matchValue.tag === 1) {
            return void 0;
        }
        else {
            const value = matchValue.fields[0] | 0;
            return (clo = toText(printf("%d")), clo(value));
        }
    }
    get DefenseString() {
        let value, clo;
        const this$ = this;
        const matchValue = this$.Defense;
        return (matchValue == null) ? (void 0) : ((matchValue.tag === 1) ? (void 0) : ((value = (matchValue.fields[0] | 0), (clo = toText(printf("%d")), clo(value)))));
    }
}

export function Monster_Card$reflection() {
    return record_type("YuGiOh.Monster.Card", [], Monster_Card, () => [["Name", string_type], ["Attribute", Monster_Attribute$reflection()], ["Type", Monster_Type$reflection()], ["LevelPlace", LevelPlace$reflection()], ["MonsterType", Monster_MonsterType$reflection()], ["MonsterSubtypes", list_type(Monster_MonsterSubtype$reflection())], ["Abilities", list_type(Monster_Ability$reflection())], ["Attack", Monster_StatusValue$reflection()], ["Defense", option_type(Monster_StatusValue$reflection())], ["PendulumScale", option_type(int32_type)]]);
}

export class Spell_Type extends Union {
    "constructor"(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["通常", "永続", "装備", "儀式", "フィールド", "速攻"];
    }
}

export function Spell_Type$reflection() {
    return union_type("YuGiOh.Spell.Type", [], Spell_Type, () => [[], [], [], [], [], []]);
}

export class Spell_Card extends Record {
    "constructor"(Name, Type) {
        super();
        this.Name = Name;
        this.Type = Type;
    }
    get NameString() {
        const this$ = this;
        return this$.Name;
    }
    get AttributeString() {
        return void 0;
    }
    get TypeString() {
        const this$ = this;
        return toString(this$.Type);
    }
    get LevelPlaceString() {
        return void 0;
    }
    get MonsterTypeString() {
        return void 0;
    }
    get MonsterSubtypeStrings() {
        return void 0;
    }
    get AbilityStrings() {
        return void 0;
    }
    get AttackString() {
        return void 0;
    }
    get DefenseString() {
        return void 0;
    }
}

export function Spell_Card$reflection() {
    return record_type("YuGiOh.Spell.Card", [], Spell_Card, () => [["Name", string_type], ["Type", Spell_Type$reflection()]]);
}

export class Trap_Type extends Union {
    "constructor"(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["通常", "永続", "カウンター"];
    }
}

export function Trap_Type$reflection() {
    return union_type("YuGiOh.Trap.Type", [], Trap_Type, () => [[], [], []]);
}

export class Trap_Card extends Record {
    "constructor"(Name, Type) {
        super();
        this.Name = Name;
        this.Type = Type;
    }
    get NameString() {
        const this$ = this;
        return this$.Name;
    }
    get AttributeString() {
        return void 0;
    }
    get TypeString() {
        const this$ = this;
        return toString(this$.Type);
    }
    get LevelPlaceString() {
        return void 0;
    }
    get MonsterTypeString() {
        return void 0;
    }
    get MonsterSubtypeStrings() {
        return void 0;
    }
    get AbilityStrings() {
        return void 0;
    }
    get AttackString() {
        return void 0;
    }
    get DefenseString() {
        return void 0;
    }
}

export function Trap_Card$reflection() {
    return record_type("YuGiOh.Trap.Card", [], Trap_Card, () => [["Name", string_type], ["Type", Trap_Type$reflection()]]);
}

export class CardState extends Record {
    "constructor"(Card, IsFaceUp, IsVertical, XyzMaterials) {
        super();
        this.Card = Card;
        this.IsFaceUp = IsFaceUp;
        this.IsVertical = IsVertical;
        this.XyzMaterials = XyzMaterials;
    }
}

export function CardState$reflection() {
    return record_type("YuGiOh.CardState", [], CardState, () => [["Card", class_type("YuGiOh.ICard")], ["IsFaceUp", bool_type], ["IsVertical", bool_type], ["XyzMaterials", list_type(CardState$reflection())]]);
}

export class CellState extends Union {
    "constructor"(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["Occupied", "Vacant"];
    }
}

export function CellState$reflection() {
    return union_type("YuGiOh.CellState", [], CellState, () => [[["Item", CardState$reflection()]], []]);
}

export class BoardState extends Record {
    "constructor"(MyHand, MyDeck, MyExtraDeck, MyGraveyard, MyBanished, MyMonsterZones, MySpellZones, MyFieldZone, OpponentHand, OpponentDeck, OpponentExtraDeck, OpponentGraveyard, OpponentBanished, OpponentMonsterZones, OpponentSpellZones, OpponentFieldZone, ExtraMonsterZones) {
        super();
        this.MyHand = MyHand;
        this.MyDeck = MyDeck;
        this.MyExtraDeck = MyExtraDeck;
        this.MyGraveyard = MyGraveyard;
        this.MyBanished = MyBanished;
        this.MyMonsterZones = MyMonsterZones;
        this.MySpellZones = MySpellZones;
        this.MyFieldZone = MyFieldZone;
        this.OpponentHand = OpponentHand;
        this.OpponentDeck = OpponentDeck;
        this.OpponentExtraDeck = OpponentExtraDeck;
        this.OpponentGraveyard = OpponentGraveyard;
        this.OpponentBanished = OpponentBanished;
        this.OpponentMonsterZones = OpponentMonsterZones;
        this.OpponentSpellZones = OpponentSpellZones;
        this.OpponentFieldZone = OpponentFieldZone;
        this.ExtraMonsterZones = ExtraMonsterZones;
    }
}

export function BoardState$reflection() {
    return record_type("YuGiOh.BoardState", [], BoardState, () => [["MyHand", list_type(CellState$reflection())], ["MyDeck", PersistentVector$1$reflection(CellState$reflection())], ["MyExtraDeck", PersistentVector$1$reflection(CellState$reflection())], ["MyGraveyard", PersistentVector$1$reflection(CellState$reflection())], ["MyBanished", PersistentVector$1$reflection(CellState$reflection())], ["MyMonsterZones", PersistentVector$1$reflection(CellState$reflection())], ["MySpellZones", PersistentVector$1$reflection(CellState$reflection())], ["MyFieldZone", CellState$reflection()], ["OpponentHand", list_type(CellState$reflection())], ["OpponentDeck", PersistentVector$1$reflection(CellState$reflection())], ["OpponentExtraDeck", PersistentVector$1$reflection(CellState$reflection())], ["OpponentGraveyard", PersistentVector$1$reflection(CellState$reflection())], ["OpponentBanished", PersistentVector$1$reflection(CellState$reflection())], ["OpponentMonsterZones", PersistentVector$1$reflection(CellState$reflection())], ["OpponentSpellZones", PersistentVector$1$reflection(CellState$reflection())], ["OpponentFieldZone", CellState$reflection()], ["ExtraMonsterZones", PersistentVector$1$reflection(CellState$reflection())]]);
}

export class FieldCardPlace extends Union {
    "constructor"(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["MyMonsterZone", "MySpellZone", "MyFieldZone", "OpponentMonsterZone", "OpponentSpellZone", "OpponentFieldZone", "ExtraMonsterZone"];
    }
}

export function FieldCardPlace$reflection() {
    return union_type("YuGiOh.FieldCardPlace", [], FieldCardPlace, () => [[["Item", int32_type]], [["Item", int32_type]], [], [["Item", int32_type]], [["Item", int32_type]], [], [["Item", int32_type]]]);
}

export class CardPlace extends Union {
    "constructor"(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["MyHand", "MyDeck", "MyMonsterZone", "MyMonsterZoneXyzMaterial", "MySpellZone", "MyFieldZone", "MyExtraDeck", "MyGraveyard", "MyBanished", "OpponentHand", "OpponentDeck", "OpponentMonsterZone", "OpponentMonsterZoneXyzMaterial", "OpponentSpellZone", "OpponentFieldZone", "OpponentExtraDeck", "OpponentGraveyard", "OpponentBanished", "ExtraMonsterZone", "ExtraMonsterZoneXyzMaterial"];
    }
}

export function CardPlace$reflection() {
    return union_type("YuGiOh.CardPlace", [], CardPlace, () => [[["Item", int32_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item1", int32_type], ["Item2", int32_type]], [["Item", int32_type]], [], [["Item", int32_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item1", int32_type], ["Item2", int32_type]], [["Item", int32_type]], [], [["Item", int32_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item1", int32_type], ["Item2", int32_type]]]);
}

