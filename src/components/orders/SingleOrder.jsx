import { useNavigate, useParams } from 'react-router-dom';
import { Title } from '../../common';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../redux/features/orders/orderService';
import { Info } from '../orders';
import { selectOrderLoading } from '../../redux/features/orders/orderSlice';

const SingleOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orderId } = useParams();
  const orderLoading = useSelector(selectOrderLoading);

  useEffect(() => {
    dispatch(getOrder({ orderId, navigate }));
  }, []);

  return (
    <section className="pt-[30px] pl-9 pr-11">
      <Title title="Order details" />
      <div className="mt-12 pl-11 pr-7 pt-9 pb-28 bg-white rounded-3xl">
        <h3 className="text-blueV2 text-base font-medium relative after:content-[''] after:block after:w-28 after:h-[3px] after:bg-blueV2 after:rounded-tl-[10px] after:rounded-tr-[10px] after:absolute after:-left-4 after:bottom-0 border-b border-softGray pb-2">
          Main info
        </h3>
        {orderLoading ? <p className="mt-[52px] text-3xl">Loading...</p> : <Info />}
      </div>
    </section>
  );
};

export default SingleOrder;
