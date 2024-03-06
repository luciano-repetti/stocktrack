import validator from 'validator'

export function orderValidations({ name, price, description, quantity }) {
  const messageError = {
    name: '',
    price: '',
    description: '',
    quantity: '',
  }

  if (validator.isEmpty(name)) {
    messageError.name = 'El campo de nombre es obligatorio.'
  }

  if (validator.isEmpty(price)) {
    messageError.price = 'El campo de precio es obligatorio.'
  }

  if (validator.isEmpty(quantity)) {
    messageError.quantity = 'El campo de cantidad es obligatorio.'
  }

  return messageError
}
