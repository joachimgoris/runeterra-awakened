## Origin Object

```typescript
interface Origin {
 string Name;
 List<AbilityScore> AbilityScore;
 Size Size;
 int Speed;
 string? CreatureType;
 List<Trait> Traits;
}

enum Size {
   Tiny,
   Small,
   Medium,
   Large,
   Huge,
   Gargantuan
}

interface Trait {
 string Name;
 string Description;
}

interface AbilityScore {
  Ability Ability;
  int Amount;
}

enum Ability {
   Strength,
   Dexterity,
   Constitution,
   Intelligence,
   Wisdom,
   Charisma
}
```
