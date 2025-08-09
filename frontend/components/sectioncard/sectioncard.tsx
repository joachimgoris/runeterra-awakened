import React from "react";
import { useNavigate } from "react-router-dom";

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  description,
  path,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div
      className="bg-background p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleClick}
    >
      <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default SectionCard;
