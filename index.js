const data = {
  fundData: {
    data: {
      date: '2023-03-31T16:00:00+02:00',
      price: 3.2222926459891656,
      change: 0.013712435377968017,
      normalizedValue: 1.4,
    },
    name: 'Mocked Up Fund',
    id: 'cccccccccccccccccc',
  },
};

const quotes = [
  {
    id: 'bbbbbbbbbbbbbbbb',
    name: 'VTI',
    normalizedValue: 1.2,
    percentage: 40,
  },
  {
    id: 'llllllllllllllllllllllll',
    name: 'BND',
    normalizedValue: 1.1,
    percentage: 60,
  },
];

const cumulativeReturn = (quotes, fundPercentage) => {
  const fundPercentageSplit = fundPercentage / quotes.length;
  const fundPercentageCalculated =
    (fundPercentage * data.fundData.data.normalizedValue) / 100;
  const quotesValues = quotes.reduce((acc, curr) => {
    const percentage = curr.percentage - fundPercentageSplit;
    const value = curr.normalizedValue * percentage;
    const finalPercentage = value / 100;
    return acc + finalPercentage;
  }, 0);
  const sum = fundPercentageCalculated + quotesValues;
  const cumulativeReturnValue = (sum - 1) * 100;
  return cumulativeReturnValue.toFixed(2);
};

console.log(cumulativeReturn(quotes, 1));
