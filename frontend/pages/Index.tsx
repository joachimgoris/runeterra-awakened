import React from "react";
import {
    Sparkles,
    Book,
    Users,
    Sword,
    Shield,
    Package,
    Settings
} from "lucide-react";
import { } from "@/components/sectioncard/sectioncard";
// import { origins } from "@/data/origins.json";
import heroImage from "@/assets/overview-map.jpg";

const Index: React.FC = () => {
    return (
       <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Runeterra
              <span className="text-primary ml-2">Awakened</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              A personal fan project recreating Runeterra as a 5E 2014
              compatible setting. Explore the diverse origins and cultures that
              inhabit this mystical realm, each carrying unique traits and
              stories that shape your character's destiny.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Book className="mr-2 h-4 w-4 text-primary" />
                {origins.length} Origins
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4 text-primary" />
                Multiple Sub-Origins
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sections Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Explore the Realm
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a section to begin your journey through the mystical world of
            Runeterra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SectionCard
            title="Origins"
            description="Discover the unique cultures and heritages of Runeterra."
            path="/origins"
          />
          <SectionCard
            title="Classes"
            description="Explore the various classes available for your character."
            path="/classes"
          />
          <SectionCard
            title="Items"
            description="Browse through magical items and artifacts."
            path="/items"
          />
          <SectionCard
            title="Builder"
            description="Create and customize your character with the builder tool."
            path="/builder"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
