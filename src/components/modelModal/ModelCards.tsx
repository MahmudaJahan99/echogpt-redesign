import ModelCard from "./ModelCard";
import { models, defaultModels, advancedModels, type Model } from "../../data/models";

interface ModelCardsProps {
  category?: "default" | "advanced";
  models?: Model[];
  selectedModelName?: string;
  onSelectModel?: (model: Model) => void;
}

const ModelCards = ({
  category,
  models: customModels,
  selectedModelName,
  onSelectModel,
}: ModelCardsProps) => {
  const modelList = customModels
    ? customModels
    : category === "default"
      ? defaultModels
      : category === "advanced"
        ? advancedModels
        : models;

  return (
    <>
      {modelList.map((model) => (
        <ModelCard
          key={model.name}
          name={model.name}
          description={model.description}
          imageSrc={model.imageSrc}
          capabilities={model.capabilities}
          badge={model.badge}
          selected={selectedModelName === model.name}
          onClick={() => onSelectModel?.(model)}
        />
      ))}
    </>
  );
};

export default ModelCards;
