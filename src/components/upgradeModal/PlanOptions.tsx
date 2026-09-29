import type { PlanName } from "../../data/plans";

interface PlanOptionsProps {
  selectedPlan: PlanName;
  onSelectPlan: (plan: PlanName) => void;
}

const plans: PlanName[] = ["Monthly", "Quarterly", "Semi-Annual", "Annual"];

const PlanOptions = ({ selectedPlan, onSelectPlan }: PlanOptionsProps) => {
  return (
    <div className="w-full border-b border-border flex justify-between gap-1.25 sm:gap-2.5 mb-3.75 shrink-0">
      {plans.map((plan) => {
        const isSelected = selectedPlan === plan;
        return (
          <button
            key={plan}
            type="button"
            onClick={() => onSelectPlan(plan)}
            className={`p-1.25 sm:p-2.5 text-xs sm:text-sm transition-all duration-200 font-semibold border-b-2 ${
              isSelected
                ? "text-foreground border-primary"
                : "text-muted-foreground border-transparent hover:text-foreground"
            }`}
          >
            {plan}
          </button>
        );
      })}
    </div>
  );
};

export default PlanOptions;
