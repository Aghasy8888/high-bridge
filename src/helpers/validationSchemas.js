import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email('You must enter a valid email').required('You must enter a email'),
    password: Yup
      .string()
      .required('Please enter your password.')
      .test(
        'min-length',
        'Password is too short - must be at least 4 chars.',
        (value) => !value || value.length >= 4 
      ),
  });