export const formatCurrency = (rub) => {
	return rub.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
}