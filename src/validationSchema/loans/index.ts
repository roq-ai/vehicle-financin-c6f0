import * as yup from 'yup';

export const loanValidationSchema = yup.object().shape({
  loan_amount: yup.number().integer().required(),
  interest_rate: yup.number().integer().required(),
  loan_term: yup.number().integer().required(),
  monthly_emi: yup.number().integer().required(),
  disbursal_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
  lender_id: yup.string().nullable().required(),
});
