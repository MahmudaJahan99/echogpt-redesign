import CloseCircle from "../icons/CloseCircle";
import ModalActionButton from "./PaymentModalButtons";
import PaymentOption from "./PaymentOption";
import { paymentOptions, type PaymentMethod } from "../../data/paymentOptions";

interface PaymentModalProps {
  paymentMethod: PaymentMethod;
  onPaymentMethodChange: (method: PaymentMethod) => void;
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
    <div className=" fixed h-screen w-[calc(100vw-290px)] top-0 -left-64 right-0 bottom-0 grid place-items-center z-1000000000 bg-black/50 backdrop-blur-sm p-4">
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
            {paymentOptions.map((option) => (
              <PaymentOption
                key={option.value}
                {...option}
                selectedValue={paymentMethod}
                onSelect={(value) =>
                  onPaymentMethodChange(value as PaymentMethod)
                }
              />
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-row items-center justify-end gap-4 p-5 pt-0">
          <ModalActionButton label="Close" variant="close" onClick={onClose} />

          <ModalActionButton
            label="Submit"
            variant="submit"
            onClick={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
