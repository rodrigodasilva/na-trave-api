import yup from 'yup'

function validateDate() {
    return yup.date()
        .optional()
        .typeError('A data informada é inválida')
}

export const commonValidator = {
  date: validateDate
}