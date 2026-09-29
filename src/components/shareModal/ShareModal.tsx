import { useState } from "react";
import Hyperlink from "../icons/Hyperlink";
import Border from "../ui/Border";
import Modal from "../ui/Modal";
import ShareLink from "./ShareLink";
import { getShareUrl } from "../../data/shareOptions";

type ShareModalProps = { onClose: () => void };

const ShareModal = ({ onClose }: ShareModalProps) => {
  const [copied, setCopied] = useState(false);

  const currentUrl = window.location.href;

  const handleShare = (platform: string) => {
    if (platform === "Copy Link") {
      navigator.clipboard.writeText(currentUrl);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

      return;
    }

    const shareUrl = getShareUrl(platform, currentUrl);

    if (!shareUrl) return;

    window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=600");
  };

  return (
    <Modal title="Share Website" titleId="share-modal-title" onClose={onClose}>
      <div className="w-full flex flex-col gap-1.5">
        <ShareLink
          imageURL="/facebook.svg"
          label="Facebook"
          onShare={() => handleShare("Facebook")}
        />

        <ShareLink
          imageURL="/linkedin.svg"
          label="LinkedIn"
          onShare={() => handleShare("LinkedIn")}
        />

        <ShareLink
          imageURL="/whatsapp.svg"
          label="WhatsApp"
          onShare={() => handleShare("WhatsApp")}
        />

        <ShareLink
          imageURL="/telegram.svg"
          label="Telegram"
          onShare={() => handleShare("Telegram")}
        />

        <Border />

        <ShareLink
          icon={<Hyperlink />}
          label={copied ? "Link Copied!" : "Copy Link"}
          onShare={() => handleShare("Copy Link")}
        />
      </div>
    </Modal>
  );
};

export default ShareModal;
