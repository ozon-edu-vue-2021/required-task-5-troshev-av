export const ARRAY_PROP_DEFAULT = () => [];

export const OPTIONS_PROP_VALIDATOR = (options) =>
  options.every((item) => "label" in item && "value" in item);

export const SUMMARY_DETAILS_PROP_VALIDATOR = OPTIONS_PROP_VALIDATOR;

export const PRODUCT_LIST_FORMAT_DEFAULT = "list";

export const PRODUCT_OBJECT_VALIDATOR = (product) =>
  ["id", "name", "preview", "cost"].every((key) => key in product);

export const CURRENCY_PRECISION = 2;
export const CURRENCY_SYMBOL = "₽";

export const MAX_PRODUCT_COUNTER = 1000;
