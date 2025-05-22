export const LOGO_METADATA = "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1747675231/website-v2/logos/so7xgqia3ntpj1hqlpsk.png"

export const SHOULD_ROBOTS_INDEX = process.env.SHOULD_ROBOTS_INDEX === 'false' ? false : true;

export const ROBOTS_CONFIG = {
  index: SHOULD_ROBOTS_INDEX,
  follow: SHOULD_ROBOTS_INDEX,
  googleBot: {
    index: SHOULD_ROBOTS_INDEX,
    follow: SHOULD_ROBOTS_INDEX,
    "max-image-preview": "none",
    "max-video-preview": -1,
    "max-snippet": -1,
  },
}