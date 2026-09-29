import CheckMark from "../icons/CheckMark";
import CloseCircle from "../icons/CloseCircle";
import stripeLogo from "../../assets/images/stripe.svg";
import sslCommerz from "../../assets/images/sslCommerz.png";

interface PaymentModalProps {
  paymentMethod: "international" | "bdt";
  onPaymentMethodChange: (method: "international" | "bdt") => void;
  onClose: () => void;
  onSubmit: () => void;
}

const PaymentModal = ({
  paymentMethod,
  onPaymentMethodChange,
  onClose,
  onSubmit,
}: PaymentModalProps) => {
  return (
    <div className=" fixed h-screen w-screen top-0 left-0 right-0 bottom-0 grid place-items-center z-1000000000 bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-card text-foreground border border-border fixed shadow-card rounded-2xl h-auto max-h-[99%] overflow-x-auto overflow-y-auto min-w-[97%] sm:min-w-[90%] md:min-w-[80%] lg:min-w-[50vw] xl:min-w-[30vw] animate-fade-up">
        {/* Header */}
        <div
          className="text-white text-base sticky z-10000 top-0 font-semibold px-5 py-4 flex flex-row justify-between items-center rounded-t-2xl"
          style={{ backgroundColor: "rgb(124, 58, 237)" }}
        >
          Choose Payment Method
          <button
            type="button"
            onClick={onClose}
            aria-label="Close payment modal"
            className="cursor-pointer hover:scale-105 active:scale-95 transition-transform"
          >
            <CloseCircle />
          </button>
        </div>

        {/* Payment options */}
        <div className="p-5">
          <div className="mt-5 flex flex-col gap-6 justify-center">
            {/* International */}
            <button
              type="button"
              onClick={() => {
                onPaymentMethodChange("international");
              }}
              className={`w-full flex items-center justify-between p-4 border rounded-xl transition-all duration-200 ${
                paymentMethod === "international"
                  ? " border-primary bg-primary/10"
                  : "border-border bg-card hover:bg-muted"
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  alt="Secure International Payments"
                  loading="lazy"
                  width="500"
                  height="500"
                  className="h-10 w-10"
                  src={stripeLogo}
                  style={{ color: "transparent" }}
                />

                <span className="text-foreground font-medium">
                  Secure International Payments
                </span>
              </div>

              {paymentMethod === "international" && (
                <div className="h-5 w-5 rounded-md bg-primary flex items-center justify-center text-white text-xs">
                  <CheckMark />
                </div>
              )}
            </button>

            {/* BDT */}
            <button
              type="button"
              onClick={() => onPaymentMethodChange("bdt")}
              className={`w-full flex items-center justify-between p-4 border rounded-xl transition-all duration-200 ${
                paymentMethod === "bdt"
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card hover:bg-muted"
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  alt="Pay in BDT"
                  loading="lazy"
                  width="500"
                  height="500"
                  className="h-10 w-10"
                  src={sslCommerz}
                  style={{ color: "transparent" }}
                />

                <span className="text-foreground font-medium">Pay in BDT</span>
              </div>

              {paymentMethod === "bdt" && (
                <div className="h-5 w-5 rounded-md bg-primary flex items-center justify-center text-white text-xs">
                  <CheckMark />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-row items-center justify-end gap-4 p-5 pt-0">
          <button
            type="button"
            onClick={onClose}
            className="select-none h-11 px-5 min-w-28 text-center rounded-xl font-medium transition-all duration-200 active:scale-[0.98] flex items-center justify-center cursor-pointer border border-destructive text-destructive bg-destructive/10 hover:bg-destructive hover:text-white"
          >
            Close
          </button>

          <button
            type="button"
            onClick={onSubmit}
            className="select-none h-11 px-5 min-w-28 justify-center items-center text-center rounded-xl font-medium transition-all duration-200 active:scale-[0.98] flex cursor-pointer text-white shadow-glow bg-primary hover:bg-primary-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
