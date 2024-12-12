import { Products } from './';

const MostSellingProducts = () => {
  return (
    <div className="py-5 pl-12">
      <table className="w-full">
        <thead>
          <tr className="text-desaturatedBlue text-base font-medium">
            <th className="text-start pb-3 pr-8">Id</th>
            <th className="text-start pb-3">Name</th>
            <th className="text-start pb-3 w-[25%]">Price</th>
            <th className="text-start pb-3">Quantity</th>
          </tr>
        </thead>
        <tbody className="text-darkGrayV2 text-base">
          <Products />
        </tbody>
      </table>
    </div>
  );
};

export default MostSellingProducts;
