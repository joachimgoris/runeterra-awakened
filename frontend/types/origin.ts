import { OriginTrait } from "./originTrait";
import { StatBonus } from "./statBonus";
import { SubOrigin } from "./subOrigin";

export interface Origin {
    id: string;
    name: string;
    description: string;
    abilityScoreIncrease: StatBonus[];
    size: string;
    languages: string;
    age: number;
    sizeDescription: string;
    traits: OriginTrait[];
    subOrigins: SubOrigin[];
    imageUrl: string;
}