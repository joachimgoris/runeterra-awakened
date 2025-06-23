## Origin Object

```
Origin{
 string Name
 List<AbilityScore> AbilityScore
 Size Size
 int Speed
 string? CreatureType
 List<Trait> Traits
}

enum Size {
	Small,
	Medium,
	Large
}

Trait {
 string Name
 string Description
}

AbilityScore {
  Ability Ability
  int Amount
}

enum Ability {
   Strenth
   Dexterity
   Constitution
   Intelligence
   Wisdom
   Charisma
}
```
