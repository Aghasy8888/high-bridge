import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { Title, Tr } from '../../../common';
import useGetOrders from '../../../hooks/useGetOrders';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectOrderLoading,
  selectOrderPagination,
} from '../../../redux/features/orders/orderSlice';
import { getOrders } from '../../../redux/features/orders/orderService';
import Orders from '../Orders';

import './pagination.css';

const PaginatedOrders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pagination = useSelector(selectOrderPagination);
  const showOrderSpinner = useSelector(selectOrderLoading);
  const pageCount = Math.ceil(pagination?.total / pagination?.per_page);

  useGetOrders();

  const handlePageClick = (e) => {
    const page = e.selected + 1;

    dispatch(getOrders({ page, navigate }));
  };

  return (
    <section className="min-h-screen flex flex-col justify-between gap-6 pl-[26px] pr-[54px] py-[30px]">
      <div>
        <Title title="Order list" />
        <div className="bg-white mt-9 pl-[30px] pr-[22px] pt-4 pb-5 rounded-[25px]">
          <table className="w-full">
            <thead>
              <Tr>
                <th className="text-start pb-3 w-[15%]">Order ID</th>
                <th className="text-start pb-3 w-[15%]">User ID</th>
                <th className="text-start pb-3 w-[20%]">Date</th>
                <th className="text-start pb-3 w-[15%]">Amount</th>
                <th className="text-start pb-3 w-[5%]">Action</th>
              </Tr>
            </thead>
            <tbody className="text-darkGrayV2 text-base">
              {showOrderSpinner ? (
                <tr className="w-full text-4xl p-3">
                  <td className="py-6">Loading...</td>
                </tr>
              ) : (
                <Orders />
              )}
            </tbody>
          </table>
        </div>
      </div>
      {pageCount > 1 && (
        <div className="flex justify-end pagination bg-transparent">
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next >"
            onPageChange={(e) => handlePageClick(e)}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="< Previous"
            renderOnZeroPageCount={null}
            marginPagesDisplayed={1}
            disabledClassName={'disabled'}
          />
        </div>
      )}
    </section>
  );
};

export default PaginatedOrders;
