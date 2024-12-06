import { useRef, useState } from 'react';
import * as Yup from 'yup';
import { Checkbox, LoginFormHeader } from '../../common/';
import { loginValidationSchema } from '../../helpers/validationSchemas';
import { loginDefaultValues } from '../../data';
import { Link } from 'react-router-dom';
import { FormInputGroup } from './';
import useFocusRef from '../../hooks/useFocusRef';

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [formValues, setFormValues] = useState(loginDefaultValues);
  const [validationErrors, setValidationErrors] = useState({});
  const emailInputRef = useRef(null);
  useFocusRef(emailInputRef, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formValues;

    try {
      await loginValidationSchema.validate(formValues, {
        abortEarly: false,
      });
      const loginValues = {
        email,
        password,
      };

      console.log('loginValues', loginValues);

      //   dispatch(login({ data: loginValues, navigate }));
      setValidationErrors({});
    } catch (error) {
      if (Yup.ValidationError.isError(error)) {
        const errors = {};
        error.inner.forEach((err) => {
          if (err.path) {
            const key = err.path;
            errors[key] = err.message;
          }
        });
        setValidationErrors(errors);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;    
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <section className="relative z-1 w-1/2 px-10 pt-10 rounded-tl-3xl rounded-tr-3xl bg-neutral-50">
      <LoginFormHeader />
      <form
        noValidate
        className="flex flex-col gap-4 mt-7 w-full text-[13px]"
        onSubmit={handleSubmit}
      >
        <FormInputGroup
          formValues={formValues}
          handleChange={handleChange}
          validationErrors={validationErrors}
          inputRef={emailInputRef}
        />

        <div className="flex justify-between">
          <Checkbox
            checked={rememberMe}
            setChecked={setRememberMe}
            name="rememberMe"
            inputLabel="Remember Me"
          />

          <Link href={''} className="text-middleGray">
            Forgot Password?
          </Link>
        </div>
        <button
          className="w-full bg-darkGray rounded-lg py-4 text-white"
          onClick={handleSubmit}
        >
          CONTINUE
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
