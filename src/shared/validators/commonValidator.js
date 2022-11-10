import yup from 'yup'

function validateDate() {
    return yup.date()
        .optional()
        .typeError('A data informada é inválida')
}

function validateMatchId() {
    return yup.number()
        .optional()
        .typeError('O id informado é inválido')
}

export const commonValidator = {
  date: validateDate,
  matchId: validateMatchId
}