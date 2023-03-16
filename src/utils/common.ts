const common = {
 
  getDollarPricing: (price: number, isDigitFraction = true) => {
    const options = {
      style: "currency",
      currency: "USD",
      //   maximumSignificantDigits: 6,
      minimumFractionDigits: isDigitFraction ? 2 : 0,
    };
    const dollar = new Intl.NumberFormat("en-US", options).format(price);
    return dollar;
  },
};

export default common;
