// Phone links (tel: to call, sms: to text) work best with the full
// international form: "+1" (the US and Canada country code) followed by
// digits only. "407-240-8581" becomes "+14072408581".
export function toPhoneLinkNumber(display: string): string {
  const digits = display.replace(/\D/g, "");

  if (digits.length < 10) {
    return "";
  }
  if (digits.length === 11 && digits.startsWith("1")) {
    return "+" + digits;
  }

  return "+1" + digits;
}

export function callHref(display: string): string {
  return `tel:${toPhoneLinkNumber(display)}`;
}

export function textHref(display: string): string {
  return `sms:${toPhoneLinkNumber(display)}`;
}
