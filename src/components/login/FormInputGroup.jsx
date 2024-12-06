import PropTypes from 'prop-types';
import { InputWithTitle } from '../../common';
import { useState } from 'react';

const FormInputGroup = ({
  validationErrors,
  formValues,
  handleChange,
  inputRef,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <InputWithTitle
        handleChange={handleChange}
        inputValue={formValues.email}
        error={validationErrors.email}
        name="email"
        inputRef={inputRef}
        title="Email"
        type="email"
      />

      <InputWithTitle
        handleChange={handleChange}
        setShowPassword={setShowPassword}
        inputValue={formValues.password}
        error={validationErrors.password}
        name="password"
        title="Password"
        showPassword={showPassword}
        type={showPassword ? 'text' : 'password'}
      />
    </div>
  );
};

FormInputGroup.propTypes = {
  validationErrors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  formValues: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  inputRef: PropTypes.object,
};

export default FormInputGroup;
