// help us ge tht eucrrency symbol
expor const getCurrencySymbol = countryCode => {
  const currencies = {
    gb: '£',
    us: '$',
    au: '$',
    ca: '$'
  }
  return currencies[countryCode]
}

export const extractFormData = form => Array
    .from(for.elements)
    .reduce((acc, { id, value}) => ({ ...acc, [id]: value}), {}); 
