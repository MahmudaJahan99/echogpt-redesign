import type { Model } from "../../data/models";

interface ProModelItemProps {
  model: Model;
}

const ProModelItem = ({ model }: ProModelItemProps) => {
  return (
    <div className="w-full flex items-center gap-5">
      <div className="flex items-center gap-1 text-3.5 font-medium">
        <img
          src={model.imageSrc}
          alt={`${model.name} logo`}
          loading="lazy"
          width={20}
          height={20}
          className="overflow-hidden rounded-full border border-border"
          style={{ color: "transparent" }}
        />

        <span>{model.name}</span>
      </div>
    </div>
  );
};

export default ProModelItem;
