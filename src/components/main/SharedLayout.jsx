import { Outlet } from 'react-router-dom';
import { Header, Navigation } from '.';
import useSharedLayoutEffects from '../../hooks/useSharedLayoutEffects';

const SharedLayout = () => {
  useSharedLayoutEffects();

  return (
    <div className="flex min-h-screen">
      <Navigation />
      <div className="w-full">
        <Header />
        <div className="min-h-screen bg-whiteV3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;
