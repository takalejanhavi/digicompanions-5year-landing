export {};

declare global {
  interface Window {
    grecaptcha: any;
    recaptchaCallback: (token: string) => void;
    recaptchaExpiredCallback: () => void;
  }
}
