import bestSellingProducts from '../../data/bestSellingProducts';

const Products = () => {
  const lastProductIndex = bestSellingProducts.length - 1;

  return bestSellingProducts.map((product, index) => {
    const isLastProduct = index === lastProductIndex;

    return (
      <tr key={product.id}>
        {Object.keys(product).map((key) => (
          <td
            key={key}
            className={`${!isLastProduct ? 'pb-3' : ''} ${
              key === 'quantity' ? 'text-tropicalGreen' : ''
            }`}
          >
            {product[key]}.
          </td>
        ))}
      </tr>
    );
  });
};

export default Products;
