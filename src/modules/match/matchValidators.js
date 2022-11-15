import yup from 'yup'

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


export const updateMatchScoreValidator = {
  id: validateMatchId(),
  homeTeamScore: validateHomeTeamScore(),
  awayTeamScore: validateAwayTeamScore(),
}
