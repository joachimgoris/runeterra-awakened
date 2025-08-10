import React from "react";
import { useNavigate } from "react-router-dom";
import { OriginCard } from "@/components/origincard/origincard";
import { origins } from "@/data/origins";
import heroImage from "@/assets/overview-map.jpg";
import { ArrowLeft } from "lucide-react";

const Origins: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4 gap-4">
              <h1 className="text-5xl font-bold text-foreground">Origins</h1>
              <Button
                onClick={() => navigate("/")}
                variant="ghost"
                className="text-yellow-400 hover:text-yellow-500 hover:bg-yellow-100/10 px-3 py-1 rounded-md border border-yellow-400">
                <ArrowLeft className="mr-2 h-4 w-4"/>
                Go back
              </Button>
            </div>
            <p className="text-xl text-muted-foreground">
              As most of Runeterra's inhabitants are human or at least very humanoid with no real distinct traits, we decided to replace races with origins. Origins will have you decide from which region you stem and what your origin there is. While some origins are close to what we would normally see as backgrounds, they do only provide your Ability Scores Increases and your racial traits. We made the system so it is compatible with all backgrounds from Dungeons and Dragons. While some combinations are of course a bit less occurring or not the best fit, work together with your DM to make it fit.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {origins.map((origin) => (
          <OriginCard key={origin.id} origin={origin} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Origins;
