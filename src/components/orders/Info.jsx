import { useSelector } from 'react-redux';
import { selectOrderInDetails } from '../../redux/features/orders/orderSlice';
import { formatDate } from '../../helpers';

const Info = () => {
  const order = useSelector(selectOrderInDetails);

  return (
    <div className="mt-[52px] flex justify-between flex-wrap gap-y-[22px]">
      {Object.keys(order).map((key) => {
        const isDate = key === 'date';

        return (
          <article key={key} className="max-w-[40.3%] basis-1/2 text-base">
            {key !== 'order_items' && (
              <>
                <h4 className="text-darkGrayV2">{key}</h4>
                <p className="mt-3 py-4 px-5 text-desaturatedBlue rounded-[15px] border border-softBlueGray truncate overflow-hidden whitespace-nowrap">
                  {isDate
                    ? formatDate(order[key])
                    : order[key] !== null && order[key] !== ''
                    ? JSON.stringify(order[key])
                    : 'empty'}
                </p>
              </>
            )}
          </article>
        );
      })}
    </div>
  );
};

export default Info;
