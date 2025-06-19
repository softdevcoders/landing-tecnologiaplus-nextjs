import { sendGTMEvent } from '@next/third-parties/google'

const COMMON_CONFIG = {
  // event: 'buttonClicked',
  // category: 'Button',
  // action: 'Click',
};

export const GOOGLE_TAG_EVENTS = {
  BTN_WHATSAPP: {
    ...COMMON_CONFIG,
    id: 'btn-whatsapp',
  },
  MENU_CONTACT: {
    ...COMMON_CONFIG,
    id: 'menu-contacto',
  },
  PHONE_HEADER: {
    ...COMMON_CONFIG,
    id: 'phone-header',
  },
  BTN_FORM_CONTACT: {
    ...COMMON_CONFIG,
    id: 'btn-form-contacto',
  },
  EMAIL_FOOTER: {
    ...COMMON_CONFIG,
    id: 'email-footer',
  },
  PHONE_FOOTER_1: {
    ...COMMON_CONFIG,
    id: 'phone-one-footer',
  },
  PHONE_FOOTER_2: {
    ...COMMON_CONFIG,
    id: 'phone-two-footer',
  },
  BTN_INSTAGRAM_FOOTER: {
    ...COMMON_CONFIG,
    id: 'icono-instagram',
  },
  BTN_TIKTOK_FOOTER: {
    ...COMMON_CONFIG,
    id: 'icono-tiktok',
  },
  BTN_FACEBOOK_FOOTER: {
    ...COMMON_CONFIG,
    id: 'icono-facebook',
  },
  BTN_YOUTUBE_FOOTER: {
    ...COMMON_CONFIG,
    id: 'icono-youtube',
  },
};

export const sendGoogleTagEvent = (event) => {
  console.log(event);
  sendGTMEvent(event);
}