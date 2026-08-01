export function formatPrice(amount, currencyCode) {
    if (!amount) return "";
  
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currencyCode,
    }).format(Number(amount));
  }