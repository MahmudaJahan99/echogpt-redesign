import { proModels } from "../../data/models";
import ProModelItem from "./ProModelItem";

const ProModels = () => {
  return (
    <div className="flex flex-col gap-2">
      {proModels.map((model) => (
        <ProModelItem key={model.name} model={model} />
      ))}
    </div>
  );
};

export default ProModels;
