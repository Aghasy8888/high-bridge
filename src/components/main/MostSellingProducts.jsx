import { Tr } from '../../common';
import { Products } from './';

const MostSellingProducts = () => {
  return (
    <div className="py-5 pl-12">
      <table className="w-full">
        <thead>
          <Tr>
            <th className="text-start pb-3 pr-8">Id</th>
            <th className="text-start pb-3">Name</th>
            <th className="text-start pb-3 w-[25%]">Price</th>
            <th className="text-start pb-3">Quantity</th>
          </Tr>
        </thead>
        <tbody className="text-darkGrayV2 text-base">
          <Products />
        </tbody>
      </table>
    </div>
  );
};

export default MostSellingProducts;
