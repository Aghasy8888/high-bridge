import { Outlet, useNavigate } from 'react-router-dom';
import { Header, Navigation } from '.';
import { useEffect } from 'react';

const SharedLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/dashboard');
  }, []);

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
