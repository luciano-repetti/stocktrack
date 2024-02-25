export const formatPriceArg = (price) => {
  if (price) {
    return price.toLocaleString('es-AR')
  } else {
    return '0'
  }
}
