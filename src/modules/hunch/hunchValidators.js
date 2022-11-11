import yup from 'yup'

function validateSellerId() {
  return yup.string()
      .required('O id do vendedor informado é inválido')
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

function validateRequiredString(fieldName) {
  return yup.string()
    .required(`O ${fieldName} é obrigatório`)
    .trim(`O ${fieldName} não pode ser vazio`)
}

export const createHunchValidator = {
  matchId: validateMatchId(),
  homeTeamScore: validateHomeTeamScore(),
  awayTeamScore: validateAwayTeamScore(),
  contactName: validateRequiredString('nome'),
  contactPhone: validateRequiredString('telefone')
}