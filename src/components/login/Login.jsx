import { logo } from '../../assets';
import { Spinner } from '../../common';
import { BuildingTheFuture, LoginForm } from '.';
import useLogin from '../../hooks/useLogin';
import { useSelector } from 'react-redux';
import {
  selectAuthLoading,
  selectIsAuthenticated,
} from '../../redux/features/auth/authSlice';

const Login = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const loading = useSelector(selectAuthLoading);
  useLogin();

  if (isAuthenticated) {
    return null;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="flex justify-center w-screen font-zen h-screen bg-login bg-cover bg-center max-w-[2000px]">
      <div className="absolute inset-0 bg-overlay bg-cover bg-center"></div>
      <div className="w-[952px] sm:mx-6 lg:mx-0 mt-[132px] flex justify-between sm:gap-6 lg:gap-28 ">
        <section className="w-1/2 mt-[103px]">
          <div className="relative z-1 flex gap-3">
            <img src={logo} alt="logo" />
          </div>
          <BuildingTheFuture />
        </section>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
