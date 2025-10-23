const TableCells = ({
  item,
  isFirstItem,
  isLastItem,
  styles: { paddingBottom, paddingTop },
  greenItemName,
}) => {
  return Object.keys(item).map((key) => (
    <td
      key={key}
      className={`${!isLastItem ? paddingBottom : ''} ${
        isFirstItem ? paddingTop : ''
      } ${key === greenItemName ? 'text-tropicalGreen' : ''}`}
    >
      {key === 'orderId' ? `#${item[key]}` : item[key]}
      {key === 'id' ? '.' : ''}
    </td>
  ));
};

export default TableCells;
