import { CURRENCY_PRECISION, CURRENCY_SYMBOL } from "@/utils/const";

export function toFormattedNumber(num, precision = 0) {
  const multiplier = Math.pow(10, precision);
  const resultNum = Math.ceil(num * multiplier) / multiplier;
  return resultNum.toString().replace(/\d(?=(\d{3})+?($|\.))/g, "$& ");
}

export function toFormattedCurrency(num) {
  return `${toFormattedNumber(num, CURRENCY_PRECISION)} ${CURRENCY_SYMBOL}`;
}
