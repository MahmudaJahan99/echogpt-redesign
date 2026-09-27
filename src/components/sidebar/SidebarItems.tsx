import Compare from "../icons/Compare";
import Image from "../icons/Image";
import Video from "../icons/Video";
import Connector from "../icons/Connector";
import History from "../icons/History";
import Store from "../icons/Store";
import AITasks from "../icons/AITasks";
import AIJobAnalysis from "../icons/AIJobAnalysis";
import AISOPBuilders from "../icons/AISOPBuilders";
import Support from "../icons/Support";
import NewsLetter from "../icons/NewsLetter";
import Subscription from "../icons/Subscription";
import APIPlatform from "../icons/APIPlatform";

export const engagementSidebarItems = [
  {
    label: "Image Studio",
    icon: <Image />,
    badge: "PRO",
  },

  {
    label: "Video Studio",
    icon: <Video />,
    badge: "PRO",
  },

  {
    label: "Compare",
    icon: <Compare />,
  },

  {
    label: "Connectors",
    icon: <Connector />,
  },

  {
    label: "History",
    icon: <History />,
  },

  {
    label: "Store",
    icon: <Store />,
  },

  {
    label: "AI Tasks",
    icon: <AITasks />,
  },

  {
    label: "AI Job Analysis",
    icon: <AIJobAnalysis />,
  },

  {
    label: "AI SOP Builder",
    icon: <AISOPBuilders />,
  },
];

export const supportSidebarItems = [
  {
    label: "Support",
    icon: <Support />,
  },

  {
    label: "Newsletter",
    icon: <NewsLetter />,
  },

  {
    label: "Subscriptions",
    icon: <Subscription />,
  },

  {
    label: "API Platform",
    icon: <APIPlatform />,
  },

  {
    label: "Discord",
    icon: (
      <img
        src="/discord.svg"
        alt="discord"
        loading="lazy"
        width={20}
        height={20}
      />
    ),
  },
];
