import { useSelector } from 'react-redux';
import { selectOrders } from '../../redux/features/orders/orderSlice';
import { filterRequiredProps } from '../../helpers';
import { TableCells } from '../../common';

const OrderList = () => {
  const orders = useSelector(selectOrders);
  const ordersForMap = filterRequiredProps(orders);
  const isLastIndex = ordersForMap.length - 1;

  return ordersForMap.map((order, index) => {
    const isLastOrder = index === isLastIndex;
    const isFirstOrder = index === 0;

    return (
      <tr key={index}>
        <TableCells
          greenItemName="amount"
          isFirstItem={isFirstOrder}
          isLastItem={isLastOrder}
          item={order}
          styles={{ paddingBottom: 'pb-5', paddingTop: 'pt-5' }}
        />
        <td
          className={`${isLastOrder ? '' : 'pb-5'} ${
            isFirstOrder ? 'pt-5' : ''
          } text-blueV1`}
        >
          <button className="py-[5px] px-4 text-start w-full border border-solid rounded-[50px]  border-blueV1">
            View
          </button>
        </td>
      </tr>
    );
  });
};

export default OrderList;
