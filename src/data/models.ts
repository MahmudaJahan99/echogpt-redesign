export type Capability = "Text input" | "Vision" | "Reasoning";

export interface Model {
  name: string;
  description: string;
  imageSrc: string;
  category: "default" | "advanced";
  capabilities: Capability[];
  badge?: "Limited" | "Pro";
}

export const models: Model[] = [
  // Default Models
  {
    name: "EchoGPT",
    description:
      "Interact with EchoGPT, an AI that reflects your input for quick ideas, summaries, or feedback. Perfect for brainstorming or rapid dialogue.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input"],
    category: "default",
  },
  {
    name: "Nemotron 3 Ultra",
    description: "Llama 3.1 Nemotron 70B Instruct",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/2ceb21fd-e7dd-439f-9bc9-e0a4bb58df04-nemotron.webp",
    capabilities: ["Text input", "Reasoning"],
    category: "default",
  },
  {
    name: "LongCat 2.0",
    description:
      "LongCat 2.0 from Meituan is free to use, with a 1M token context for long documents and extended chats.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788441107319-748730712-longcat.png",
    capabilities: ["Text input", "Reasoning"],
    category: "default",
  },
  {
    name: "Ling 3.0 Flash Sante (free)",
    description:
      "inclusionAI: Ling 3.0 Flash Sante (free) via OpenRouter. 262K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Reasoning"],
    category: "default",
  },
  {
    name: "Ling 3.0 Flash Fin (free)",
    description:
      "inclusionAI: Ling 3.0 Flash Fin (free) via OpenRouter. 262K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Reasoning"],
    category: "default",
  },
  {
    name: "Dots3-Note Preview (free)",
    description:
      "Dots Studio: Dots3-Note Preview (free) via OpenRouter. Accepts images as well as text. 512K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    category: "default",
  },
  {
    name: "LFM2.5-2.6B (free)",
    description:
      "LiquidAI: LFM2.5-2.6B (free) via OpenRouter. 66K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Reasoning"],
    category: "default",
  },
  {
    name: "Nemotron 3.5 Lightning (free)",
    description:
      "NVIDIA: Nemotron 3.5 Lightning (free) via OpenRouter. 1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/2ceb21fd-e7dd-439f-9bc9-e0a4bb58df04-nemotron.webp",
    capabilities: ["Text input", "Reasoning"],
    category: "default",
  },
  {
    name: "Laguna XS 2.1 (free)",
    description:
      "Poolside: Laguna XS 2.1 (free) via OpenRouter. 262K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Reasoning"],
    category: "default",
  },
  {
    name: "North Mini Code (free)",
    description:
      "Cohere: North Mini Code (free) via OpenRouter. 256K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Reasoning"],
    category: "default",
  },
  {
    name: "Nemotron 3.5 Content Safety (free)",
    description:
      "NVIDIA: Nemotron 3.5 Content Safety (free) via OpenRouter. Accepts images as well as text. 128K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/2ceb21fd-e7dd-439f-9bc9-e0a4bb58df04-nemotron.webp",
    capabilities: ["Text input", "Vision", "Reasoning"],
    category: "default",
  },
  {
    name: "Nemotron 3 Nano Omni (free)",
    description:
      "NVIDIA: Nemotron 3 Nano Omni (free) via OpenRouter. Accepts images as well as text. 256K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/2ceb21fd-e7dd-439f-9bc9-e0a4bb58df04-nemotron.webp",
    capabilities: ["Text input", "Vision", "Reasoning"],
    category: "default",
  },
  {
    name: "Gemma 4 26B A4B  (free)",
    description:
      "Google: Gemma 4 26B A4B  (free) via OpenRouter. Accepts images as well as text. 262K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/9830fef1-84df-4529-9ff8-19d8809ff37d-2qstBBWi1bWtjSDiytG9sbrKCyy.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    category: "default",
  },
  {
    name: "Gemma 4 31B (free)",
    description:
      "Google: Gemma 4 31B (free) via OpenRouter. Accepts images as well as text. 262K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/9830fef1-84df-4529-9ff8-19d8809ff37d-2qstBBWi1bWtjSDiytG9sbrKCyy.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    category: "default",
  },
  {
    name: "Nemotron 3 Super (free)",
    description:
      "NVIDIA: Nemotron 3 Super (free) via OpenRouter. 262K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/2ceb21fd-e7dd-439f-9bc9-e0a4bb58df04-nemotron.webp",
    capabilities: ["Text input", "Reasoning"],
    category: "default",
  },

  // Advanced Models
  {
    name: "DeepSeek V4 Pro",
    description:
      "DeepSeek specializes in advanced data exploration, leveraging AI to deliver accurate, insightful, and efficient solutions for complex analysis.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/fd2c1929-3174-480c-9d77-f76de82a49fe-deepseek.ico",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "GPT-5.4",
    description:
      "Preview GPT’s powerful abilities with GPT-5.4, offering precise yet expansive answers in an accessible, versatile format.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1777976579920-352792444-gpt.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "GPT-5.5",
    description:
      "Preview GPT’s powerful abilities with GPT-5-5, offering precise yet expansive answers in an accessible, versatile format.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1777976874057-470266146-gpt.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "GPT-5.6 Sol",
    description:
      "GPT-5.6 Sol delivers OpenAI's flagship reasoning with a 1M token context, ideal for long documents and demanding analysis.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1777976874057-470266146-gpt.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "GLM-5.2",
    description:
      "GLM-5.2 offers strong multilingual reasoning and coding across a 1M token context at a low cost per token.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788440961874-731503581-glm.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Tencent Hy3",
    description:
      "Tencent Hunyuan 3 provides fast, budget-friendly responses for everyday chat, drafting, and summarisation.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "Qwen 3.8 27B",
    description:
      "Qwen 3.8 27B balances speed and quality for general assistance, coding help, and structured output.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788440564021-100903499-qwen.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "DeepSeek V4 Flash",
    description:
      "DeepSeek V4 Flash answers quickly over a 1M token context, tuned for rapid iteration at very low cost.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/fd2c1929-3174-480c-9d77-f76de82a49fe-deepseek.ico",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Kimi K2.7 Code",
    description:
      "Kimi K2.7 Code is built for software work — reading large repositories, writing code, and explaining changes.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788440873944-197729900-kimi.png",
    capabilities: ["Text input"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "MiniMax M3",
    description:
      "MiniMax M3 handles long-context conversation and reasoning with an efficient price-to-quality balance.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788441057876-516258233-minimax.jpg",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "GLM-5.3 Flash",
    description:
      "GLM-5.3 Flash is the fastest GLM tier, made for high-volume chat where latency matters most.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788440969517-853164610-glm.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Gemini 3.8 Flash",
    description:
      "Gemini 3.8 Flash combines Google's multimodal strengths with fast responses across a 1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/9830fef1-84df-4529-9ff8-19d8809ff37d-2qstBBWi1bWtjSDiytG9sbrKCyy.svg",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Qwen 3.7 Max",
    description:
      "Qwen 3.7 Max is the top Qwen tier for complex reasoning, long-form writing, and detailed technical work.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788440576791-935287178-qwen.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Qwen 3.7 Plus",
    description:
      "Qwen 3.7 Plus gives near-flagship quality at a fraction of the cost for daily reasoning and drafting.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788440585887-621065227-qwen.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Qwen 3.6 Plus",
    description:
      "Qwen 3.6 Plus is a dependable general-purpose model for conversation, summarisation, and analysis.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788440594823-306178067-qwen.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "MiMo V2.5",
    description:
      "MiMo V2.5 from Xiaomi delivers efficient everyday assistance with one of the lowest costs per token.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788441205447-323952458-mimo.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "GPT-5.6 Luna",
    description:
      "GPT-5.6 Luna is the lightweight GPT-5.6 tier — quick, inexpensive, and capable across everyday tasks.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1777976874057-470266146-gpt.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Qwen 3.8 Max",
    description:
      "Qwen 3.8 Max is the latest Qwen flagship, strong at multi-step reasoning over very long context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788440605547-558022781-qwen.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "MiMo V2.5 Pro",
    description:
      "MiMo V2.5 Pro adds stronger reasoning to the MiMo line while staying inexpensive over a 1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788441177571-765022043-mimo.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Qwen 3.8 Max 0902",
    description:
      "Qwen 3.8 Max 0902 is the dated flagship snapshot, pinned for reproducible results on long reasoning tasks.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788440614597-423514208-qwen.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Tencent Hy4 Preview",
    description:
      "Tencent Hunyuan 4 Preview is the newest Hunyuan generation, with a 1M token context for long documents.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788441374808-600926725-_tencent_hy4.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "Qwen 3.8 Flash",
    description:
      "Qwen 3.8 Flash trades a little depth for speed, ideal for quick answers and high-volume chat.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788440631237-241143862-qwen.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "DeepSeek V4 Flash Vision",
    description:
      "DeepSeek V4 Flash Vision is an experimental multimodal tier that reads images alongside text.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/fd2c1929-3174-480c-9d77-f76de82a49fe-deepseek.ico",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "DeepSeek V4 Flash Fast",
    description:
      "DeepSeek V4 Flash Fast prioritises latency, returning answers sooner for interactive use.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/fd2c1929-3174-480c-9d77-f76de82a49fe-deepseek.ico",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "GLM-5.3",
    description:
      "GLM-5.3 is the latest full GLM tier, strong at multilingual reasoning and code over a 1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788440977661-672629269-glm.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Muse Spark 1.3",
    description:
      "Muse Spark 1.3 is Meta's newest Spark model, tuned for creative writing and open-ended conversation.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788440774181-234616224-_muse_spark.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Muse Spark 1.3 Contributor",
    description:
      "Muse Spark 1.3 Contributor is the low-cost community tier of Muse Spark 1.3 for everyday drafting.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788440784001-449066953-_muse_spark.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Muse Spark 1.2",
    description:
      "Muse Spark 1.2 offers dependable creative and conversational output over a 1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788440764672-741234347-_muse_spark.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Kimi K3",
    description:
      "Kimi K3 is Moonshot's flagship, built for deep reasoning and agentic work across a 1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788440856608-801671904-kimi.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Kimi K2.7 Code HighSpeed",
    description:
      "Kimi K2.7 Code HighSpeed keeps the coding strengths of K2.7 while returning results faster.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788440864859-749307940-kimi.png",
    capabilities: ["Text input"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Grok 4.5",
    description:
      "Grok 4.5 brings xAI's conversational style and current-events awareness to a 500K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/68a52565-9ae3-4a1a-8316-28ef6e7a84d6-x1.ico",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Grok 4.6",
    description:
      "Grok 4.6 is the latest xAI release, improving reasoning and instruction following over Grok 4.5.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/68a52565-9ae3-4a1a-8316-28ef6e7a84d6-x1.ico",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Gemini 3.7 Flash",
    description:
      "Gemini 3.7 Flash pairs fast multimodal responses with prompt caching for repeated long contexts.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/9830fef1-84df-4529-9ff8-19d8809ff37d-2qstBBWi1bWtjSDiytG9sbrKCyy.svg",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "GLM-5.2 Fast",
    description:
      "GLM-5.2 Fast is the low-latency GLM-5.2 variant for interactive sessions that cannot wait.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788440985209-454066925-glm.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Inkling",
    description:
      "Inkling from Thinking Machines is tuned for careful, well-structured reasoning and clear explanations.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788441585711-832907947-thinkingmachines.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Inkling Small",
    description:
      "Inkling Small is the lighter Inkling tier, keeping the same style at a lower cost per token.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788441565338-393382957-thinkingmachines.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Step 3.7 Flash",
    description:
      "Step 3.7 Flash from StepFun answers quickly and cheaply, suited to short interactive exchanges.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788441280775-702944232-step_3.7_flash.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Step 3.5 Flash",
    description:
      "Step 3.5 Flash offers a 1M token context at one of the lowest prices in the catalogue.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1788441288392-587603883-step_3.7_flash.png",
    capabilities: ["Text input", "Reasoning"],
    badge: "Limited",
    category: "advanced",
  },
  {
    name: "Jev Router",
    description:
      "TypeSafe: Jev Router via OpenRouter. Accepts images as well as text. 1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Vision"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "Perceptron Mk1.5",
    description:
      "Perceptron: Perceptron Mk1.5 via OpenRouter. Accepts images as well as text. 37K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "Ember-1",
    description:
      "Fireworks: Ember-1 via OpenRouter. Accepts images as well as text. 1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "GLM 5.3 Prime",
    description: "Z.ai: GLM 5.3 Prime via OpenRouter. 1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "Qwen3.8 Max Prime",
    description:
      "Qwen: Qwen3.8 Max Prime via OpenRouter. Accepts images as well as text. 1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "Space Bunny Alpha",
    description:
      "Space Bunny Alpha via OpenRouter. Accepts images as well as text. 1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "Aion 3.5 Mini",
    description: "AionLabs: Aion 3.5 Mini via OpenRouter. 262K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "Aion 3.5",
    description: "AionLabs: Aion 3.5 via OpenRouter. 262K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "Solar Mini 4",
    description: "Upstage: Solar Mini 4 via OpenRouter. 524K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "Command A+",
    description:
      "Cohere: Command A+ via OpenRouter. Accepts images as well as text. 192K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "GPT-6 Luna Pro",
    description:
      "OpenAI: GPT-6 Luna Pro via OpenRouter. Accepts images as well as text. 1.1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1777976874057-470266146-gpt.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "GPT-6 Luna",
    description:
      "OpenAI: GPT-6 Luna via OpenRouter. Accepts images as well as text. 1.1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1777976874057-470266146-gpt.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "GPT-6 Sol Pro",
    description:
      "OpenAI: GPT-6 Sol Pro via OpenRouter. Accepts images as well as text. 1.1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1777976874057-470266146-gpt.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "GPT-6 Sol",
    description:
      "OpenAI: GPT-6 Sol via OpenRouter. Accepts images as well as text. 1.1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/1777976874057-470266146-gpt.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "Claude Opus 5.5",
    description:
      "Anthropic: Claude Opus 5.5 via OpenRouter. Accepts images as well as text. 1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "MiMo-V2.6-Pro-UltraSpeed",
    description:
      "Xiaomi: MiMo-V2.6-Pro-UltraSpeed via OpenRouter. Accepts images as well as text. 1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "MiMo-V2.6-Flash",
    description:
      "Xiaomi: MiMo-V2.6-Flash via OpenRouter. Accepts images as well as text. 1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "MiMo-V2.6-Pro",
    description:
      "Xiaomi: MiMo-V2.6-Pro via OpenRouter. Accepts images as well as text. 1.1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "Grok 4.7",
    description:
      "SpaceXAI: Grok 4.7 via OpenRouter. Accepts images as well as text. 500K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/68a52565-9ae3-4a1a-8316-28ef6e7a84d6-x1.ico",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "Qwen3.8 Omni Flash",
    description:
      "Qwen: Qwen3.8 Omni Flash via OpenRouter. Accepts images as well as text. 1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "Ternary Bonsai 2 27B",
    description:
      "PrismML: Ternary Bonsai 2 27B via OpenRouter. Accepts images as well as text. 262K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "GLM 5.3 FlashX",
    description:
      "Z.ai: GLM 5.3 FlashX via OpenRouter. Accepts images as well as text. 1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "Pareto",
    description:
      "Pareto via OpenRouter. Accepts images as well as text. 262K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Vision"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "DeepSeek Pro Latest",
    description:
      "DeepSeek: DeepSeek Pro Latest via OpenRouter. 1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "DeepSeek Flash Latest",
    description:
      "DeepSeek: DeepSeek Flash Latest via OpenRouter. Accepts images as well as text. 1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "Schematron V2 Turbo",
    description:
      "Inference.net: Schematron V2 Turbo via OpenRouter. 128K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "Schematron V2 Small",
    description:
      "Inference.net: Schematron V2 Small via OpenRouter. 128K token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "GPT Astra Latest",
    description:
      "OpenAI: GPT Astra Latest via OpenRouter. Accepts images as well as text. 1.1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "GPT Sol Latest",
    description:
      "OpenAI: GPT Sol Latest via OpenRouter. Accepts images as well as text. 1.1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "GPT Terra Latest",
    description:
      "OpenAI: GPT Terra Latest via OpenRouter. Accepts images as well as text. 1.1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
  {
    name: "GPT Luna Latest",
    description:
      "OpenAI: GPT Luna Latest via OpenRouter. Accepts images as well as text. 1.1M token context.",
    imageSrc:
      "https://echogptlive.s3.amazonaws.com/models/92688003-9af5-43e8-ad30-0c51d21a171f-logo.svg",
    capabilities: ["Text input", "Vision", "Reasoning"],
    badge: "Pro",
    category: "advanced",
  },
];

export const defaultModels = models.filter((m) => m.category === "default");
export const advancedModels = models.filter((m) => m.category === "advanced");
