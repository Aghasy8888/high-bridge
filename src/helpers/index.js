export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const filterRequiredProps = (orders) => {
  return orders.map((order) => {
    const { date, id, user_id, order_items } = order;
    const { currency, total_price } = order_items;

    return {
      orderId: id,
      user_id,
      date: formatDate(date),
      amount: `${total_price} ${currency}`,
    };
  });
};

export function formatDate(inputDate) {
  const date = new Date(inputDate);

  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' }); // Get abbreviated month
  const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
  const minutes = String(date.getMinutes()).padStart(2, '0'); // Pad single-digit minutes
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

  return `${day} ${month}, ${hours}.${minutes} ${ampm}`;
}
