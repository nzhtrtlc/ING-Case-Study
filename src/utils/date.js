export function DMYtoIso(inputDate) {
  console.log('inputDate', inputDate);
  if (!inputDate) {
    return '';
  }
  const [dd, mm, yyyy] = inputDate.split('/');
  if (!dd || !mm || !yyyy) {
    return;
    //throw new Error('Tarih "dd/mm/yyyy" formatında olmalı');
  }
  return `${yyyy}-${mm.padStart(2, '0')}-${dd.padStart(2, '0')}`;
}

export function isoToDMY(isoDate) {
  const [y, m, d] = isoDate.split('-');
  if (!y || !m || !d) return '';
  return `${d.padStart(2, '0')}/${m.padStart(2, '0')}/${y}`;
}
