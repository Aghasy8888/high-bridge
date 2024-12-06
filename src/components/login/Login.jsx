import { logo } from '../../assets';
import { BuildingTheFuture, LoginForm } from '.';

const Login = () => {
  return (
    <div className="flex justify-center w-screen font-zen h-screen bg-login bg-cover bg-center max-w-screen-2xl">
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