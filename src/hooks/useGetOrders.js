import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getOrders } from '../redux/features/orders/orderService';
import { useNavigate } from 'react-router-dom';

const useGetOrders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOrders({ page: 1, navigate }));
  }, []);
};

export default useGetOrders;
