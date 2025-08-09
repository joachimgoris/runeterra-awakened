import { OriginTrait } from "./originTrait";


export interface SubOrigin {
    id: string;
    name: string;
    description: string;
    abilityScoreIncrease: StatBonus[];
    traits: OriginTrait[];
}
