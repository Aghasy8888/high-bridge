import { TableCells } from '../../common';
import bestSellingProducts from '../../data/bestSellingProducts';

const Products = () => {
  const lastProductIndex = bestSellingProducts.length - 1;

  return bestSellingProducts.map((product, index) => {
    const isLastProduct = index === lastProductIndex;

    return (
      <tr key={product.id}>
        <TableCells
          isFirstItem={index === 0}
          greenItemName="quantity"
          isLastItem={isLastProduct}
          item={product}
          styles={{ paddingBottom: 'pb-3', paddingTop: 'pt-[10px]' }}
        />
      </tr>
    );
  });
};

export default Products;
