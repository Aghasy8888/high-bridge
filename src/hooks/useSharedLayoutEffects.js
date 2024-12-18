import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const useSharedLayoutEffects = () => {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (path === '/') {
      navigate('/dashboard');
    }
  }, []);
};

export default useSharedLayoutEffects;
