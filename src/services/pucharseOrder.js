export const getPucharseOrder = () => {
  return calculateTotal(getOrderStorage())
}

export const calculateTotal = (items = []) => {
  if (items?.length > 0) {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  } else {
    return 0
  }
}

export const getOrderStorage = () => {
  const data = localStorage.getItem('products')
  return data ? JSON.parse(data) : []
}

export const postOrderStorage = (items) => {
  if (items?.length > 0) {
    localStorage.setItem('products', JSON.stringify(items))
  } else {
    localStorage.removeItem('products')
  }
}

export const postItemStorage = (item) => {
  const data = getOrderStorage()

  if (data?.length > 0) {
    localStorage.setItem('products', JSON.stringify([...data, item]))
  } else {
    localStorage.setItem('products', JSON.stringify([item]))
  }
}
