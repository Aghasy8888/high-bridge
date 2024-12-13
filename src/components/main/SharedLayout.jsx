import { Outlet } from 'react-router-dom';
import { Header, Navigation } from '.';
import useSharedLayoutEffects from '../../hooks/useSharedLayoutEffects';

const SharedLayout = () => {
  useSharedLayoutEffects();

  return (
    <div className="flex h-[100vh]">
      <Navigation />
      <div className="w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
