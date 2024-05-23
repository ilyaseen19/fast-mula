const _calcInterest = data => {
  const {rate, amount} = data;

  const interest = (rate / 100) * amount;
  const tottalAmount = JSON.stringify(amount + interest);
  
  return tottalAmount;
};

export {_calcInterest};
