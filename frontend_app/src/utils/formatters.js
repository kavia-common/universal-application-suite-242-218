 /**
  * PUBLIC_INTERFACE
  * Number and currency formatters.
  */
export const formatCurrency = (value, currency = "USD") =>
  new Intl.NumberFormat(undefined, { style: "currency", currency }).format(Number(value || 0));

export const formatNumber = (value) => new Intl.NumberFormat().format(Number(value || 0));
