import ModelDetails from "./ModelDetails";

const ChatMain = () => {
  return (
    <div className="w-full relative flex flex-col gap-3 glass border border-border p-4 r-rounded-2xl shadow-card">
      <ModelDetails />

      <div className="hidden absolute left-0 bottom-41.25 grid place-items-center z-1000000000 w-81.75">
        <div className="text-foreground border border-border rounded-2xl py-4 w-full flex flex-col bg-card shadow-card animate-fade-up">
          <div className="w-full flex items-center gap-5 justify-between px-4">
            <div className="flex items-center gap-1.5 text-sm font-semibold tracking-tight">
              <img
                alt="model"
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                src="/_next/static/media/model.2fdbf0d0.svg"
                style={{ color: "transparent" }}
              />
              Models
            </div>
            <div className="h-7 px-3 flex items-center justify-center gap-2 rounded-full bg-primary/10 text-xs font-medium text-primary cursor-pointer hover:bg-primary/20 active:scale-[0.97] transition-all duration-200">
              <img
                alt="red"
                loading="lazy"
                width="12"
                height="15"
                decoding="async"
                data-nimg="1"
                src="/_next/static/media/red-rocket.1b879827.svg"
                style={{ color: "transparent" }}
              />
              Upgrade
            </div>
          </div>
          <div className="w-full max-h-[40vh] sm:max-h-[50vh] flex flex-col gap-2 mt-4 overflow-y-auto custom-scrollbar px-4">
            <div>
              <div className="text-xs font-medium mb-2.5 text-muted-foreground">
                Default Model
              </div>
              <div className="w-full h-px bg-border"></div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="EchoGPT"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  src="https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg"
                  style={{ color: "transparent" }}
                />
                EchoGPT
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Interact with EchoGPT, an AI that reflects your input for quick
                ideas, summaries, or feedback. Perfect for brainstorming or
                rapid dialogue.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Nemotron 3 Ultra"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F2ceb21fd-e7dd-439f-9bc9-e0a4bb58df04-nemotron.webp&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F2ceb21fd-e7dd-439f-9bc9-e0a4bb58df04-nemotron.webp&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F2ceb21fd-e7dd-439f-9bc9-e0a4bb58df04-nemotron.webp&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                Nemotron 3 Ultra
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Llama 3.1 Nemotron 70B Instruct
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="LongCat 2.0"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441107319-748730712-longcat.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441107319-748730712-longcat.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441107319-748730712-longcat.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                LongCat 2.0
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                LongCat 2.0 from Meituan is free to use, with a 1M token context
                for long documents and extended chats.
              </div>
            </div>
            <div className="mt-2.5">
              <div className="text-xs font-medium mb-2.5 text-muted-foreground">
                Advanced Models
              </div>
              <div className="w-full h-px bg-border"></div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="DeepSeek V4 Pro"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2Ffd2c1929-3174-480c-9d77-f76de82a49fe-deepseek.ico&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2Ffd2c1929-3174-480c-9d77-f76de82a49fe-deepseek.ico&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2Ffd2c1929-3174-480c-9d77-f76de82a49fe-deepseek.ico&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                DeepSeek V4 Pro
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                DeepSeek specializes in advanced data exploration, leveraging AI
                to deliver accurate, insightful, and efficient solutions for
                complex analysis.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="GLM-5.2"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440961874-731503581-glm.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440961874-731503581-glm.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440961874-731503581-glm.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                GLM-5.2
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                GLM-5.2 offers strong multilingual reasoning and coding across a
                1M token context at a low cost per token.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="DeepSeek V4 Flash"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2Ffd2c1929-3174-480c-9d77-f76de82a49fe-deepseek.ico&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2Ffd2c1929-3174-480c-9d77-f76de82a49fe-deepseek.ico&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2Ffd2c1929-3174-480c-9d77-f76de82a49fe-deepseek.ico&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                DeepSeek V4 Flash
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                DeepSeek V4 Flash answers quickly over a 1M token context, tuned
                for rapid iteration at very low cost.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Tencent Hy3"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  src="https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg"
                  style={{ color: "transparent" }}
                />
                Tencent Hy3
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                  Pro
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Tencent Hunyuan 3 provides fast, budget-friendly responses for
                everyday chat, drafting, and summarisation.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="MiMo V2.5 Pro"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441177571-765022043-mimo.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441177571-765022043-mimo.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441177571-765022043-mimo.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                MiMo V2.5 Pro
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                MiMo V2.5 Pro adds stronger reasoning to the MiMo line while
                staying inexpensive over a 1M token context.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Qwen 3.7 Plus"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440585887-621065227-qwen.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440585887-621065227-qwen.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440585887-621065227-qwen.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                Qwen 3.7 Plus
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Qwen 3.7 Plus gives near-flagship quality at a fraction of the
                cost for daily reasoning and drafting.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
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
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                GPT-5.6 Sol delivers OpenAI's flagship reasoning with a 1M token
                context, ideal for long documents and demanding analysis.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Kimi K2.7 Code"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440873944-197729900-kimi.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440873944-197729900-kimi.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440873944-197729900-kimi.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                Kimi K2.7 Code
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Kimi K2.7 Code is built for software work — reading large
                repositories, writing code, and explaining changes.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="GLM-5.3 Flash"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440969517-853164610-glm.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440969517-853164610-glm.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440969517-853164610-glm.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                GLM-5.3 Flash
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                GLM-5.3 Flash is the fastest GLM tier, made for high-volume chat
                where latency matters most.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Qwen 3.8 27B"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440564021-100903499-qwen.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440564021-100903499-qwen.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440564021-100903499-qwen.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                Qwen 3.8 27B
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Qwen 3.8 27B balances speed and quality for general assistance,
                coding help, and structured output.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Qwen 3.7 Max"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440576791-935287178-qwen.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440576791-935287178-qwen.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440576791-935287178-qwen.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                Qwen 3.7 Max
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Qwen 3.7 Max is the top Qwen tier for complex reasoning,
                long-form writing, and detailed technical work.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Qwen 3.6 Plus"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440594823-306178067-qwen.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440594823-306178067-qwen.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440594823-306178067-qwen.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                Qwen 3.6 Plus
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Qwen 3.6 Plus is a dependable general-purpose model for
                conversation, summarisation, and analysis.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Gemini 3.8 Flash"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  src="https://echogptlive.s3.amazonaws.com/models/9830fef1-84df-4529-9ff8-19d8809ff37d-2qstBBWi1bWtjSDiytG9sbrKCyy.svg"
                  style={{ color: "transparent" }}
                />
                Gemini 3.8 Flash
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Gemini 3.8 Flash combines Google's multimodal strengths with
                fast responses across a 1M token context.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Kimi K3"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440856608-801671904-kimi.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440856608-801671904-kimi.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440856608-801671904-kimi.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                Kimi K3
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Kimi K3 is Moonshot's flagship, built for deep reasoning and
                agentic work across a 1M token context.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="MiniMax M3"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //                 /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441057876-516258233-minimax.jpg&amp;w=32&amp;q=75 1x,
                  //                 /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441057876-516258233-minimax.jpg&amp;w=48&amp;q=75 2x
                  //               "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441057876-516258233-minimax.jpg&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                MiniMax M3
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                MiniMax M3 handles long-context conversation and reasoning with
                an efficient price-to-quality balance.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="GPT-5.5"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  src="https://echogptlive.s3.amazonaws.com/models/1777976874057-470266146-gpt.svg"
                  style={{ color: "transparent" }}
                />
                GPT-5.5
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Preview GPT’s powerful abilities with GPT-5-5, offering precise
                yet expansive answers in an accessible, versatile format.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="GPT-5.6 Luna"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  src="https://echogptlive.s3.amazonaws.com/models/1777976874057-470266146-gpt.svg"
                  style={{ color: "transparent" }}
                />
                GPT-5.6 Luna
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                GPT-5.6 Luna is the lightweight GPT-5.6 tier — quick,
                inexpensive, and capable across everyday tasks.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Grok 4.5"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F68a52565-9ae3-4a1a-8316-28ef6e7a84d6-x1.ico&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F68a52565-9ae3-4a1a-8316-28ef6e7a84d6-x1.ico&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F68a52565-9ae3-4a1a-8316-28ef6e7a84d6-x1.ico&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                Grok 4.5
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Grok 4.5 brings xAI's conversational style and current-events
                awareness to a 500K token context.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Grok 4.6"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F68a52565-9ae3-4a1a-8316-28ef6e7a84d6-x1.ico&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F68a52565-9ae3-4a1a-8316-28ef6e7a84d6-x1.ico&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F68a52565-9ae3-4a1a-8316-28ef6e7a84d6-x1.ico&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                Grok 4.6
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Grok 4.6 is the latest xAI release, improving reasoning and
                instruction following over Grok 4.5.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Gemini 3.7 Flash"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  src="https://echogptlive.s3.amazonaws.com/models/9830fef1-84df-4529-9ff8-19d8809ff37d-2qstBBWi1bWtjSDiytG9sbrKCyy.svg"
                  style={{ color: "transparent" }}
                />
                Gemini 3.7 Flash
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Gemini 3.7 Flash pairs fast multimodal responses with prompt
                caching for repeated long contexts.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="GPT-5.4"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  src="https://echogptlive.s3.amazonaws.com/models/1777976579920-352792444-gpt.svg"
                  style={{ color: "transparent" }}
                />
                GPT-5.4
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Preview GPT’s powerful abilities with GPT-5.4, offering precise
                yet expansive answers in an accessible, versatile format.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="DeepSeek V4 Flash Vision"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2Ffd2c1929-3174-480c-9d77-f76de82a49fe-deepseek.ico&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2Ffd2c1929-3174-480c-9d77-f76de82a49fe-deepseek.ico&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2Ffd2c1929-3174-480c-9d77-f76de82a49fe-deepseek.ico&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                DeepSeek V4 Flash Vision
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                DeepSeek V4 Flash Vision is an experimental multimodal tier that
                reads images alongside text.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="DeepSeek V4 Flash Fast"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2Ffd2c1929-3174-480c-9d77-f76de82a49fe-deepseek.ico&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2Ffd2c1929-3174-480c-9d77-f76de82a49fe-deepseek.ico&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2Ffd2c1929-3174-480c-9d77-f76de82a49fe-deepseek.ico&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                DeepSeek V4 Flash Fast
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                DeepSeek V4 Flash Fast prioritises latency, returning answers
                sooner for interactive use.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Qwen 3.8 Flash"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440631237-241143862-qwen.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440631237-241143862-qwen.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440631237-241143862-qwen.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                Qwen 3.8 Flash
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Qwen 3.8 Flash trades a little depth for speed, ideal for quick
                answers and high-volume chat.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Qwen 3.8 Max"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440605547-558022781-qwen.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440605547-558022781-qwen.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440605547-558022781-qwen.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                Qwen 3.8 Max
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Qwen 3.8 Max is the latest Qwen flagship, strong at multi-step
                reasoning over very long context.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Qwen 3.8 Max 0902"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440614597-423514208-qwen.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440614597-423514208-qwen.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440614597-423514208-qwen.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                Qwen 3.8 Max 0902
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Qwen 3.8 Max 0902 is the dated flagship snapshot, pinned for
                reproducible results on long reasoning tasks.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Muse Spark 1.2"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440764672-741234347-_muse_spark.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440764672-741234347-_muse_spark.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440764672-741234347-_muse_spark.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                Muse Spark 1.2
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Muse Spark 1.2 offers dependable creative and conversational
                output over a 1M token context.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Muse Spark 1.3"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440774181-234616224-_muse_spark.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440774181-234616224-_muse_spark.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440774181-234616224-_muse_spark.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                Muse Spark 1.3
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Muse Spark 1.3 is Meta's newest Spark model, tuned for creative
                writing and open-ended conversation.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Muse Spark 1.3 Contributor"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440784001-449066953-_muse_spark.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440784001-449066953-_muse_spark.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440784001-449066953-_muse_spark.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                Muse Spark 1.3 Contributor
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Muse Spark 1.3 Contributor is the low-cost community tier of
                Muse Spark 1.3 for everyday drafting.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Kimi K2.7 Code HighSpeed"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440864859-749307940-kimi.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440864859-749307940-kimi.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440864859-749307940-kimi.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                Kimi K2.7 Code HighSpeed
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Kimi K2.7 Code HighSpeed keeps the coding strengths of K2.7
                while returning results faster.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="MiMo V2.5"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441205447-323952458-mimo.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441205447-323952458-mimo.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441205447-323952458-mimo.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                MiMo V2.5
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                MiMo V2.5 from Xiaomi delivers efficient everyday assistance
                with one of the lowest costs per token.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="GLM-5.3"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440977661-672629269-glm.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440977661-672629269-glm.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440977661-672629269-glm.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                GLM-5.3
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                GLM-5.3 is the latest full GLM tier, strong at multilingual
                reasoning and code over a 1M token context.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="GLM-5.2 Fast"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440985209-454066925-glm.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440985209-454066925-glm.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788440985209-454066925-glm.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                GLM-5.2 Fast
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                GLM-5.2 Fast is the low-latency GLM-5.2 variant for interactive
                sessions that cannot wait.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Step 3.7 Flash"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441280775-702944232-step_3.7_flash.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441280775-702944232-step_3.7_flash.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441280775-702944232-step_3.7_flash.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                Step 3.7 Flash
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Step 3.7 Flash from StepFun answers quickly and cheaply, suited
                to short interactive exchanges.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Step 3.5 Flash"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441288392-587603883-step_3.7_flash.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441288392-587603883-step_3.7_flash.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441288392-587603883-step_3.7_flash.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                Step 3.5 Flash
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Step 3.5 Flash offers a 1M token context at one of the lowest
                prices in the catalogue.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Tencent Hy4 Preview"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441374808-600926725-_tencent_hy4.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441374808-600926725-_tencent_hy4.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441374808-600926725-_tencent_hy4.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                Tencent Hy4 Preview
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                  Pro
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Tencent Hunyuan 4 Preview is the newest Hunyuan generation, with
                a 1M token context for long documents.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Inkling"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441585711-832907947-thinkingmachines.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441585711-832907947-thinkingmachines.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441585711-832907947-thinkingmachines.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                Inkling
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Inkling from Thinking Machines is tuned for careful,
                well-structured reasoning and clear explanations.
              </div>
            </div>
            <div className="w-full p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-muted border border-transparent">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <img
                  alt="Inkling Small"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="overflow-hidden rounded-full border border-border"
                  //   srcset="
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441565338-393382957-thinkingmachines.png&amp;w=32&amp;q=75 1x,
                  //     /_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441565338-393382957-thinkingmachines.png&amp;w=48&amp;q=75 2x
                  //   "
                  src="/_next/image?url=https%3A%2F%2Fechogptlive.s3.amazonaws.com%2Fmodels%2F1788441565338-393382957-thinkingmachines.png&amp;w=48&amp;q=75"
                  style={{ color: "transparent" }}
                />
                Inkling Small
                <span className="ml-auto text-2.5 font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Limited
                </span>
              </div>
              <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
                Inkling Small is the lighter Inkling tier, keeping the same
                style at a lower cost per token.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-card flex justify-between gap-3 border rounded-xl transition-all duration-200 border-border">
        <div className="ml-3 mt-3 w-6 h-6 rounded-lg cursor-pointer flex items-center justify-center">
          <svg
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13.06 10.94a5.74 5.74 0 0 1 0 8.13c-2.25 2.24-5.89 2.25-8.13 0-2.24-2.25-2.25-5.89 0-8.13"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M10.59 13.41c-2.34-2.34-2.34-6.14 0-8.49 2.34-2.35 6.14-2.34 8.49 0 2.35 2.34 2.34 6.14 0 8.49"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <input
            type="file"
            accept=".pdf, .jpg, .jpeg, .docx"
            style={{ display: "none" }}
          />
        </div>
        <textarea
          rows={1}
          className="custom-scrollbar w-[calc(100%-100px)] resize-none p-3 text-foreground placeholder:text-muted-foreground bg-transparent focus:outline-none"
          placeholder="Ask a question..."
        ></textarea>
        <div className="w-22.5 h-15 flex items-center justify-end gap-2 mr-3">
          <div className="relative inline-block group">
            <div className="w-10 h-10 rounded-full cursor-pointer flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-primary active:scale-[0.95] transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 15.5c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4S8 3.79 8 6v5.5c0 2.21 1.79 4 4 4Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M4.35 9.65v1.7C4.35 15.57 7.78 19 12 19c4.22 0 7.65-3.43 7.65-7.65v-1.7M10.61 6.43c.9-.33 1.88-.33 2.78 0M11.2 8.55c.53-.14 1.08-.14 1.61 0M12 19v3"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className="absolute z-1000000000 bg-foreground text-background text-xs rounded-lg shadow-card px-2.5 py-1.5 whitespace-nowrap -mt-8 transform top-0 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
              Speech to Text
              <svg
                className="absolute text-foreground h-2 top-full left-1/2 transform -translate-x-1/2"
                x="0px"
                y="0px"
                viewBox="0 0 255 255"
                // xml:space="preserve"
              >
                <polygon
                  className="fill-current"
                  points="0,0 127.5,127.5 255,0"
                ></polygon>
              </svg>
            </div>
          </div>
          <div className="relative inline-block group">
            <div className="w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-primary text-white shadow-glow hover:bg-primary-600 active:scale-[0.95] transition-all duration-200">
              <svg
                className="text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="m7.4 6.32 8.49-2.83c3.81-1.27 5.88.81 4.62 4.62l-2.83 8.49c-1.9 5.71-5.02 5.71-6.92 0l-.84-2.52-2.52-.84c-5.71-1.9-5.71-5.01 0-6.92ZM10.11 13.65l3.58-3.59"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className="absolute z-1000000000 bg-foreground text-background text-xs rounded-lg shadow-card px-2.5 py-1.5 whitespace-nowrap -mt-8 transform top-0 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
              Send
              <svg
                className="absolute text-foreground h-2 top-full left-1/2 transform -translate-x-1/2"
                x="0px"
                y="0px"
                viewBox="0 0 255 255"
                // xml:space="preserve"
              >
                <polygon
                  className="fill-current"
                  points="0,0 127.5,127.5 255,0"
                ></polygon>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMain;
