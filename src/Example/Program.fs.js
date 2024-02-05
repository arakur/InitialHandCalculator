import { Record, Union } from "../App/src/fable_modules/fable-library.4.0.1/Types.js";
import { bool_type, record_type, option_type, list_type, enum_type, string_type, class_type, int32_type, union_type } from "../App/src/fable_modules/fable-library.4.0.1/Reflection.js";
import { PersistentVector$1$reflection } from "../App/src/fable_modules/FSharpx.Collections.3.1.0/PersistentVector.fs.js";

export class Monster_LinkMarker extends Union {
    "constructor"(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["L", "R", "U", "D", "UL", "UR", "DL", "DR"];
    }
}

export function Monster_LinkMarker$reflection() {
    return union_type("Program.Monster.LinkMarker", [], Monster_LinkMarker, () => [[], [], [], [], [], [], [], []]);
}

export class Monster_LevelPlace extends Union {
    "constructor"(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["Level", "Rank", "Link"];
    }
}

export function Monster_LevelPlace$reflection() {
    return union_type("Program.Monster.LevelPlace", [], Monster_LevelPlace, () => [[["Item", int32_type]], [["Item", int32_type]], [["Item", class_type("Microsoft.FSharp.Collections.FSharpSet`1", [Monster_LinkMarker$reflection()])]]]);
}

export class Monster_StatusValue extends Union {
    "constructor"(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["Value", "Unknown"];
    }
}

export function Monster_StatusValue$reflection() {
    return union_type("Program.Monster.StatusValue", [], Monster_StatusValue, () => [[["Item", int32_type]], []]);
}

export class Monster_Card extends Record {
    "constructor"(Name, Attribute, Type, LevelPlace, MonsterType, MonsterSubtypes, Abilities, Attack, Defense) {
        super();
        this.Name = Name;
        this.Attribute = (Attribute | 0);
        this.Type = (Type | 0);
        this.LevelPlace = LevelPlace;
        this.MonsterType = (MonsterType | 0);
        this.MonsterSubtypes = MonsterSubtypes;
        this.Abilities = Abilities;
        this.Attack = Attack;
        this.Defense = Defense;
    }
    get Name() {
        const this$ = this;
        return this$.Name;
    }
}

export function Monster_Card$reflection() {
    return record_type("Program.Monster.Card", [], Monster_Card, () => [["Name", string_type], ["Attribute", enum_type("Program.Monster.Attribute", int32_type, [["闇", 0], ["地", 1], ["炎", 2], ["光", 3], ["水", 4], ["風", 5], ["神", 6]])], ["Type", enum_type("Program.Monster.Type", int32_type, [["魔法使い", 0], ["ドラゴン", 1], ["アンデッド", 2], ["戦士", 3], ["獣戦士", 4], ["獣", 5], ["鳥獣", 6], ["悪魔", 7], ["天使", 8], ["昆虫", 9], ["恐竜", 10], ["爬虫類", 11], ["魚", 12], ["海竜", 13], ["水", 14], ["炎", 15], ["雷", 16], ["岩石", 17], ["植物", 18], ["機械", 19], ["サイキック", 20], ["幻神獣", 21], ["創造神", 22], ["幻竜", 23], ["サイバース", 24], ["幻想魔", 25]])], ["LevelPlace", Monster_LevelPlace$reflection()], ["MonsterType", enum_type("Program.Monster.MonsterType", int32_type, [["通常", 0], ["効果", 1], ["儀式", 2], ["融合", 3], ["シンクロ", 4], ["エクシーズ", 5], ["ペンデュラム", 6], ["リンク", 7], ["トークン", 8], ["罠", 9]])], ["MonsterSubtypes", list_type(enum_type("Program.Monster.MonsterSubtype", int32_type, [["チューナー", 0], ["特殊召喚", 1]]))], ["Abilities", list_type(enum_type("Program.Monster.Ability", int32_type, [["リバース", 0], ["トゥーン", 1], ["スピリット", 2], ["ユニオン", 3], ["デュアル", 4]]))], ["Attack", Monster_StatusValue$reflection()], ["Defense", option_type(Monster_StatusValue$reflection())]]);
}

export class Spell_Card extends Record {
    "constructor"(Name, Type) {
        super();
        this.Name = Name;
        this.Type = (Type | 0);
    }
    get Name() {
        const this$ = this;
        return this$.Name;
    }
}

export function Spell_Card$reflection() {
    return record_type("Program.Spell.Card", [], Spell_Card, () => [["Name", string_type], ["Type", enum_type("Program.Spell.Type", int32_type, [["通常", 0], ["永続", 1], ["装備", 2], ["儀式", 3], ["フィールド", 4], ["速攻", 5]])]]);
}

export class Trap_Card extends Record {
    "constructor"(Name, Type) {
        super();
        this.Name = Name;
        this.Type = (Type | 0);
    }
    get Name() {
        const this$ = this;
        return this$.Name;
    }
}

export function Trap_Card$reflection() {
    return record_type("Program.Trap.Card", [], Trap_Card, () => [["Name", string_type], ["Type", enum_type("Program.Trap.Type", int32_type, [["通常", 0], ["永続", 1], ["カウンター", 2]])]]);
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
    return record_type("Program.CardState", [], CardState, () => [["Card", class_type("Program.ICard")], ["IsFaceUp", bool_type], ["IsVertical", bool_type], ["XyzMaterials", list_type(CardState$reflection())]]);
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
    return union_type("Program.CellState", [], CellState, () => [[["Item", CardState$reflection()]], []]);
}

export class CardsState extends Record {
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

export function CardsState$reflection() {
    return record_type("Program.CardsState", [], CardsState, () => [["MyHand", list_type(CellState$reflection())], ["MyDeck", PersistentVector$1$reflection(CellState$reflection())], ["MyExtraDeck", PersistentVector$1$reflection(CellState$reflection())], ["MyGraveyard", PersistentVector$1$reflection(CellState$reflection())], ["MyBanished", PersistentVector$1$reflection(CellState$reflection())], ["MyMonsterZones", PersistentVector$1$reflection(CellState$reflection())], ["MySpellZones", PersistentVector$1$reflection(CellState$reflection())], ["MyFieldZone", CellState$reflection()], ["OpponentHand", list_type(CellState$reflection())], ["OpponentDeck", PersistentVector$1$reflection(CellState$reflection())], ["OpponentExtraDeck", PersistentVector$1$reflection(CellState$reflection())], ["OpponentGraveyard", PersistentVector$1$reflection(CellState$reflection())], ["OpponentBanished", PersistentVector$1$reflection(CellState$reflection())], ["OpponentMonsterZones", PersistentVector$1$reflection(CellState$reflection())], ["OpponentSpellZones", PersistentVector$1$reflection(CellState$reflection())], ["OpponentFieldZone", CellState$reflection()], ["ExtraMonsterZones", PersistentVector$1$reflection(CellState$reflection())]]);
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
    return union_type("Program.CardPlace", [], CardPlace, () => [[["Item", int32_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item1", int32_type], ["Item2", int32_type]], [["Item", int32_type]], [], [["Item", int32_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item1", int32_type], ["Item2", int32_type]], [["Item", int32_type]], [], [["Item", int32_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item1", int32_type], ["Item2", int32_type]]]);
}

