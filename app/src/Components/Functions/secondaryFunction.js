export const totalPriceItems = order => {
	const countTopping = order.topping && order.topping.filter(item => item.checked).length;
	const priceTopping = (order.price * 0.2) * countTopping || 0;
	return (order.price + priceTopping) * order.count;
};

export const formatCurrency = (rub) => {
	return rub.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
}

export const projection = (rules) => {
	const keys = Object.keys(rules);
	return obj => keys.reduce((newObj, key) => {
		newObj[key] = rules[key].reduce((val, fn, i) => (i ? fn(val) : obj[fn]), null)
		return newObj;
	}, {})
}