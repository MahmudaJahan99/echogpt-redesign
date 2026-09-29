import { useState } from "react";
import Sparkles from "../icons/Sparkles";
import PlanOptions from "./PlanOptions";
import ProModels from "./ProModels";
import plans, { type PlanName } from "../../data/plans";
import PaymentModal from "../paymentModal/PaymentModal";

interface UpgradeModalProps {
  onClose: () => void;
}

const UpgradeModal = ({ onClose }: UpgradeModalProps) => {
  const [selectedPlan, setSelectedPlan] = useState<PlanName>("Monthly");
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"international" | "bdt">(
    "international",
  );

  const currentPlan = plans[selectedPlan];

  const handleUpgrade = () => {
    setIsPaymentOpen(true);
  };
  const handlePaymentClose = () => {
    setIsPaymentOpen(false);
  };
  const handleSubmit = () => {
    console.log("Selected plan:", selectedPlan);
    console.log("Payment method:", paymentMethod);

    // Later: call payment API here
  };

  return (
    <div className=" w-full sm:w-112.5 absolute bottom-10 left-0 grid place-items-center z-9999999999999 rounded-2xl animate-fade-up">
      <div className="w-full  h-[80vh]  max-h-[80vh] bg-card text-foreground border border-border shadow-card overflow-hidden custom-scrollbarl">
        {/* modal content */}
        <div className="flex flex-col h-full bg-surface p-5 rounded-2xl">
          {/* Modal Header Image */}
          <div className="w-full h-30 shrink-0 flex items-center justify-center">
            <img
              alt="upgrade"
              loading="lazy"
              width="80"
              height="80"
              src="https://echogpt.live/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fupgrade.5a75f1a6.png&w=256&q=75"
              style={{ color: "transparent" }}
            />
          </div>

          {/* Plan Options */}
          <PlanOptions
            selectedPlan={selectedPlan}
            onSelectPlan={setSelectedPlan}
          />

          {/* Models List */}
          <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-1">
            <div className="w-full flex flex-col gap-2.5">
              <ProModels />
            </div>
          </div>

          {/* description */}
          <p className="w-full mt-5 mb-2.5 text-sm text-muted-foreground">
            {currentPlan.description}
          </p>

          {/* selected plan */}
          <div className="w-full flex items-center gap-1 mb-3">
            <div className="text-sm font-semibold flex items-center gap-1">
              <Sparkles />
              {selectedPlan} Plan
            </div>
          </div>

          {/* price */}
          <div className="text-2xl font-bold flex items-center gap-4 mt-5">
            <span className="text-primary dark:text-primary-400">
              {currentPlan.price}
            </span>
          </div>

          {/* upgrade button */}
          <button
            type="button"
            onClick={handleUpgrade}
            className="w-full py-3 flex items-center justify-center rounded-xl text-xl font-semibold mt-4 transition-all duration-200 active:scale-[0.98] bg-primary text-white shadow-glow hover:bg-primary-600"
          >
            Upgrade Now
          </button>
        </div>

        {/* Payment Modal */}
        {isPaymentOpen && (
          <PaymentModal
            paymentMethod={paymentMethod}
            onPaymentMethodChange={setPaymentMethod}
            onClose={handlePaymentClose}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default UpgradeModal;
