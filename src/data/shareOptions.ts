export const getShareUrl = (platform: string, url: string) => {
  const encodedUrl = encodeURIComponent(url);

  const shareUrls: Record<string, string> = {
    Facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,

    LinkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,

    WhatsApp: `https://wa.me/?text=${encodedUrl}`,

    Telegram: `https://t.me/share/url?url=${encodedUrl}`,
  };

  return shareUrls[platform];
};
