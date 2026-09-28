import ColorTheme from "../icons/ColorTheme";
import ModelIcon from "../icons/ModelIcon";
import Privacy from "../icons/Privacy";
import Terms from "../icons/Terms";
import { AIModelsNames } from "../sidebar/AIModelsNames";
import Border from "../ui/Border";
import Modal from "../ui/Modal";
import ModalSectionHeader from "./ModalSectionHeader";
import SettingsLink from "./SettingsLink";
import SettingsRow from "./SettingsRow";

type SettingsModalProps = { onClose: () => void };

const SettingsModal = ({ onClose }: SettingsModalProps) => {
  return (
    <Modal title="Settings" titleId="settings-modal-title" onClose={onClose}>
      {/* APP SETTINGS */}
      <ModalSectionHeader heading="App Settings" />

      {/* Theme Settings */}
      <SettingsRow
        icon={<ColorTheme aria-hidden="true" />}
        title="Color Theme"
        defaultOption="Light Mode"
        dropdownItems={["Light Mode", "Dark Mode"]}
      />

      {/* Model Settings */}
      <SettingsRow
        icon={<ModelIcon aria-hidden="true" />}
        title="Default Model"
        defaultOption="EchoGPT"
        dropdownItems={AIModelsNames}
      />

      <Border />

      {/* TERMS & CONDITIONS SECTION */}
      <ModalSectionHeader heading="Terms and Conditions" />

      <div className="w-full flex flex-col gap-1 mt-3">
        <SettingsLink
          icon={<Terms aria-hidden="true" />}
          title="Terms of Use"
          link="/terms-of-use"
        />

        <SettingsLink
          icon={<Privacy aria-hidden="true" />}
          title="Privacy Policy"
          link="/privacy-policy"
        />
      </div>

      <Border />

      {/* SOCIAL */}
      <ModalSectionHeader heading="Follow Us" />

      <div className="w-full flex flex-col gap-1 mt-3">
        <SettingsLink
          icon={
            <img
              src="/facebook.svg"
              alt="Facebook"
              width="20"
              height="20"
              aria-hidden="true"
              loading="lazy"
            />
          }
          title="Facebook"
          link="https://www.facebook.com/profile.php?id=61566021285022&mibextid=ZbWKwL"
          external
        />

        <SettingsLink
          icon={
            <img
              src="/linkedin.svg"
              alt="LinkedIn"
              width="20"
              height="20"
              aria-hidden="true"
              loading="lazy"
            />
          }
          title="LinkedIn"
          link="https://www.linkedin.com/company/echogpt/"
          external
        />
      </div>
    </Modal>
  );
};
export default SettingsModal;
