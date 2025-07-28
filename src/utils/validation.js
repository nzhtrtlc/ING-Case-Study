export function validatePhone(phone) {
  const lang = document.documentElement.lang || 'en';

  const tr =
    /^(\+90\s?5\d{2}\s?\d{3}\s?\d{2}\s?\d{2}|0?5\d{2}\s?\d{3}\s?\d{2}\s?\d{2})$/;
  const uk = /^(\+44\s?7\d{3}\s?\d{3}\s?\d{3}|0?7\d{3}\s?\d{3}\s?\d{3})$/;
  return lang === 'tr' ? tr.test(phone) : uk.test(phone);
}
