export function formatMoney(value) {
  const n = Number(value || 0);
  return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(n);
}
