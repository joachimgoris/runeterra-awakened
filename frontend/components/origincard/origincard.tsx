import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { getStatName } from "@/utils/statUtils";
import OriginCardProps from "./origincardprops";

export function OriginCard({ origin }: OriginCardProps) {
  const navigate = useNavigate();

  const formattedAbilityScores = origin.abilityScoreIncrease
    .map((bonus) => `${getStatName(bonus.key)} +${bonus.value}`)
    .join(", ");

  return (
    <Card
      onClick={() => navigate(`/origin/${origin.id}`)}
      className="group relative overflow-hidden bg-gradient-card border-border hover:shadow-card-hover hover:scale-105 transition-all duration-500 cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
        style={{ backgroundImage: `url(${origin.imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
      <CardContent className="relative p-6 h-full flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
            {origin.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {origin.description}
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Ability:</span>
              <span className="text-primary font-medium">
                {formattedAbilityScores}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Size:</span>
              <span className="text-foreground">{origin.size}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Speed:</span>
              <span className="text-foreground">{origin.speed}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
