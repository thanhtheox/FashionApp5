
export function dollarType(string) {
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(string);
}