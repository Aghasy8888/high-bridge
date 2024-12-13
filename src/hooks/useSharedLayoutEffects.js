import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const useSharedLayoutEffects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/dashboard');
  }, []);  
};

export default useSharedLayoutEffects;
