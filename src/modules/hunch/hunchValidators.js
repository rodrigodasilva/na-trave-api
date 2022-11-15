import yup from 'yup'

function validateHunchId() {
  return yup.string()
      .required('O id do palpite informado é inválido')
      .typeError('O id do palpite deve ser uma string')
}

function validateMatchId() {
  return yup.number()
      .required('O id da partida informado é inválido')
      .typeError('O id da partida deve ser um número')
}

function validateHomeTeamScore() {
  return yup.number()
      .required('O placar do time da casa é obrigatório')
      .typeError('O placar do time da casa deve ser um número')
      .min(0, 'O placar do time da casa não deve ser um número negativo')
}

function validateAwayTeamScore() {
  return yup.number()
      .required('O placar do time visitante é obrigatório')
      .typeError('O placar do time visitante deve ser um número')
      .min(0, 'O placar do time visitante não deve ser um número negativo')
}

function validateHunchQuantity() {
  return yup.number()
      .required('A quantidade de palpites é obrigatório')
      .typeError('A quantidade de palpites deve ser um número')
      .min(1, 'A quantidade de palpites não deve ser menor que 1')
}

function validateRequiredString(fieldName) {
  return yup.string()
    .required(`O ${fieldName} é obrigatório`)
    .trim(`O ${fieldName} não pode ser vazio`)
}

function validatePayment() {
  return yup.string()
    .required('O status do pagamento é obrigatório')
    .oneOf(['finished', 'pending'], ({values}) => `O status do pagamento deve ser: ${values}`)
}

export const createHunchValidator = {
  matchId: validateMatchId(),
  homeTeamScore: validateHomeTeamScore(),
  awayTeamScore: validateAwayTeamScore(),
  contactName: validateRequiredString('nome'),
  contactPhone: validateRequiredString('telefone'),
  quantity: validateHunchQuantity(),
  payment: validatePayment()
}

export const updateHunchValidator = {
  id: validateHunchId(),
  homeTeamScore: validateHomeTeamScore(),
  awayTeamScore: validateAwayTeamScore(),
  contactName: validateRequiredString('nome'),
  contactPhone: validateRequiredString('telefone'),
  payment: validatePayment()
}