import DropdownArrow from "../icons/DropdownArrow";
import Connector from "../icons/Connector";
import Sparkles from "../icons/Sparkles";
import CloseCircle from "../icons/CloseCircle";
import CheckMark from "../icons/CheckMark";

import type { Model } from "./models";

interface ModelDetailsProps {
  selectedModel?: Model;
  isModalOpen?: boolean;
  onToggleModal?: () => void;
}

const ModelDetails = ({
  selectedModel,
  isModalOpen = false,
  onToggleModal,
}: ModelDetailsProps) => {
  const modelName = selectedModel?.name || "EchoGPT";
  const modelImage = selectedModel?.imageSrc || "/logo.svg";

  return (
    <div className="w-full flex items-center gap-5 justify-between">
      <div className="relative flex items-center gap-2.5">
        {/* Model Selection Button */}
        <button
          id="model-selection-button"
          type="button"
          onClick={onToggleModal}
          aria-expanded={isModalOpen}
          aria-haspopup="dialog"
          aria-label={`Select model, currently ${modelName}`}
          className="flex items-center gap-2 cursor-pointer rounded-full pl-1 pr-3 py-1 hover:bg-muted transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-left select-none"
        >
          <img
            width={32}
            height={32}
            className="rounded-full ring-1 ring-border object-cover shrink-0"
            src={modelImage}
            style={{ color: "transparent" }}
            alt={modelName}
            loading="lazy"
            aria-hidden="true"
          />
          <div className="h-full flex items-center justify-center text-sm font-medium text-foreground">
            {modelName}
          </div>

          <DropdownArrow className={isModalOpen ? "rotate-180" : "rotate-0"} />
        </button>

        <div className="w-px h-5 bg-border"></div>

        {/* Connectors */}
        <div className="relative inline-block group">
          <button className="flex items-center justify-center w-8 h-8 rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200">
            <Connector />
          </button>
          <div className="absolute z-1000000000 bg-foreground text-background text-xs rounded-lg shadow-card px-2.5 py-1.5 whitespace-nowrap -mt-8 -left-6  transform top-0 -translate-x-1/2 opacity-0 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
            Connectors
            <svg
              className="absolute text-foreground h-2 top-full left-1/2 transform -translate-x-1/2"
              viewBox="0 0 255 255"
            >
              <polygon
                className="fill-current"
                points="0,0 127.5,127.5 255,0"
              ></polygon>
            </svg>
          </div>
        </div>

        <div className="w-px h-5 bg-border"></div>

        {/* Upgrade button */}
        <button>
          <img
                  alt="up i"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="cursor-pointer"
                  src="upgrade.svg"
                  style={{ color: "transparent" }}
                />
        </button>

        <div className="hidden w-full sm:w-112.5 absolute bottom-10 left-0 grid place-items-center z-9999999999999 rounded-2xl animate-fade-up">
          <div className="w-full h-full bg-card text-foreground border border-border shadow-card overflow-y-auto custom-scrollbar rounded-2xl">
            <div className="w-full h-full bg-surface p-5 rounded-2xl">
              <div className="w-full h-30 flex items-center justify-center">
                <img
                  alt="upgrade"
                  loading="lazy"
                  width="80"
                  height="80"
                  decoding="async"
                  data-nimg="1"
                  // srcset="
                  //   /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fupgrade.5a75f1a6.png&amp;w=96&amp;q=75  1x,
                  //   /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fupgrade.5a75f1a6.png&amp;w=256&amp;q=75 2x
                  // "
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fupgrade.5a75f1a6.png&amp;w=256&amp;q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="w-full border-b border-border flex justify-between gap-1.25 sm:gap-2.5 mb-3.75">
                <div className="p-1.25 sm:p-2.5 text-foreground text-xs sm:text-sm transition-all duration-200 font-semibold border-b-2 border-primary cursor-pointer">
                  Monthly
                </div>
                <div className="p-1.25 sm:p-2.5 text-foreground text-xs sm:text-sm transition-all duration-200 text-muted-foreground hover:text-foreground cursor-pointer">
                  Quarterly
                </div>
                <div className="p-1.25 sm:p-2.5 text-foreground text-xs sm:text-sm transition-all duration-200 text-muted-foreground hover:text-foreground cursor-pointer">
                  Semi-Annual
                </div>
                <div className="p-1.25 sm:p-2.5 text-foreground text-xs sm:text-sm transition-all duration-200 text-muted-foreground hover:text-foreground cursor-pointer">
                  Annual
                </div>
              </div>
              <div className="w-full flex flex-col gap-2.5 mt-3.5">
                <div className="w-full flex items-center gap-5">
                  <div className="flex items-center gap-1 text-3.5 font-medium">
                    <img
                      alt="DeepSeek V4 Pro"
                      loading="lazy"
                      width="20"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      className="overflow-hidden rounded-full border border-border"
                      // srcset="
                      //   /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2Ffd2c1929-3174-480c-9d77-f76de82a49fe-deepseek.ico&amp;w=32&amp;q=75 1x,
                      //   /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2Ffd2c1929-3174-480c-9d77-f76de82a49fe-deepseek.ico&amp;w=48&amp;q=75 2x
                      // "
                      src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2Ffd2c1929-3174-480c-9d77-f76de82a49fe-deepseek.ico&amp;w=48&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                    DeepSeek V4 Pro
                  </div>
                </div>
                <div className="w-full flex items-center gap-5">
                  <div className="flex items-center gap-1 text-3.5 font-medium">
                    <img
                      alt="GLM-5.2"
                      loading="lazy"
                      width="20"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      className="overflow-hidden rounded-full border border-border"
                      // srcset="
                      //   /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440961874-731503581-glm.png&amp;w=32&amp;q=75 1x,
                      //   /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440961874-731503581-glm.png&amp;w=48&amp;q=75 2x
                      // "
                      src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440961874-731503581-glm.png&amp;w=48&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                    GLM-5.2
                  </div>
                </div>
                <div className="w-full flex items-center gap-5">
                  <div className="flex items-center gap-1 text-3.5 font-medium">
                    <img
                      alt="MiMo V2.5 Pro"
                      loading="lazy"
                      width="20"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      className="overflow-hidden rounded-full border border-border"
                      // srcset="
                      //   /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441177571-765022043-mimo.png&amp;w=32&amp;q=75 1x,
                      //   /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441177571-765022043-mimo.png&amp;w=48&amp;q=75 2x
                      // "
                      src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441177571-765022043-mimo.png&amp;w=48&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                    MiMo V2.5 Pro
                  </div>
                </div>
                <div className="w-full flex items-center gap-5">
                  <div className="flex items-center gap-1 text-3.5 font-medium">
                    <img
                      alt="Qwen 3.7 Plus"
                      loading="lazy"
                      width="20"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      className="overflow-hidden rounded-full border border-border"
                      // srcset="
                      //   /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440585887-621065227-qwen.png&amp;w=32&amp;q=75 1x,
                      //   /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440585887-621065227-qwen.png&amp;w=48&amp;q=75 2x
                      // "
                      src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440585887-621065227-qwen.png&amp;w=48&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                    Qwen 3.7 Plus
                  </div>
                </div>
                <div className="w-full flex items-center gap-5">
                  <div className="flex items-center gap-1 text-3.5 font-medium">
                    <img
                      alt="GPT-5.6 Sol"
                      loading="lazy"
                      width="20"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      className="overflow-hidden rounded-full border border-border"
                      src="https://echogptlive.s3.amazonaws.com/models/1777976874057-470266146-gpt.svg"
                      style={{ color: "transparent" }}
                    />
                    GPT-5.6 Sol
                  </div>
                </div>
                <div className="w-full flex items-center gap-5">
                  <div className="flex items-center gap-1 text-3.5 font-medium">
                    <img
                      alt="GLM-5.3 Flash"
                      loading="lazy"
                      width="20"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      className="overflow-hidden rounded-full border border-border"
                      // srcset="
                      //   /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440969517-853164610-glm.png&amp;w=32&amp;q=75 1x,
                      //   /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440969517-853164610-glm.png&amp;w=48&amp;q=75 2x
                      // "
                      src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440969517-853164610-glm.png&amp;w=48&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                    GLM-5.3 Flash
                  </div>
                </div>
                <div className="w-full flex items-center gap-5">
                  <div className="flex items-center gap-1 text-3.5 font-medium">
                    <img
                      alt="Qwen 3.8 27B"
                      loading="lazy"
                      width="20"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      className="overflow-hidden rounded-full border border-border"
                      // srcset="
                      //   /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440564021-100903499-qwen.png&amp;w=32&amp;q=75 1x,
                      //   /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440564021-100903499-qwen.png&amp;w=48&amp;q=75 2x
                      // "
                      src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440564021-100903499-qwen.png&amp;w=48&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                    Qwen 3.8 27B
                  </div>
                </div>
                <div className="w-full flex items-center gap-5">
                  <div className="flex items-center gap-1 text-3.5 font-medium">
                    <img
                      alt="Kimi K3"
                      loading="lazy"
                      width="20"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      className="overflow-hidden rounded-full border border-border"
                      // srcset="
                      //   /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440856608-801671904-kimi.png&amp;w=32&amp;q=75 1x,
                      //   /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440856608-801671904-kimi.png&amp;w=48&amp;q=75 2x
                      // "
                      src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440856608-801671904-kimi.png&amp;w=48&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                    Kimi K3
                  </div>
                </div>
                <div className="w-full flex items-center gap-5">
                  <div className="flex items-center gap-1 text-3.5 font-medium">
                    <img
                      alt="MiniMax M3"
                      loading="lazy"
                      width="20"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      className="overflow-hidden rounded-full border border-border"
                      // srcset="
                      //   /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441057876-516258233-minimax.jpg&amp;w=32&amp;q=75 1x,
                      //   /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441057876-516258233-minimax.jpg&amp;w=48&amp;q=75 2x
                      // "
                      src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441057876-516258233-minimax.jpg&amp;w=48&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                    MiniMax M3
                  </div>
                </div>
              </div>
              <div className="w-full mt-5 mb-2.5 text-sm text-muted-foreground">
                Experience the benefits of Pro membership with unlimited chats
                for one month.
              </div>
              <div className="w-full flex items-center gap-1 mb-3">
                <div className="text-sm font-semibold flex items-center gap-1">
                  <Sparkles />
                  Monthly Plan
                </div>
              </div>
              <div className="text-2xl font-bold flex items-center gap-4 mt-5">
                <span className="text-primary dark:text-primary-400">
                  USD $9.99
                </span>
              </div>
              <div className="w-full py-3 flex items-center justify-center rounded-xl text-xl font-semibold mt-4 transition-all duration-200 active:scale-[0.98] bg-primary text-white shadow-glow hover:bg-primary-600 cursor-pointer">
                Upgrade Now
              </div>
            </div>
          </div>
          <div className="hidden fixed h-screen w-screen top-0 left-0 right-0 bottom-0 grid place-items-center z-1000000000 bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-card text-foreground border border-border fixed shadow-card rounded-2xl h-auto max-h-[99%] overflow-x-auto overflow-y-auto min-w-[97%] sm:min-w-[90%] md:min-w-[80%] lg:min-w-[50vw] xl:min-w-[30vw] animate-fade-up">
              <div
                className="text-white text-base sticky z-10000 top-0 font-semibold px-5 py-4 flex flex-row justify-between items-center rounded-t-2xl"
                style={{ backgroundColor: "rgb(124, 58, 237)" }}
              >
                Choose Payment Method
                <div className="cursor-pointer hover:scale-105 active:scale-95 transition-transform">
                  <CloseCircle />
                </div>
              </div>
              <div className="p-5">
                <div className="mt-5 flex flex-col gap-6 justify-center">
                  <button className="w-full flex items-center justify-between p-4 border rounded-xl transition-all duration-200 border-primary bg-primary/10">
                    <div className="flex items-center gap-3">
                      <img
                        alt="Secure International Payments"
                        loading="lazy"
                        width="500"
                        height="500"
                        decoding="async"
                        data-nimg="1"
                        className="h-10 w-auto"
                        src="/_next/static/media/strip.3ac2272b.svg"
                        style={{ color: "transparent" }}
                      />
                      <span className="text-foreground font-medium">
                        Secure International Payments
                      </span>
                    </div>
                    <div className="h-5 w-5 rounded-md bg-primary flex items-center justify-center text-white text-xs">
                      <CheckMark />
                    </div>
                  </button>
                  <button className="w-full flex items-center justify-between p-4 border rounded-xl transition-all duration-200 border-border bg-card hover:bg-muted">
                    <div className="flex items-center gap-3">
                      <img
                        alt="Pay in BDT"
                        loading="lazy"
                        width="500"
                        height="500"
                        decoding="async"
                        data-nimg="1"
                        className="h-10 w-auto"
                        //   srcset="
                        //     /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FsslCommerz.ec7b1751.png&amp;w=640&amp;q=75  1x,
                        //     /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FsslCommerz.ec7b1751.png&amp;w=1080&amp;q=75 2x
                        //   "
                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FsslCommerz.ec7b1751.png&amp;w=1080&amp;q=75"
                        style={{ color: "transparent" }}
                      />
                      <span className="text-foreground font-medium">
                        Pay in BDT
                      </span>
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex flex-row items-center justify-end gap-4 p-5 pt-0">
                <button className="select-none h-11 px-5 min-w-28 text-center rounded-xl font-medium transition-all duration-200 active:scale-[0.98] flex items-center justify-center cursor-pointer border border-destructive text-destructive bg-destructive/10 hover:bg-destructive hover:text-white">
                  Close
                </button>
                <button
                  type="button"
                  className="select-none h-11 px-5 min-w-28 justify-center items-center text-center rounded-xl font-medium transition-all duration-200 active:scale-[0.98] flex cursor-pointer text-white shadow-glow bg-primary hover:bg-primary-600"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
