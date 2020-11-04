export const totalPriceItems = order => order.price * order.count;

export const formatCurrency = (rub) => {
	return rub.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
}