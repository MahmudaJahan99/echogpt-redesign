import Close from "../icons/Close";
import ColorTheme from "../icons/ColorTheme";
import ModelIcon from "../icons/ModelIcon";
import Privacy from "../icons/Privacy";
import Terms from "../icons/Terms";
import { AIModelsNames } from "../sidebar/AIModelsNames";
import Border from "../ui/Border";
import ModalSectionHeader from "./ModalSectionHeader";
import SettingsLink from "./SettingsLink";
import SettingsRow from "./SettingsRow";

const SettingsModal = () => {
  return (
    <div className="hidden fixed h-screen w-screen top-0 left-0 right-0 bottom-0 grid place-items-center z-1000000000 bg-black/50 backdrop-blur-sm px-4">
      <div className="text-foreground border border-border rounded-2xl w-[95%] lg:w-112.5 flex flex-col bg-card shadow-card animate-fade-up">
        {/* Modal Header */}
        <div className="w-full flex items-center justify-between gap-5 p-5 border-b border-border">
          <div className="text-lg font-semibold tracking-tight">Settings</div>
          <button
            aria-label="Close"
            className="w-11 h-11 -mr-2 flex items-center justify-center rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <Close />
          </button>
        </div>

        {/* Modal body */}
        <div className="p-5 w-full">
          {/* APP SETTINGS SECTION */}
          <ModalSectionHeader heading="App Settings" />

          {/* Theme Settings */}
          <SettingsRow
            icon={<ColorTheme />}
            title="Color Theme"
            defaultOption="Light Mode"
            dropdownItems={["Light Mode", "Dark Mode"]}
          />

          {/* Model Settings */}
          <SettingsRow
            icon={<ModelIcon />}
            title="Default Model"
            defaultOption="EchoGPT"
            dropdownItems={AIModelsNames}
          />

          <Border />

          {/* TERMS & CONDITIONS SECTION */}
          <ModalSectionHeader heading="Terms and Conditions" />

          <div className="w-full flex flex-col gap-1 mt-3">
            <SettingsLink
              icon={<Terms />}
              title="Terms of Use"
              link="/terms-of-use"
            />
            <SettingsLink
              icon={<Privacy />}
              title="Privacy Policy"
              link="/tprivacy-policy"
            />
          </div>

          {/* Border */}
          <Border />

          {/* FOLLOW US SECTION */}
          <ModalSectionHeader heading="Follow Us" />

          <div className="w-full flex flex-col gap-1 mt-3">
            <SettingsLink
              icon={
                <img
                  src="/facebook.svg"
                  alt="Facebook"
                  loading="lazy"
                  width="20"
                  height="20"
                />
              }
              title="Facebook"
              link="https://www.facebook.com/profile.php?id=61566021285022&amp;mibextid=ZbWKwL"
            />

            <SettingsLink
              icon={
                <img
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  loading="lazy"
                  width="20"
                  height="20"
                />
              }
              title="LinkedIn"
              link="https://www.linkedin.com/company/echogpt/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
